// const express = require("express");
// const route = express.Router(); 
// const {createCard,editCard,getCardDetails,showAllCard} = require("../controller/Card");
// const {createRating,getAvgRating,getAllRating}=require("../controller/RatingAndReview");

// //Card
// route.post("/createCard",createCard);
// route.post("/editCard",editCard);
// route.post("/getCardDetails",getCardDetails);
// route.get("/showAllCard",showAllCard);

// //Rating and Review
// route.post("/createRating",createRating);
// route.post("/getAvgRating",getAvgRating);
// route.get("/getAllRating",getAllRating);

// module.exports = route;

const express = require("express");
const route = express.Router(); 
const {auth,isVisitor,isOwner} = require("../middelware/auth")
const {createCard,editCard,getCardDetails,showAllCard} = require("../controller/Card");
const {createRating,getAvgRating,getAllRating}=require("../controller/RatingAndReview");

//Card
route.post("/createCard",auth,isOwner,createCard);
route.post("/editCard",auth,isOwner,editCard);
// route.post("/getCardDetails",getCardDetails);
route.get("/getCardDetails/:cardId",getCardDetails);

route.get("/showAllCard",showAllCard);

//Rating and Review
route.post("/createRating",auth,createRating);
route.post("/getAvgRating",getAvgRating);
route.get("/getAllRating",getAllRating);

module.exports = route;