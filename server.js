import connectionDB from "./db/connection.js";
import dotenv from 'dotenv';
import express from "express";
import startCryptoCron from "./cron-Scheduler/cryptoCron.js";

dotenv.config()

const PORT= process.env.PORT || 5000;
const app = express()

connectionDB()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server at ${PORT}`);
    })

    startCryptoCron();
    console.log('Cron job started successfully.')
})
.catch((error)=>{
    console.log("Mongodb connection failed:",error);
})

