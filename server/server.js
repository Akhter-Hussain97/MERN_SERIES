require("dotenv").config();
const express=require("express");
const app=express();
const authRouter=require("./routes/auth-router");
const contactRouter=require("./routes/contact-router");
const connectDb=require("./utils/db");
const errormiddleware = require("./middlewares/error_middlewares");
app.use(express.json());

app.use("/api/auth", authRouter);
app.use("/api/form", contactRouter);

app.use(errormiddleware);

const PORT=5000;
app.get("/", (req, res)=>{
    res.status(200).send("welcome to the server");
});
connectDb().then( ()=>{
app.listen(PORT, ()=>{
    console.log(`This server run on port ${PORT}`);
});
});