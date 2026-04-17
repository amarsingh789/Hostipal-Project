import express from 'express'
import * as patientController from "../controllers/patient.controller.js"
import { verifyToken } from '../middleware/auth.middleware.js'

const router = express.Router()

router.get("/vitals/history", verifyToken, patientController.getVitalsHistory);
router.get("/lab-results/recent", verifyToken, patientController.getLabResults);

export default router