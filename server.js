import express from 'express';
// import mongoose from 'mongoose';
import dotenv from 'dotenv';
import config from './database/config.js';
import authRoute from './routes/auth.route.js';
import e from 'express';
dotenv.config();

const app=express();

app.use(express.json());

const PORT=process.env.PORT || 5000;
config();

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})

app.use('/api',authRoute);
app.use((err,req,res,next)=>{
    const statusCode= err.statusCode || 500;
    const message=err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,

    });
})
