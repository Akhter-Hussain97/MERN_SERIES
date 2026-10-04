const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const UserScheme=mongoose.Schema({
    username:{
        type : String,
        reuired:true
    },
    email:{
        type : String,
        reuired:true
    }, 
    phone:{
        type : String,
        reuired:true
    },
    password:{
        type : String,
        reuired:true
    },
    isadmin:{
        type : Boolean,
        reuired:true
    }
});

UserScheme.pre("save", async function(next){
  const user= this;
  if(!user.isModified("password")){
    next(); //skip this process
  }
  try{
  const genSalt=await bcrypt.genSalt(10);
  const hash_password=await bcrypt.hash(user.password, genSalt);
  user.password=hash_password;
  }
  catch(err){
    next(err);
  }
});

const User=mongoose.model("User",UserScheme);
module.exports=User;