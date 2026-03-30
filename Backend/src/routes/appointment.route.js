import express from 'express'

import * as appointmentRoute from '../controllers/appointment.controllers.js'
import { verifyToken } from '../middleware/auth.middleware.js';

const router = express.Router()

router.post('/bookAppointment',verifyToken, appointmentRoute.bookAppointment)

router.get('/getAppointments', verifyToken, appointmentRoute.getAppointments)

export default router
