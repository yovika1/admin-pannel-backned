import mongoose from "mongoose";
 

const ProductSchema = new mongoose.Schema({

        id: String,
        productTitle: String,
        quantity: Number,
        productBrief: String,    
        url: String,
        price: String,
        discount: String,
  
  

},{timestamps:true})

export const Product = mongoose.model("Product", ProductSchema);
