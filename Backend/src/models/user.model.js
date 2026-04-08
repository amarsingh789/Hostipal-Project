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
        unique: true,
        sparse: true,
        trim: true,
        match: [/^[6-9]\d{9}$/, 'Please enter a valid 10-digit Indian mobile number'],
        required: [true, 'Enter your mobile number'],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: [true, "Email must be unique"],
        sparse: true,
        trim: true,
        lowercase: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please add a valid email']
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        required: function(){
            return this.mobileNumber == null
        },
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
    isEmailVerified:{
        type: Boolean,
        default: false,
    },
    bloodGroup: {
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    userHeight: {
        type: Number,
        min: [0, 'Height cannot be negative'],
    },
    userWeight: {
        type: Number,
        min: [0, 'Weight cannot be negative'],
    },
    // VITALS FIELDS
    heartRate: {
        type: Number
    },
    bpSys: {
        type: Number,
    },
    bpDia: {
        type: Number,
    },
    healthScore: {
        type: Number,
    },
    userAddress: {
        type: String,
        trim: true,
    },
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