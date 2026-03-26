import mongoose from "mongoose";

const otpSchema = new mongoose.Schema(
    {
        mobileNumber: {
            type: String,
            required: [true, "Mobile no is required"],
            trim: true,
        },
        otpHash: {
            type: String,
            required: [true, "OTP hash is required"],
        },
        expiresAt: {
            type: Date,
            required: [true, "Date is required"],
        }
    },
    {
        timestamps: true,
    }
);

otpSchema.index({createdAt: 1}, { expireAfterSeconds: 300});

export default mongoose.model('Otp', otpSchema)
