import { Banner } from "../schema/Banner.js";

export const createBanner = async (req, res) => {
   console.log('file',req.file)
  const { filename } = req.file;
 try {
    if (!req.file) {
      
        return res.status(400)
        .json("Please upload a file", error)    
   }
   const newBanner = await Banner.create({
       ImageUrl:filename,
    })
    const bannerResult = await newBanner.save();

    console.log(bannerResult)
    return res.status(200).send({
       message: "file Uploaded sucessfully",
       data:bannerResult
    })
 
 } catch (error) {
    console.error("error",error);
    res.status(500).send({message : "internal server error", error : error});
 }
}

export const getBanner = async (req,res) =>{
   try {
      const getbanner = await Banner.find();
      res.status(200).
      json({
         message:"sucessfully",
         data:getbanner
      })

   } catch (error) {
    console.error("internal error", error);
    res.status(500)
    .json({
       messge:"something error while getting banner",
       error:error
     })
   }
}



