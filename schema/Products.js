import mongoose from "mongoose";
 

const ProductSchema = new mongoose.Schema({

        id: String,
        productTitle: String,
        shortDescription: String,
        productBrief: String,    
        url: String,
        // detailUrl: String,
        price: String,
        // quantity: Number,
        discount: String,
  
  

},{timestamps:true})

export const Product = mongoose.model("Product", ProductSchema);
