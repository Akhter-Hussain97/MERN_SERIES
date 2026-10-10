const express=require("express");
const router=express.Router();
const authController=require("../controllers/auth-controller");
const {validate}=require("../middlewares/validate_middleware");
const { SignupSchema } = require("../validations/validator_controller");
router.route("/home").get(authController.home);
router.route("/register").post(validate(SignupSchema), authController.register);
router.route("/login").get(authController.login);

module.exports=router;