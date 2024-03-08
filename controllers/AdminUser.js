import Jwt from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../schema/UserDetails.js";
import bcrypt from "bcrypt";


export const RegisterUser = async (req, res) => {
  try {
    const { FullName, Email, Password , isAdmin} = req.body;
    console.log("email" + Email)

    const existingUser = await User.findOne({ email : Email});
    console.log(existingUser)
    if (existingUser) {
      throw new ApiError(400, "User Already exists");
    } else {
      const userDetails = await User.create({
        FullName,
        Email , 
        Password,
        isAdmin
      });

      //genrate the tokens
      const token = Jwt.sign({ id: userDetails._id }, process.env.ACCESS_TOKEN);
      res.status(200).json({
        message: "User created successfully",
        userDetails,
        token,
    })
  };

  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message || "Internal server error",
      success: false,
      errors: error.errors || [],
    });
    console.error("Server Error", error);
  }
};

//for login user
export const LoginUser = async (req, res) => {
  const { email, password } = req.body;
console.log(email)
  try {
    const existingUser = await User.findOne({Email : email});
    if (existingUser) {
      //compare the password
      console.log(existingUser)
      const passwordMatch = await bcrypt.compare(
        password,
        existingUser.Password
        
      );
      if (passwordMatch) {
        const token = Jwt.sign(
          { id: existingUser._id },
          process.env.ACCESS_TOKEN,
          { expiresIn: process.env.ACCESS_TOKEN_EXPIRE }
        );
        res.status(200).json({
          message: "User logged in successfully",
          existingUser,
          token,
        });
        // const option ={
        //   httpOnly=true,
        //   secure:true,
        // }
      } else {
        throw new ApiError(400, "Invalid credentials");
      }
    } else {
      throw new ApiError(400, "User doesn't exist");
    }
  } catch (error) {
    res.status(error.statusCode || 500).json({
      message: error.message || "Internal server error",
      success: false,
      errors: error.errors || [],
    });
    console.error("Something went wrong", error);
  }
};


