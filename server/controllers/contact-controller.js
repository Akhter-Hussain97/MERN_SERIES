const Contacts=require("../models/contact_model");


const contactForm= async(req, res)=>{
    try{
      const response=req.body;
      await Contacts.create(response);
      return res.status(200).json({message:"Message Send Successfully"});
    }
    catch(err){
       return res.status(500).json({message:"Message not Delivered"});
    }
};

module.exports=contactForm;