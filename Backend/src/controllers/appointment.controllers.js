import Appointment from "../models/appointment.model.js";
import config from "../config/config.js";

export const bookAppointment = async (req, res) => {
    const { patient, age, symptoms, department, doctorName, doctorId, appointmentDate, timeSlot } = req.body

    const userId = req.user.id

    const userAlreadyBooked = await Appointment.findOne({
        patientId: userId,
        doctorId,
        appointmentDate,
        timeSlot
    })

    if (userAlreadyBooked) {
        return res.status(409).json({ message: 'You have already booked an appointment for this doctor at the same time.' });
    }

    try{
        const appointment = await Appointment.create({
            patientId: userId,
            patient,
            age,
            symptoms,
            department,
            doctorName,
            doctorId,
            appointmentDate,
            timeSlot
        })
        res.status(201).json({
            message: 'Appointment booked successfully.',
            appointment: {
                id: appointment._id,
                patient: appointment.patient,
                age: appointment.age,
                symptoms: appointment.symptoms,
                department: appointment.department,
                doctorName: appointment.doctorName,
                doctorId: appointment.doctorId,
                appointmentDate: appointment.appointmentDate,
                timeSlot: appointment.timeSlot
            }
        });
    } catch (error) {
        res.status(500).json({ message: 'Error booking appointment.', error });
    }
}

export const getAppointments = async(req, res) => {
    try{
        const appointments = await Appointment.find({ patientId: req.user.id }).sort({ appointmentDate: -1 })
        res.status(200).json({
            message: 'Appointments retrieved successfully.',
            success: true,
            count : appointments.length,
            appointments
         })
    }catch(error){
        console.error("Fetch Appointments Error:", error);
        res.status(401).json({ message: 'Error retrieving appointments.', error });
    }
}