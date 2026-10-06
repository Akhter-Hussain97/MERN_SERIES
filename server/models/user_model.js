const mongoose=require("mongoose");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");
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

// json web token
UserScheme.methods.generateToken= async function(){
    try{
        return jwt.sign({
            userId:this._id.toString(),
            email:this.email,
            isadmin:this.isadmin
    }, process.env.SERECT_KEY),
    {
        expiresIn:"15d"
    };
    }
    catch(err){
        console.log(err);
    }
};
   UserScheme.methods.comparePassword=async function(password){
      return await bcrypt.compare(password, this.password);
   }

const User=mongoose.model("User",UserScheme);
module.exports=User;