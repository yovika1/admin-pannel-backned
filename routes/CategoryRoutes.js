import express from "express";
import { addCategory, deleteCategory, getCategory, updateCategory } from "../controllers/Category.js";
import upload from '../multer/multer.js'

const CategoryRoutes = express.Router();

CategoryRoutes.post('/posting', upload.single('image'), addCategory);
CategoryRoutes.get('/getting', getCategory);
CategoryRoutes.put('/updating', updateCategory);
CategoryRoutes.delete('/delete/:id', deleteCategory);

export default CategoryRoutes;
