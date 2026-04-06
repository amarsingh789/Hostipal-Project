import userModel from "../models/user.model.js";
import crypto from 'crypto'
import config from '../config/config.js'
import jwt from 'jsonwebtoken'
import sessionModel from "../models/session.model.js";
import { generateOtp } from "../utils/utils.js";
import otpModel from "../models/otp.model.js";


export async function register(req, res){
    const {name, email, mobileNumber, password} = req.body;

    const userisAlreadyPresent = await userModel.findOne({
        $or: [
            {email},
            {mobileNumber}
        ]
    })
    if(userisAlreadyPresent){
        return res.status(409).json({
            message: 'User with the same mobile number or email already exists'
        })
    }

    const hashPassword = crypto.createHash('sha256').update(password).digest('hex');

    const user = await userModel.create({
        name,
        email,
        mobileNumber,
        password: hashPassword
    })

    const refreshToken = jwt.sign({
        id: user._id,
    },
    config.JWT_SECRET,
    {
        expiresIn: '7d'
    },    
)
const refreshTokenHash = crypto.createHash('sha256').update(refreshToken).digest('hex')

const session = await sessionModel.create({
    user: user._id,
    refreshTokenHash,
    ip: req.ip,
    userAgent: req.headers['user-agent']
})

    const accessToken = jwt.sign({
        id: user._id,
        sessionId: session._id
    }, config.JWT_SECRET,{
        expiresIn: '15m'
    })

    
    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000,
    })
    res.status(201).json({
        message: 'User registered successfully',
        user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            mobileNumber: user.mobileNumber
        },
        accessToken
    })
}

export async function login(req, res){
    const {email, password, mobileNumber} = req.body

    // const user = await userModel.findOne({
    //     $or: [{email}, {mobileNumber}]
    // }).select('+password')
    const user = await userModel.findOne({
        email: { $regex: new RegExp(`^${email.trim()}$`, 'i') }
    }).select('+password');
    if(!user){
        return res.status(401).json({
            message: "Invalid username or password"
        })
    }

    const hashPassword = crypto.createHash('sha256').update(password).digest('hex')

    const isValidPassword = hashPassword === user.password;

    if(!isValidPassword){
        return res.status(401).json({
            message: "Invalid email or password"
        })
    }

    const refreshToken = jwt.sign({
        id: user._id,
    }, config.JWT_SECRET,{
            expiresIn: '7d'
    })

    const refreshTokenHash = crypto.createHash('sha256').update(refreshToken).digest('hex')

    const session = await sessionModel.create({
        user: user._id,
        refreshTokenHash,
        ip: req.ip,
        userAgent: req.headers['user-agent']
    })

    const accessToken = jwt.sign({
        id: user._id,
        sessionId: session._id
    }, config.JWT_SECRET, {
        expiresIn: '15m'
    })

    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 7 * 24 * 60 * 60 * 1000
    })

    res.status(200).json({
        message: 'Logged in Successfully',
        user: {
            _id: user._id,
            name: user.name,
            email: user.email,
            mobileNumber: user.mobileNumber
        },
        accessToken
    })
}

export async function userData(req, res){
    // const token = req.headers.authorization?.split(" ")[1];
    // if(!token){
    //     return res.status(401).json({
    //         message: 'token not found'
    //     })
    // }

    // const decoded = jwt.verify(token, config.JWT_SECRET);
    // const user = await userModel.findById(decoded.id)

    // res.status(200).json({
    //     message: 'User Fetch Successfully',
    //     user: {
    //         name: user.name,
    //         email: user.email,
    //         mobileNumber: user.mobileNumber
    //     }
    // })
    try{
        const authHeader = req.headers.authorization
        if(!authHeader || !authHeader.startsWith("Bearer")){
            return res.status(401).json({ message: 'Authorization header missing' });
        }

        const token = authHeader.split(" ")[1];
        if (!token || token === "undefined" || token === "null") {
            return res.status(401).json({ message: 'Token is invalid or empty' });
        }

        const decoded = jwt.verify(token, config.JWT_SECRET);
        const user = await userModel.findById(decoded.id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({
            message: 'User Fetched Successfully',
            user: {
                _id: user._id,
                name: user.name,
                email: user.email,
                mobileNumber: user.mobileNumber
            }
        });
    }catch(err){
        console.error("JWT Error in userData:", err.message);

        if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
            return res.status(401).json({ message: 'Access token invalid or expired' });
        }

        res.status(500).json({ message: 'Internal server error' });
    }
}

