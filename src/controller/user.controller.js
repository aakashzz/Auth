import { asyncHandlerFunc } from "../utils/asyncHandlerFunc.js";
import { User } from "../model/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asyncHandlerFunc(async (req, res) => {
   const { username, email, password } = req.body;
   console.log(username);

   if ([email, username, password].some((field) => field?.trim() === "")) {
      throw new ApiError(400, "All Filed is required");
   }

   const existedUser = await User.findOne({
      $or: [{ username }, { email }],
   });

   if (existedUser) {
      throw new ApiError(409, "User Are Already Existed");
   }

   const createdUser = await User.create({
      username,
      email,
      password,
   });
   if (!createdUser) {
      throw new ApiError(501, "User Not created");
   }
   return res
      .status(201)
      .json(
         new ApiResponse(200, createdUser, "User Account Successfully created")
      );
});

const loginUser = asyncHandlerFunc(async(req,res)=>{
   const {username, email, password} = req.body;
   if(!username || !email){
      throw new ApiError(401,"Username and email not filed");
   }

   const userExisted = await User.findOne({
      $or: [{username},{email}]
   })

   if (!userExisted) {
      throw new ApiError(400,"User Not Exist Please Create Account");
   }
   
})
export { registerUser, loginUser };
