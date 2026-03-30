import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
    patientId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    patient:{
        type: String,
        required: [true, 'Enter your patient name'],
        trim: true,
        maxLength: [30, 'Name cannot be more than 30 characters']
    },
    age: {
        type: Number,
        required: [true, 'Enter patient age'],
        min: [1, 'Age must be valid'],
        max: [120, "Age must be valid"]
    },
    symptoms:{
        type: String,
        trim: true,
        maxLength: [500, 'Symptoms description cannot exceed 500 characters']
    },
    department: {
        type: String,
        required: [true, 'Department is required'],
        enum: ['cardiology', 'neurology', 'orthopedics', 'general', 'pediatrics', 'gastroenterology']
    },
    doctorName: {
        type: String,
        required: [true, 'Doctor selection is required'],
    },
    doctorId:{
        type: String,
        required: true
    },
    appointmentDate: {
        type: Date,
        required: [true, 'Appointment Date is required'],
    },
    timeSlot: {
        type: String,
        required: [true, 'Time slot is required'],
    },
    status: {
        type: String,
        enum: ['Pending', 'Confirmed', 'Completed', 'Cancelled'],
        default: 'Pending',
    },
    paymentStatus: {
      type: String,
      enum: ['Unpaid', 'Paid', 'Refunded'],
      default: 'Unpaid',
    }
},{
    timestamps: true
})

appointmentSchema.index({doctorId: 1, appointmentDate: 1, timeSlot:1}, {unique: true})

const Appointment = mongoose.model('Appointment', appointmentSchema)
export default Appointment