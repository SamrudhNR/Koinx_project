# Koinx_project
This project is a backend service that provides real-time cryptocurrency data and analytics. The API is built using Node.js, Express, and MongoDB (via MongoDB Atlas for cloud-based database hosting). It allows users to retrieve information about various cryptocurrencies and perform analytics on them, including price data, market cap, 24-hour change, and standard deviation of prices over time.

Features
Fetch Latest Cryptocurrency Data: The API fetches real-time cryptocurrency data from an external API and stores it in a MongoDB database. Supported cryptocurrencies include Bitcoin, Ethereum, and Polygon.

/stats Endpoint: Allows users to get the latest statistics (price, market cap, and 24-hour change) of a specific cryptocurrency. Query the API using the coin query parameter (e.g., bitcoin, ethereum, or matic-network).

/deviation Endpoint: Returns the standard deviation of the price for a specific cryptocurrency over the last 100 records stored in the database. This helps users understand price volatility over time.

Technologies Used
. Node.js and Express.js: For building the backend REST API.
. MongoDB Atlas: Cloud-based NoSQL database service to store and 
  retrieve cryptocurrency data.
. Axios: For fetching real-time data from the CoinGecko API.
. PM2: For managing and ensuring the server runs continuously in 
  production environments.
. Cron Jobs: Scheduled tasks to periodically fetch and update 
  cryptocurrency data.
. Mongoose: ODM (Object Data Modeling) library to interact with MongoDB.


Here’s a possible description for your project that you can add to your README file:

Cryptocurrency Data API
This project is a backend service that provides real-time cryptocurrency data and analytics. The API is built using Node.js, Express, and MongoDB (via MongoDB Atlas for cloud-based database hosting). It allows users to retrieve information about various cryptocurrencies and perform analytics on them, including price data, market cap, 24-hour change, and standard deviation of prices over time.

Features
Fetch Latest Cryptocurrency Data: The API fetches real-time cryptocurrency data from an external API and stores it in a MongoDB database. Supported cryptocurrencies include Bitcoin, Ethereum, and Polygon.

/stats Endpoint: Allows users to get the latest statistics (price, market cap, and 24-hour change) of a specific cryptocurrency. Query the API using the coin query parameter (e.g., bitcoin, ethereum, or matic-network).

/deviation Endpoint: Returns the standard deviation of the price for a specific cryptocurrency over the last 100 records stored in the database. This helps users understand price volatility over time.

Technologies Used
Node.js and Express.js: For building the backend REST API.
MongoDB Atlas: Cloud-based NoSQL database service to store and retrieve cryptocurrency data.
Axios: For fetching real-time data from the CoinGecko API.
PM2: For managing and ensuring the server runs continuously in production environments.
Cron Jobs: Scheduled tasks to periodically fetch and update cryptocurrency data.
Mongoose: ODM (Object Data Modeling) library to interact with MongoDB.


API Endpoints

1./stats
    Description: Fetch the latest data for a specific cryptocurrency.

    Sample Request:
        GET http://localhost:5000/stats?coin=bitcoin
    
    Sample Response:
        {
            "price": 94223,
            "marketcap": 1866638430896,
            "change24hr": -0.08675
        }


2. /deviation
    Description: Fetch the standard deviation of the price for a specific cryptocurrency based on the last 100 records

    Sample Request:
        GET http://localhost:5000/deviation?coin=bitcoin
    
    Sample Response:
        {
            "deviation": 38.14
        }

How to Use:

1.Clone the Repository
    git clone repo-url

2.Install Dependencies
    npm install

3.Set Up Environment Variables Create a .env file in the root of your project with the following content:
    MONGODB_URI= your-mongodb-atlas-uri

    COINGECKO_API_KEY= https://docs.coingecko.com/v3.0.1/reference/introduction.

4.Run the Server

    npm start

The API will be available at- http://localhost:5000.