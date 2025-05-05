import express from 'express';
// import mongoose from 'mongoose';
import dotenv from 'dotenv';
import config from './database/config.js';
dotenv.config();

const app=express();

const PORT=process.env.PORT || 5000;
config();

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})
