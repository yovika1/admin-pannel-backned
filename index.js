// import mongoose, { Connection } from "mongoose";
// import { DB_NAME } from "./constants.js";
import dotenv from "dotenv";
import Express from "express";
import connectDB from "./dbconnection/Connection.js";
import router from "./routes/ProductRoutes.js";
import cors from "cors";
import usersRouter from "./routes/UserRoutes.js";
import adminUserRoute from "./routes/AdminRoutes.js";
import ProductRoutes from "./routes/ProductRoutes.js";
import  BannerRoutes  from "./routes/BannerRoutes.js";
import CategoryRoutes from './routes/CategoryRoutes.js';
const app = Express();
dotenv.config();



app.use(Express.json());
app.use(cors());

app.use("/data", router);
app.use("/userdata",usersRouter);
app.use(ProductRoutes);
app.use(adminUserRoute);
app.use(BannerRoutes)
app.use(CategoryRoutes)
app.use(Express.static("uploads"));

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running at::${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!", err);
  });

