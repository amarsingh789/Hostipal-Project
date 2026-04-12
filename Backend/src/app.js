import express from 'express'
import morgon from 'morgan'
import authRoute from './routes/auth.route.js'
import apointRoute from './routes/appointment.route.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'; 
import aiRoutes from './routes/ai.route.js'

const app = express()


app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(morgon('dev'));
app.use(cookieParser())


app.use(cors({
    origin: 'http://localhost:5173', // Frontend ka URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true // Agar cookies use karni hain toh zaroori hai
}))
app.use('/api', authRoute)
app.use('/api/ai', aiRoutes)
app.use('/zivacare', apointRoute)


export default app;