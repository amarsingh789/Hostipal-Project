import express from 'express'
import morgon from 'morgan'
import authRoute from './routes/auth.route.js'
import cookieParser from 'cookie-parser'

const app = express()


app.use(express.json())
app.use(morgon('dev'));
app.use(cookieParser())

app.use('/api', authRoute)


export default app;