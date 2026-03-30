import express from 'express'

import * as appointmentRoute from '../controllers/appointment.controllers.js'
import { verifyToken } from '../middleware/auth.middleware.js';

const router = express.Router()

router.post('/bookAppointment',verifyToken, appointmentRoute.bookAppointment)

router.get('/getAppointments', verifyToken, appointmentRoute.getAppointments)

router.put('/cancel/:id', verifyToken, appointmentRoute.cancelAppointment);

router.put('/reschedule/:id', verifyToken, appointmentRoute.rescheduleAppointment);

export default router
