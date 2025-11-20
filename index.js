import express from "express";
import mongoose from "mongoose";
import userRouter from "./Routes/user.js"
import productRouter from "./Routes/product.js"
import cartRouter from "./Routes/cart.js"
const app = express()
const port = 6700
app.use(express.json())
mongoose.connect("mongodb+srv://gunwaladitya:Qazzaq%40001@29102025.d13dhap.mongodb.net/",{dbName: "Adi_DB"}).then(()=>{
    console.log("Data Base Connected Succesfully")
})

app.get("/",(req,res)=>{
    res.send("Halo! Welcome To Home")
})

console.log("some changes to put before committing something in github");
app.use("/user", userRouter)
app.use("/product", productRouter)
app.use("/cart", cartRouter)
app.listen(port,()=>{
    console.log(`Your Server is running at http://localhost:${port}`)
})