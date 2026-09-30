
const home= async(req, res)=>{
   try{ res.status(200).send("Welcome to the home page");}
   catch(err){
       console.log(err);
   }
};
const register= async(req, res)=>{
    try{
        console.log(req.body);
        res.status(200).json({message:req.body});}
    catch(err){
        console.log(err.status(500).json("something went wrong"));
    }
};
module.exports={home, register};