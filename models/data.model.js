import mongoose from 'mongoose';

const dataSchema= new mongoose.Schema({
    coin:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    marketcap:{
        type:Number,
        required:true
    },
    change24hr:{
        type:Number,
        required:true
    }
},{timestamps:true})

export const Data= mongoose.model('Data',dataSchema)