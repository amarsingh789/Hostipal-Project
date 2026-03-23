import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Enter your name'],
        trim: true,
        maxLength: [30, 'Name cannot be more than 30 characters']
    },
    mobileNumber: {
        type: String,
        unique: [true, "Email must be unique"],
        sparse: true,
        trim: true,
        match: [/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number']
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email must be unique"],
        sparse: true,
        trim: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please add a valid email']
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        minLength: [6, 'Password must be at least 6 characters'],
        select: false
    },
    role: {
        type: String,
        enum: ['patient'],
        default: 'patient',
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other', 'prefer not to say'],
    },
    dateOfBirth: {
        type: Date,
    },
    profileImage: {
      type: String,
      default: 'default-avatar.png',
    },
    isPhoneVerified: {
        type: Boolean,
        default: false
    },
    isEmailVerified:{
        type: Boolean,
        default: false,
    }
},{
    timestamps: true
})


userSchema.pre('validate', function(){
    if(!this.email && !this.mobileNumber){
        this.invalidate('email', 'You must provide either an email or a mobile number to register.')
    }
})

const userModel = mongoose.model('User', userSchema)
export default userModel