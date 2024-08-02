import mongoose from "mongoose";



const CategorySchema  = new mongoose.Schema({

    name:{
        type:String,
        required:true,
    },

    urlImage:{
        type:String,
        required:true,
    }

},{timestamps:true})
 export const Category  = mongoose. model('Category',CategorySchema);