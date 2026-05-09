import express from 'express'
import morgon from 'morgan'
import authRoute from './routes/auth.route.js'
import apointRoute from './routes/appointment.route.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'; 
import aiRoutes from './routes/ai.route.js'
import patientRoute from './routes/patient.routes.js'

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(morgon('dev'));
app.use(cookieParser())


app.use(cors({
    origin: ['http://localhost:5173', 
    "https://ziva-care.vercel.app/"],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true 
}))
app.use('/api', authRoute)
app.use('/patient', patientRoute)
app.use('/api/ai', aiRoutes)
app.use('/zivacare', apointRoute)


export default app;