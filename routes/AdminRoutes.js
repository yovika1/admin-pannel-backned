import Express from "express";
import { LoginUser,
     
     RegisterUser } from "../controllers/AdminUser.js";
     
const adminUserRoute = Express.Router();

adminUserRoute.post("/register", RegisterUser);
adminUserRoute.post("/loginuser",LoginUser);
// adminUserRoute.post("/logout",LogoutUser);

export default adminUserRoute;
