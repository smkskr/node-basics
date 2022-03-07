require("dotenv").config();
const express = require('express');//to import express module
const app = express();
const router = require('./routes/apiRoutes');

app.use(express.json());

//routes
app.use("/api",router);

app.listen(process.env.PORT,()=>{
    console.log("Server running on 8080");
})