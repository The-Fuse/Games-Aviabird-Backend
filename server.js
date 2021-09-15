const express = require('express');
const dotenv = require('dotenv');

// Load env file
dotenv.config({path: './config/config.env'});


const app = express();
const PORT = process.env.PORT || 5000;

// Mount routers
app.use('/api/v1', (req,res) => {
    res.status(200).json({
        success: true
    });
});


app.listen(PORT, () => {
    console.log(`App listening in ${process.env.NODE_ENV} mode on port: ${PORT}`);
});