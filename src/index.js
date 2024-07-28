import "dotenv/config"
import { connectDB } from "./db/connectDB.js"
import { app } from "./app.js"

connectDB().then(()=>{ 
    app.listen(process.env.PORT,()=>{
        console.log("start server");
    })
})
.catch(()=>{
    console.log("Server Don't run");
})
