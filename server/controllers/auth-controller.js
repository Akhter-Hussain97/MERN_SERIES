 const User=require("../models/user_model");
 const bcrypt=require("bcrypt");
const home= async(req, res)=>{
   try{ res.status(200).send("Welcome to the home page");}
   catch(err){
       console.log(err);
   }
};
const register= async(req, res)=>{
    try{
        const {username, email, phone, password, isadmin}=req.body;
         const UserExist=await User.findOne({email});
         if(UserExist){
            return res.status(400).json("User already exist");
         }
          //const saltround
          //const hash_password=await bcrypt.hash(password, saltround);
       const userCreated=await User.create({username, email, phone, password, isadmin});
        res.status(200).json({userCreated, message:"User created successfully"});
    }
    catch(err){
        res.status(500).json("internal server error");
    }
};
module.exports={home, register};