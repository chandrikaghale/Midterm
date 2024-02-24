const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const mongoURI = process.env.MONGO_URL;

const app = express();
app.use(express.json());    

const InitiateServer = async() =>{

    try{
        await mongoose.connect(mongoURI,{
          
        });
    
    console.log("Successfully connected to Tasks database!");
    }
    catch(e){
        console.log(e);
        throw e;
    }
    
    };
    
    module.exports = InitiateServer;