import Appointment from "../models/appointment.model.js";
import config from "../config/config.js";
import moment from "moment";

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

export const cancelAppointment = async(req, res) => {
    try{
        const appointmentId = req.params.id
        const userId = req.user.id

        const appointment = await Appointment.findOne({_id: appointmentId, patientId: userId})
        if(!appointment){
            return res.status(404).json({
                message: 'Appointment not found.'
            })
        }

        if(appointment.status === 'Cancelled' || appointment.status === 'Completed'){
            return res.status(400).json({
                message: `Cannot cancel an appointment that is already ${appointment.status}.`
            })
        }

        const now = moment()
        const appointmentDateTime = moment(appointment.appointmentDate)

        const timeParts = appointment.timeSlot.split(' ')
        const [hours, minutes] = timeParts[0].split(':')
        if(timeParts[1] === 'PM' && hours !== '12') appointmentDateTime.add(12, 'hours')
        if(timeParts[1] === 'AM' && hours === '12') appointmentDateTime.subtract(12, 'hours')
        appointmentDateTime.add(hours, 'hours').add(minutes, 'minutes');

        const hoursLeft = appointmentDateTime.diff(now, 'hours')

        if(hoursLeft < 24){
            return res.status(400).json({
                message: "Cancellations are not allowed within 24 hours of the scheduled appointment."
            })
        }
        appointment.status = 'Cancelled'
        await appointment.save()
        res.status(200).json({ success: true, message: "Appointment cancelled successfully.", appointment });
}
catch (error) {
        console.error("Cancel Appointment Error:", error);
        res.status(500).json({ success: false, message: "Server error while cancelling." });
    }
}

export const rescheduleAppointment = async(req, res) => {
    try{
        const appointmentId = req.params.id;
        const userId = req.user.id

        const {newDate, newTimeSlot} = req.body

        if(!newDate || !newTimeSlot){
            return res.status(400).json({
                message: "New date and time slot are required."
            })
        }

        const appointment = await Appointment.findOne({
            _id: appointmentId,
            patientId: userId
        })

        if(!appointment){
            return res.status(404).json({
                message: "Appointment not found"
            })
        }
        if(appointment.status !== 'Pending' && appointment.status !== 'Confirmed'){
            return res.status(400).json({
                message: `Only appointments with status 'Pending' or 'Confirmed' can be rescheduled. Current status: ${appointment.status}`
            })
        }
        const now = moment()
        const oldAppointmentTime = moment(appointment.appointmentDate)

        const timeParts = appointment.timeSlot.split(' ')
        const [hours, minutes] = timeParts[0].split(':')
        if(timeParts[1] === 'PM' && hours !== '12') oldAppointmentTime.add(12, 'hours')
        if(timeParts[1] === 'AM' && hours === '12') oldAppointmentTime.subtract(12, 'hours')
        oldAppointmentTime.add(hours, 'hours').add(minutes, 'minutes');

        const hoursLeft = oldAppointmentTime.diff(now, 'hours')

        if(hoursLeft < 24){
            return res.status(400).json({
                message: "Rescheduling is not allowed within 24 hours of the scheduled appointment."
            })
        }

        const slotTaken = await Appointment.findOne({
            doctorId: appointment.doctorId,
            appointmentDate: newDate,
            timeSlot: newTimeSlot,
            status: { $in: ['Pending', 'Confirmed'] }
        })

        if(slotTaken){
            return res.status(409).json({
                message: "The selected time slot is already booked. Please choose a different slot."
            })
        }

        appointment.appointmentDate = newDate
        appointment.timeSlot = newTimeSlot
        await appointment.save()

        res.status(200).json({
            success: true,
            message: "Appointment rescheduled successfully.",
            appointment
        })
    }catch(error){
        console.error("Reschedule Appointment Error:", error);
        res.status(500).json({
            success: false,
            message: "Server error while rescheduling appointment."
        })
    }
}