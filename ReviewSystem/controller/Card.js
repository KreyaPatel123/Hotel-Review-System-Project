const Card = require("../model/Card");
const User = require("../model/User");
const { uploadImageToCloudinary } = require("../utils/imageUploader"); // ✅ only this import

exports.createCard = async (req, res) => {
  try {
    const { hotelName, discription, countryName, cityName } = req.body;
    const image = req.files?.image;
    const userId = req.user.id;


    if (!image || !hotelName || !discription || !countryName || !cityName) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Upload image to Cloudinary
    const uploadedImage = await uploadImageToCloudinary(
      image,
      process.env.FOLDER_NAME
    );

    // Create card in DB
    const cardData = await Card.create({
      image: uploadedImage.secure_url,
      hotelName,
      discription,
      countryName,
      cityName,
      user:userId,
    });

    const populatedCard = await Card.findById(cardData._id).populate({
        path:"user",
        select:"firstName lastName image email"
    }).exec();


    await User.findByIdAndUpdate(
      userId,
      { $push: { card: cardData._id } },
      { new: true }
    );


    return res.status(200).json({
      success: true,
      message: "Card Created Successfully",
      data:populatedCard,
    });
  } catch (error) {
    console.error("Error during card creation:", error);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};


exports.editCard = async(request,response)=>{
    try{
        const {cardId} = request.body;
        const {
            hotelName,
            discription,
            countryName,
            cityName,
        }=request.body
        
        if(!hotelName || !discription || !countryName || !cityName){
            return response.status(404).json({
                success:false,
                message:"All fields are required",
            })
        }

        const card = await Card.findById(cardId);
        if(!card)
        {
            return response.status(404).json({
                success:false,
                message:"Card does not Exists..."
            });
        }

        //if image aave to
        if(request.files.image)
        {
            const image = request.files.image;
            const uploadImage = await uploadImageToCloudinary(image,process.env.FOLDER_NAME);  
            card.image=uploadImage?.secure_url; 
        }
        if(hotelName) {card.hotelName = hotelName};
        if(discription) {card.discription=discription};
        if(cityName) {card.cityName=cityName};
        if(countryName) {card.countryName=countryName};

        await card.save();

        return response.status(200).json({
            success:true,
            message:"Card Updated Successfully"
        })

    }
    catch(error){
        console.log(error);
        return response.status(500).json({
            success:false,
            message:"Internal Server Error",
            error:error.message,
        })
    }

}

exports.getCardDetails = async(request,response) =>{
    try{
        const {cardId} = request.params;
    if(!cardId){
        return response.status(404).json({
            success:false,
            message:"CardId is required",
        })
    } 

    const cardDetails = await Card.findById(cardId).populate("ratingAndReview")
                                                    .populate({
                                                        path:"user",
                                                        select:"firstName lastName image email"
                                                    }).exec();
    if(!cardDetails){
        return response.status(400).json({
            success:false,
            message: `Could not find course with id: ${cardId}`,

        })
    }

    //return response
    return response.status(200).json({
        success:true,
        message:"All Card Details fetched Successfully",
        data:cardDetails,
    })

    }
    catch(error){
        console.log(error);
        return response.status(500).json({
            success:false,
            message:"Internal Server Error",
            error:error.message,
        });

    }

}
exports.showAllCard = async(request,response) => {
    try{
        const allCard = await Card.find();

        return response.status(200).json({
            success:true,
            message:"All Card fetched Successfully",
            data:allCard,
        })

    }
    catch(error){
        console.log(error);
        return response.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}












// const Card = require("../model/Card");
// const { request, response } = require("express");
// const User = require("../model/User");
// const uploadImageToCloudinary = require("../utils/imageUploader");

// exports.createCard = async (req, res) => {
//   try {
//     const { hotelName, discription, countryName, cityName } = req.body;
//     const image = req.files?.image;
//     const userId = req.user.id;


//     if (!image || !hotelName || !discription || !countryName || !cityName) {
//       return res.status(400).json({
//         success: false,
//         message: "All fields are required",
//       });
//     }

//     // Upload image to Cloudinary
//     const uploadedImage = await uploadImageToCloudinary(
//       image,
//       process.env.FOLDER_NAME
//     );

//     // Create card in DB
//     const cardData = await Card.create({
//       image: uploadedImage.secure_url,
//       hotelName,
//       discription,
//       countryName,
//       cityName,
//       user:userId,
//     });

//     await User.findByIdAndUpdate(
//       userId,
//       { $push: { card: cardData._id } },
//       { new: true }
//     );


//     return res.status(200).json({
//       success: true,
//       message: "Card Created Successfully",
//       data: cardData,
//     });
//   } catch (error) {
//     console.error("Error during card creation:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//       error: error.message,
//     });
//   }
// };
// exports.getCardDetails = async (request, response) => {
//   try {
//     const { cardId } = request.body;

//     if (!cardId) {
//       return response.status(404).json({
//         success: false,
//         message: "CardId is required",
//       });
//     }

//     // 👇 અહીં findById માં સીધું cardId pass કરવું છે
//     const cardDetails = await Card.findById(cardId)
//       .populate("ratingAndReview")
//       .populate({
//         path: "user",
//         select: "firstname lastname image email",
//       })
//       .exec();

//     if (!cardDetails) {
//       return response.status(400).json({
//         success: false,
//         message: `Could not find card with id: ${cardId}`,
//       });
//     }

//     return response.status(200).json({
//       success: true,
//       message: "Card details fetched successfully",
//       data: cardDetails,
//     });
//   } catch (error) {
//     console.log(error);
//     return response.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//       error: error.message,
//     });
//   }
// };
