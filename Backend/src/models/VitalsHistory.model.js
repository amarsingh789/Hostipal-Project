import mongoose from "mongoose";

const vitalsHistorySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    month: {
        type: String,
        required: [true, 'Month is required'],
        enum: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    },
    heartRate: {
        type: Number
    },
    bpSys: {
        type: Number,
    },
    bpDia: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    healthScore: {
        type: Number,
    },
    dateRecorded: {
        type: Date,
        default: Date.now,
    }
}, {
    timestamps: true
})

export const VitalsHistory = mongoose.model('VitalsHistory', vitalsHistorySchema)