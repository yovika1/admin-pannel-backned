import Jwt from "jsonwebtoken";
import { User } from "../schema/UserDetails.js";
import { sendOtp } from "./User.js";

const generateOtp = async () => {
  const OTP = await Math.floor(Math.random() * 100000);
  return OTP;
};

// for login & signup
export const LoginOtp = async (req, res) => {
  const { Email } = req.body;
  try {
    if (Email) {
      const user = await User.findOne({ email: Email });
      if (user) {
        const OTP = await generateOtp();
        await sendOtp(OTP, Email);
        const updateuser = await User.findByIdAndUpdate(
          user._id,
          { OTP: OTP },
          { new: true }
        );

        if (updateuser) {
          res.status(200).json({
            message: "sent",
            isOtpSent: true,
            // token
          });
        } else {
          res.status(200).json({
            message: "not sent",
            isOtpSent: false,
            // token
          });
        }
      } else {
        const OTP = await generateOtp();
        await sendOtp(OTP, Email);
        const createUser = await User.create({
          email: Email,
          OTP: OTP,
        });
        if (createUser) {
          // const token = Jwt.sign({ email: Email }, "secretekey");
          // console.log(token);
          await createUser.save();
          res.status(200).json({
            message: "OTP sent",
            // token,
          });
        } else {
          res.status(200).json({
            message: "Otp not sent",
            isOtpSent: false,
            // token
          });
        }
      }
    } else {
      res.status(400).json({
        message: "Email is required",
      });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal error" });
  }
};

// for verification
export const verifyOtp = async (req, res) => {
  try {
    const { Email, OTP } = req.body;
    console.log(OTP)
    const isExisting = await User.findOne({ email: Email });
    if (isExisting) {
      console.log(isExisting)
      if (isExisting.OTP == OTP) {
        const token = Jwt.sign({ email: Email }, "secretekey");
        res.status(200).json({
          message: "OTP verified",
          token,
        });
      } else {
        res.status(200).json({
          message: "OTP not verified",
        });
      }
    }
  } catch (error) {
    console.log(error);
    if (error instanceof Jwt.JsonWebTokenError) {
      res.status(401).json({
        message: "invalid token",
      });
    } else {
      res.status(500).json({
        message: "Internal server Error",
      });
    }
  }
};
