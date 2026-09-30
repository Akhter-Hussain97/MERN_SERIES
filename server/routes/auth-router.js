const express=require("express");
const router=express.Router();
const controller=require("../controllers/auth-controller");
router.route("/home").get(controller.home);
router.route("/register").get(controller.register);

module.exports=router;