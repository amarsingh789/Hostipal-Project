import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Enter your name'],
        trim: true,
        maxLength: [30, 'Name cannot be more than 30 characters']
    },
    
})