import express from 'express'
import * as patientController from "../controllers/patient.controller.js"
import { authenticateToken } from '../middleware/auth.middleware.js'

const router = express.Router()

router.get("/vitals/history", authenticateToken, patientController.getVitalsHistory);
router.get("/lab-results/recent", authenticateToken, patientController.getLabResults);

export default router