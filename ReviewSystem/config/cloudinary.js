// // const cloudinary = require("cloudinary").v2;
// // require("dotenv").config();

// // const uploadImageToCloudinary = () =>  {
// //     try{
// //         const CLOULD_NAME = process.env.CLOULD_NAME
// //         const APP_KEY = process.env.APP_KEY
// //         const SCRECT_KEY = process.env.SCRECT_KEY

// //         cloudinary.config({clould_name:CLOULD_NAME,
// //             app_key:APP_KEY,
// //             secrect_key:SCRECT_KEY,
// //         })

// //     }
// //     catch(error){
// //         console.log(error);
// //         console.log("Failed Clouldinary Connection");
// //     }
// // }

// // module.exports = uploadImageToCloudinary;
// const cloudinary = require("cloudinary").v2;
// require("dotenv").config();

// // Cloudinary connection setup
// cloudinary.config({
//   cloud_name: process.env.CLOUD_NAME,
//   api_key: process.env.API_KEY,
//   api_secret: process.env.SCRECT_KEY,
// });

// module.exports = cloudinary;
const cloudinary = require("cloudinary").v2;
require("dotenv").config();

// Cloudinary connection setup
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

module.exports = cloudinary;
