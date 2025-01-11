import { Data } from "../models/data.model.js";

export const getCryptoStats= async(req,res)=>{
    const {coin}= req.query;
    const normalizedCoin= coin.toLowerCase();

    const validCoins=['bitcoin', 'ethereum', 'polygon'];
    if(!validCoins.includes(normalizedCoin))
    {
        return res.status(400).json({error: 'Invalid coin requested'});
    }

    try{
        const cryptoData= await Data.findOne({coin:normalizedCoin}).sort({createdAt: -1})

        console.log('Requested coin:', coin);
        console.log('Database result:', cryptoData);

        if(!cryptoData){
            return res.status(404).json({error: `Data for ${coin} not found.`});
        }

        const response={
            price:cryptoData.price,
            marketcap:cryptoData.marketcap,
            change24hr:cryptoData.change24hr
        };
        res.json(response)
    }catch(error){
        console.error('Error fetching cryptocurrency stats:', error);
        res.status(500).json({error: 'Failed to fetch cryptocurrency stats.'});
    }
}