import mongoose from "mongoose";

const labResultSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    name: {
        type: String,
        required: [true, 'Lab test name is required'],
        trim: true,
    },
    date: {
        type: String,
        required: [true, 'Date is required'],
        trim: true,
    },
    status: {
        type: String,
        required: [true, 'Lab test status is required'],
        enum: ['Normal', "Borderline", "high", "low"],
        trim: true,
    },
    doctor: {
        type: String,
        required: [true, 'Doctor name is required'],
        trim: true,
    },
    fileUrl: {
        type: String,
    }
}, {
    timestamps: true
})

const LabResult = mongoose.model('LabResult', labResultSchema)