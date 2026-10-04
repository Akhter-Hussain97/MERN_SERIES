require("dotenv").config();
const express=require("express");
const app=express();
const router=require("./routes/auth-router");
const connectDb=require("./utils/db");
app.use(express.json());
app.use("/api/auth", router);
const PORT=5000;
app.get("/", (req, res)=>{
    res.status(200).send("welcome to the server");
});
connectDb().then( ()=>{
app.listen(PORT, ()=>{
    console.log(`This server run on port ${PORT}`);
});
});