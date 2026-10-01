const mongoose=require("mongoose");
const URI=process.env.MONGODB_URI;

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

