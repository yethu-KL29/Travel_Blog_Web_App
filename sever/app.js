const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRouter = require("./routes/userRoute")

dotenv.config()
const app=express();

app.use(express.json())
app.use("/user",userRouter)


mongoose.connect( `mongodb+srv://Admin:${process.env.PASS}@cluster0.7siwoop.mongodb.net/Travel_Blog?retryWrites=true&w=majority`)
.then(()=>console.log("connected"))
.then(()=>{
    app.listen(5000);
}).catch((e)=>console.log(e))


