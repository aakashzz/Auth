import express from "express"
import cors from 'cors'
const app = express();
const port = 3000
app.use(cors())
app.use(express.static('/Auth.ak'))

app.get('/api', function (req,res){
    res.download("server")
    res.send('Server is Running');
})

app.listen(port, ()=>{
    console.log("server Start");
})
