const User = require("../model/User");
const Card = require("../model/Card");
const RatingAndReview = require("../model/RatingAndReview");
const { response, request } = require("express");

exports.createRating = async(request,response) => {
    try{
        const userId = request.user.id;
        const {rating,review,cardId}=request.body;
        if(!rating || !review || !cardId){
    return response.status(400).json({
        success:false,
        message:"All fields are required",
    });
}


        const ratingReview = await RatingAndReview.create({
            user:userId,
            card:cardId,
            rating,
            review
        })
        console.log(ratingReview);
        const populatedRatingReview = await RatingAndReview.find({cardId}).populate("card").populate("user").exec();
        return response.status(200).json({
            success:true,
            message:"Rating Created Successfully",
            data:populatedRatingReview,
        })

    }
    catch(error)
    {
        console.log(error);
        return response.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}

exports.getAvgRating = async(request,response) => {
    try{
        const cardId = request.body;

        const result = await RatingAndReview.aggregate([
        {
            $match:{
                course : new mongoose.Schema.Types.ObjectId(cardId),
            },
        },
        {
            $group:{
                _id:null,
                averageRating: {$avg:"$rating"},
            }
        }
    ])
    if(result.length>0)
    {
        return response.status(200).json({
            success:true,
            message:"Average of review calculate Successfully",
            averageRating:result[0].averageRating,
        });
    }

    return response.status(200).json({
        success:true,
        message:"Average Review is 0,no rating given till now",    
    });

    }
    catch(error){
        console.log(error);
        return response.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}

exports.getAllRating = async(request,response) => {
    try{
       const allReview = await RatingAndReview.find({}).sort({rating:"desc"})
       .populate({
        path:"card",
        select:"hotalName cityName countryName"
       })
       .populate({
        path:"user",
        select:"firstName lastName"
       })

       return response.status(200).json({
        success:true,
        message:"All reviewed fetch Successfully",
        data:allReview,
    });   
    }

    catch(error){
        console.log(error);
        return response.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }

}