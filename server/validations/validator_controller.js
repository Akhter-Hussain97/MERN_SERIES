const {z}=require("zod");

    const SignupSchema=z.object({
        username:z.string({required_error:"Username is required"}).trim()
        .min(3, {message:"Username must be at least 3 characters long"})
        .max(30, {message:"Username must be at most 30 characters long"}),

        email:z.string({required_error:"Email is required"}).trim()
        .email({message:"Invalid email format"})
         .min(3, {message:"Email must be at least 3 characters long"})
         .max(40, {message:"Email must be at most 30 characters long"}),

        phone:z.string({required_error:"Phone is required"}).trim()
        .min(10, {message:"Phone must be at least 10 characters long"})
        .max(15, {message:"Phone must be at most 15 characters long"}),

        password:z.string({required_error:"Password is required"}).trim()
        .min(8, {message:"Password must be at least 8 characters long"})
        .max(30, {message:"Password must be at most 30 characters long"}),
       
    });

    module.exports={SignupSchema};