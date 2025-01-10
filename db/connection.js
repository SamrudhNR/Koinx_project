import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectionDB= async ()=>{
    try{
        const connectInstance= await mongoose.connect(process.env.MONGO_URI)
        console.log('DB connected')
    }catch(error){
        console.log('MongoDB connection error',err)
        process.exit(1)
    }
};

export default connectionDB;

