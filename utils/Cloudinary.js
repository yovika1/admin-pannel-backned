// import { v2 as cloudinary } from "cloudinary";
// import fs from "fs"

// cloudinary.config({
//     cloud_name:
//     api_key:
//     api_secret:
// });

// const uploadOnCloudinary = async (localFilePath) =>{
// try {
//     if(!localFilePath) return null
//     const response = await cloudinary.uploader.upload(
//         localFilePath,{
//             resource_type:"auto"
//         }
//     )
//     console.log("file has been uploaded on cloudinary",
//     response.url);
//     return response;
    
// } catch (error) {
//     fs.unlinkSync(localFilePath)
//     return null;
// }
// }


// export {uploadOnCloudinary};