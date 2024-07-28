import mongoose from "mongoose";
import { db_name, coll_name } from "../constant.js";

const connectDB = async () =>{
    try {
        const connectionDB = await mongoose.connect(`${process.env.MONGODB_URL}/${db_name}`)
        console.log("DB Connected");
        return connectionDB
    } catch (error) {
        console.log("Db connection error");
        throw error
    }
} 

export {connectDB}