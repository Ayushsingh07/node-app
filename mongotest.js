import express from "express";
import mongodb from "mongodb";
import mongoose from "mongoose"
const authr=require('./routes/auth')

const MONGO_URL= 'mongodb+srv://nqu7069:passtest@cluster0.rmatrjd.mongodb.net/blog?retryWrites=true&w=majority'

mongoose.connect(MONGO_URL).then(console.log("connected to mongoDb")).catch(err=>console.log(err))




const routes=express()

routes.use("/api/auth",authr)

routes.listen("3000",()=>{
    console.log("ok test")
})