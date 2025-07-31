import mongoose from "mongoose";
import { DB_NAME } from "../constants";



const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
    } catch (error) {
        console.log("Error of connection of DB ",error);
        process.exit(1)
        
    }
}