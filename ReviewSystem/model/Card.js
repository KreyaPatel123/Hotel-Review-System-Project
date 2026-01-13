const mongoose = require("mongoose");
const RatingAndReview = require("./RatingAndReview");

const cardSchema = new mongoose.Schema({
    image:{
        type:String,
        required:true,
    },
    hotelName:{
        type:String,
        required:true,
    },
    discription:{
        type:String,
        required:true,
    },
    countryName:{
        type:String,
        required:true,
    },
    cityName:{
        type:String,
        required:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    ratingAndReview:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"RatingAndReview"
    }
    // ratingAndReview:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:"RatingAndReview",
    // }
})
module.exports = mongoose.model("Card",cardSchema);