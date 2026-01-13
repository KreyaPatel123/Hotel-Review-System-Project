const mongoose = require("mongoose");
const RatingAndReviewSchema = new mongoose.Schema({
    rating:{
        type:Number,
        required:true,
    },
    review:{
        type:String,
        required:true,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
    },
    card:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Card",
    }
})
module.exports = mongoose.model("RatingAndReview",RatingAndReviewSchema);