require("dotenv").config();
const express = require('express');//to import express module
const app = express();
const router = require('./routes/apiRoutes');
const connectDB = require('./utils/dbConnection');
const mongoose = require('mongoose');

app.use(express.json());

//initiate database connection
connectDB();
//routes
app.use("/api",router);


//once my db connection is made then only i will start my server
mongoose.connection.once('open',()=>{
    console.log('Connected to DB');
    app.listen(process.env.PORT,()=>{
        console.log("Server running on 8080");
    })
})