export async function refreshToken(req, res){
    const refreshToken = req.cookies.refreshToken;

    if(!refreshToken){
        return res.status(401).json({
            message: 'Refresh token not found'
        });
    }

    try{
        const decoded = jwt.verify(refreshToken, config.JWT_SECRET);

    const refreshTokenHash = crypto.createHash('sha256').update(refreshToken).digest('hex')

    const session = await sessionModel.findOne({
        refreshTokenHash,
        revoked: false
    })

    if(!session){
        return res.status(401).json({
            message: "Invalid refresh token"
        })
    }

    const accessToken = jwt.sign({
        id: decoded.id,
        sessionId: session._id
    }, config.JWT_SECRET, {
        expiresIn: '15m'
    })

//     const newRefreshToken = jwt.sign({
//         id: decoded.id
//     },
//     config.JWT_SECRET,{
//         expiresIn: '7d'
//     },
// );

//     const newRefreshTokenHash = crypto.createHash('sha256').update(newRefreshToken).digest('hex')

//     session.refreshTokenHash = newRefreshTokenHash
//     await session.save()

//     res.cookie('refreshToken', newRefreshToken, {
//         httpOnly: true,
//         secure: true,
//         sameSite: 'strict',
//         maxAge: 7 * 24 * 60 *60 * 1000
//     })
    const now = Math.floor(Date.now()/1000);
    const secondsToExpire = decoded.exp - now;

    const refreshBuffer = 2 * 24 * 60 * 60; 

    if(secondsToExpire < refreshBuffer){
        console.log('Refresh token is nearing expiration, consider issuing a new one');

        const newRefreshToken = jwt.sign({
            id: decoded.id
        }, config.JWT_SECRET,{
            expiresIn: '7d'
        })

        const newRefreshTokenHash = crypto.createHash('sha256').update(newRefreshToken).digest('hex')
        
        session.refreshTokenHash = newRefreshTokenHash
        await session.save()

        res.cookie('refreshToken', newRefreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        })
       }

    res.status(200).json({
        message: "Access token refreshed successfully",
        accessToken
    })
    }catch(err){
        console.error("Refresh Token Error:", err.message);
        return res.status(401).json({ message: 'Refresh token invalid' });
    }
}

export async function logout(req, res){
    const refreshToken = req.cookies.refreshToken

    if(!refreshToken){
        return res.status(400).json({
            message: 'Refresh token not found'
        })
    }

    const refreshTokenHash = crypto.createHash('sha256').update(refreshToken).digest('hex')

    const session = await sessionModel.findOne({
        refreshTokenHash,
        revoked: false
    })
    if(!session){
        return res.status(400).json({
            message: 'Invalid refresh token '
        })
    }
    session.revoked = true
    await session.save()

    res.clearCookie('refreshToken')
    res.status(200).json({
        message: 'User is successfully Logout'
    })
}

export async function logoutAll(req, res){
    const refreshToken = req.cookies.refreshToken;

    if(!refreshToken){
        return res.status(400).json({
            message: 'Refresh token not found'
        })
    }

    const decoded = jwt.verify(refreshToken, config.JWT_SECRET)

    await sessionModel.updateMany({
        user: decoded.id,
        revoked: false
    },{
        revoked: true
    })
    res.clearCookie('refreshToken')

    res.status(200).json({
        message: 'Log out from all device successfully'
    })
}

// OTP Base authentication
// export async function sendOtp(req, res){
//     const {mobileNumber} = req.body

//     if(!mobileNumber){
//         return res.status(400).json({
//             message: "Mobile no is required"
//         })
//     }

//     const otp = generateOtp()

//     const otpHash = crypto.createHash('sha256').update(otp).digest('hex')

//     const expiresAt = new Date(Date.now() + 5 * 60 * 1000)

//     await otpModel.deleteMany({mobileNumber})

//     await otpModel.create({
//         mobileNumber,
//         otpHash,
//         expiresAt
//     })

//     console.log(`[ZIVA] OTP for ${mobileNumber} is: ${otp}`);

//     res.status(200).json({
//         message: "OTP send successfully"
//     })
// }

// export async function verifyOtp(req, res){
//     const {mobileNumber, name, email, otp} = req.body;

//     const incomingOtpHash = crypto.createHash('sha256').update(otp).digest('hex')

//     const otpDoc = await otpModel.findOne({
//         mobileNumber,
//         otpHash: incomingOtpHash
//     })

//     if(!otpDoc){
//         return res.status(400).json({
//             message: 'Invalid OTP'
//         })
//     }

//     if(otpDoc.expiresAt < new Date()){
//         await otpModel.deleteMany({mobileNumber})
//         return res.status(400).json({
//             message: "OTP has expired. Please request a new one."
//         })
//     }

    

//     let user = await userModel.findOne({mobileNumber})

//     if(!user){
//         user = await userModel.create({
//             mobileNumber,
//             name: name || 'Ziva user',
//             email: email || undefined
//         })
//     }

//     const refreshToken = jwt.sign({
//         id: user._id
//     }, config.JWT_SECRET, {
//         expiresIn: "7d"
//     })

//     const refreshTokenHash = crypto.createHash('sha256').update(refreshToken).digest('hex')

//     const session = await sessionModel.create({
//         user: user._id,
//         refreshTokenHash,
//         ip: req.ip,
//         userAgent: req.headers['user-agent']
//     })

//     const accessToken = jwt.sign({
//         id: user._id,
//         sessionId: session._id
//     }, config.JWT_SECRET, {
//         expiresIn: '15m'
//     })

//     res.cookie("refreshToken", refreshToken, {
//         httpOnly: true,
//         secure: true,
//         sameSite: "strict",
//         maxAge: 7 * 24 * 60 *60 * 1000
//     })
//     res.status(200).json({
//         message: "Logged in Successfully",
//         user: {
//             name: user.name,
//             mobileNumber: user.mobileNumber,
//             email: user.email
//         },
//         accessToken
//     })
// }

export async function updateProfile(req, res){
    try{
        const userId = req.params.id;
        const updateData = req.body

        const updateUser = await userModel.findByIdAndUpdate(
            userId,
            {$set: updateData},
            {new: true, runValidators: true}
        ).select('-password')

        if(!updateUser){
            return res.status(404).json({
                message: "User not found"
            })
        }

        res.status(200).json({
            message: "Profile updated successfully",
            user: updateUser
        })
    }catch(error){
        console.error("Profile update Error", error),
        res.status(500).json({ message: "Internal server error", error: error.message });
    }

}