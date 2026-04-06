import express from 'express'
import * as authController from '../controllers/auth.controllers.js'

const router = express.Router()

router.post('/register', authController.register)
router.post('/login', authController.login)
router.get('/user', authController.userData)

router.get('/refresh-token', authController.refreshToken)

router.get('/logout', authController.logout)

router.get('/logout-all', authController.logoutAll)

// OTP Base authentication
// router.post('/send-otp', authController.sendOtp)
// router.post('/verify-otp', authController.verifyOtp)

// Profile update route
router.put('/update/:id', authController.updateProfile)

export default router

