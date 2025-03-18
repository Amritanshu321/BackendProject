import mongoose from "mongoose";
import { DB_Name } from "./constants.js";
import connectDB from "./db/index.js";
// require("dotenv").config({path:"./env"})
import dotenv from "dotenv"
dotenv.config({
    path:"./env"
})
connectDB()

// (async()=>{
//     try{
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
//     }catch(error){
//         console.log("ERROR:",error)
//         throw err
//     }
// })()