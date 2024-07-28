import express from "express";
import userRouter from './routes/user.routes.js'
import cookieParser from "cookie-parser";
import cors from 'cors'
const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credential: true,
}))

app.use(express.json({limit:'20kb'}));
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(cookieParser())


app.use("/users",userRouter)
export {app}