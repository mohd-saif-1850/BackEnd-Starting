import mongoose from "mongoose";
import {DB_NAME} from "./constants";
import express from "express";






/*
const app = express();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`)
        app.on("Error",(error) => {
            console.log("Express :",Error)
            throw error
        })
            app.listen(process.env.PORT,() => {
                console.log(`App is listening on ,${
                    process.env.PORT
                }`);
                
            })
    } catch (error) {
        console.log(error);
        throw error
    }
})()

*/