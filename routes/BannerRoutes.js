import express from "express";
import multer from "multer";
import { createBanner, getBanner } from "../controllers/Banner.js";
// import { createBanner } from "../controllers/Banner.js";
// import upload from '../multer/multer.js';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    console.log(file);
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}${file.originalname}`);
  },
});
const upload = multer({ storage: storage });

const BannerRoutes = express.Router();

BannerRoutes.post("/banner", upload.single("image"), createBanner);
BannerRoutes.get("/bannerget", getBanner);

// BannerRoutes.post('/searching', upload.single('image'), createBanner)

export default BannerRoutes;
