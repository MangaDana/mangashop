import mongoose from "mongoose";

const connectDB = async () => mongoose.connect('mongodb://localhost:27017/mangadana')

export default connectDB;