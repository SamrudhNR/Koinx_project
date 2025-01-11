import cron from 'node-cron';
import fetchCryptoData from '../services/fetchCryptoData.js';

const startCryptoCron=()=>{
    console.log("crypto job started");
    cron.schedule('0 */2 * * * *',async()=>{
        console.log('Fetching crypto data');
        await fetchCryptoData();
    });
    console.log('Crypto data cron job scheduled for every 2 hours');
}

export default startCryptoCron