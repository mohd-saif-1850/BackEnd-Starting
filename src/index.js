import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import express from "express";
import connectDB from "./db/db.js";
import app from "./app.js"


connectDB()
.then(()=> {
    app.listen(process.env.PORT || 8000,() => {
        console.log(`App listens on Port ${process.env.PORT}`);
        
    })
})
.catch((error) => {
    console.log("MongoDB connection error!! ",error);
    
})




// Method to coonect db in same file

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