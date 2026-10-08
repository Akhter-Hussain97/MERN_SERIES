const express=require("express");
const router=express.Router();
const controller=require("../controllers/auth-controller");
const {validate}=require("../middlewares/validate_middleware");
const { SignupSchema } = require("../validations/validator_controller");
router.route("/home").get(controller.home);
router.route("/register").post(validate(SignupSchema), controller.register);
router.route("/login").get(controller.login);

module.exports=router;