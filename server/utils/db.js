const mongoose=require("mongoose");
const URI="mongodb://127.0.0.1:27017/Mern_Admin";
const connectDb=async()=>{
    try{
        await mongoose.connect(URI);
        console.log("connected to db");
    }
    catch(err){
        console.error("Database connection error");
        process.exit(0);
    }
}

module.exports=connectDb;