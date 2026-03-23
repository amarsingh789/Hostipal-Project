import userModel from "../models/user.model.js";
import crypto from 'crypto'
import config from '../config/config.js'
import jwt from 'jsonwebtoken'


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
    const accessToken = jwt.sign({
        id: user._id
    }, config.JWT_SECRET,{
        expiresIn: '15m'
    })

    const refreshToken = jwt.sign({
        id: user._id,
    },
    config.JWT_SECRET,
    {
        expiresIn: '7d'
    },    
)
    res.cookie('refreshToken', refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 * 60 * 1000,
    })
    res.status(201).json({
        message: 'User registered successfully',
        user: {
            name: user.name,
            email: user.email,
            mobileNumber: user.mobileNumber
        },
        accessToken
    })
}

export async function userData(req, res){
    const token = req.headers.authorization?.split(" ")[1];
    if(!token){
        return res.status(401).json({
            message: 'token not found'
        })
    }

    const decoded = jwt.verify(token, config.JWT_SECRET);
    const user = await userModel.findById(decoded.id)

    res.status(200).json({
        message: 'User Fetch Successfully',
        user: {
            name: user.name,
            email: user.email,
            mobileNumber: user.mobileNumber
        }
    })
}

export async function refreshToken(req, res){
    const refreshToken = req.cookies.refreshToken;

    if(!refreshToken){
        return res.status(401).json({
            message: 'Refresh token not found'
        });
    }

    const decoded = jwt.verify(refreshToken, config.JWT_SECRET);

    const accessToken = jwt.sign({
        id: decoded.id
    }, config.JWT_SECRET, {
        expiresIn: '15m'
    })

    const newRefreshToken = jwt.sign({
        id: decoded.id
    },
    config.JWT_SECRET,{
        expiresIn: '7d'
    },
);
    res.cookie('refreshToken', newRefreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 7 * 24 * 60 *60 * 1000
    })

    res.status(200).json({
        message: "Access token refreshed successfully",
        accessToken
    })
}