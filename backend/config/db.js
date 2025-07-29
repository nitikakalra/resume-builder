import mongoose from "mongoose"

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://nitikakalra2003:nitika2003@cluster0.ppcirf3.mongodb.net/RESUME')
    .then(() => console.log('DB CONNECTED'))
}