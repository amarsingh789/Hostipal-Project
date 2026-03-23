import express from 'express'
import * as authController from '../controllers/auth.controllers.js'

const router = express.Router()

router.post('/register', authController.register)
router.get('/user', authController.userData)

router.get('/refresh-token', authController.refreshToken)

export default router

