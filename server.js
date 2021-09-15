const express = require('express');
const dotenv = require('dotenv');

// Load env file
dotenv.config({path: './config/config.env'});

// Connect DB
const connectDB = require('./config/db');
connectDB();

// Routes files
const leaderboard = require('./api/leaderboard')

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Mount routers
app.use('/api/v1/leaderbaord', leaderboard)


app.listen(PORT, () => {
    console.log(`App listening in ${process.env.NODE_ENV} mode on port: ${PORT}`);
});