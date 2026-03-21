import express from 'express'
import morgon from 'morgan'

const app = express()


app.use(express.json())
app.use(morgon('dev'));

export default app;