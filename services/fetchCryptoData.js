import axios from 'axios';
import { Data } from '../models/data.model.js';

const fetchCryptoData= async()=>{
    try{
    const coins= ['bitcoin','matic-network', 'ethereum'];
    // Base API
    const url = 'https://api.coingecko.com/api/v3/coins/markets';


    // API call with dynamically constructed parameters
    const response = await axios.get(url, {
      params: {
        ids: coins.join(','), 
        vs_currency: 'usd', // fetch prices in
      },
    });

    console.log(response.data)
    //data to store in db
    const cryptoData= coins.map((coin)=>{
        const coinData= response.data.find((data)=> data.id===coin)
        if(!coinData){
            console.error(`data for ${coin} is missing`)
            return null
        }
        return{
            coin:coinData.name.toLowerCase(),
            price: coinData.current_price,
            marketcap: coinData.market_cap,
            change24hr: coinData.price_change_percentage_24h,
        }
    }).filter(Boolean); // null value removal

    await Data.insertMany(cryptoData);
    console.log(cryptoData)
    console.log('Crypto data stored successfully in MongoDB')

    return cryptoData;

    } catch(err){
        console.error('Error in fetching cryptodata',err);
        return [];
    }
}

export default fetchCryptoData;