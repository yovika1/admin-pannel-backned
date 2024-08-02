import mongoose, { Mongoose } from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    
    productTitle: String,
    categoryId:{
      type: mongoose.Schema.Types.ObjectId,
      ref:"Category"
    },
    quantity: Number,
    productBrief: String,
    url: String,
    price: Number,
    discount: Number,
    size: [
      {
        type: String,
      },
    ],
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", ProductSchema);
