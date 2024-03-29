import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema({
    ImageUrl:{
        type:String,
        required:true
    },

},{timestamps:true})

bannerSchema.index({Title:"text",Description:"text",Category:"text",})

 export const Banner = mongoose.model("Banner",bannerSchema);