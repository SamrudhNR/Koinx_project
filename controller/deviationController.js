import { Data } from "../models/data.model.js";

export const getDeviationPrice= async(req,res)=>{
    const {coin}= req.query;

    const validCoins=['bitcoin', 'ethereum', 'polygon'];
    if(!validCoins.includes(coin.toLowerCase())){
        return res.status(400).json({error:"Invalid coin requested"})
    }

    try{
        const records= await Data.find({coin:coin.toLowerCase()})
        .sort({createdAt:-1})
        .limit(100)

        if(records.length===0){{
            return res.status(404).json({error:`No record found for ${coin}}`})

        }}
        // extracting prices
        const prices= records.map((record)=> record.price)

        //mean
        const mean= prices.reduce((sum,price)=> sum+price,0)/prices.length;

        //standard deviation
        const deviation= Math.sqrt(prices.reduce((sum,price)=> sum+ Math.pow(price-mean,2),0)/ prices.length);

        res.json({deviation: parseFloat(deviation.toFixed(2))});
    }catch(error){
        console.error('Error calculating price deviation:', error)
        res.status(500).json({error:'Failed to calculate deviation price'})
    }
}