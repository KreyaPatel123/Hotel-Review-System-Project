const mongoose = require("mongoose");
require("dotenv").config();
const dbConnect = () => {
    mongoose.connect(process.env.MONGODB_URL,{})
    .then(()=>{console.log("App and Database Connect Successfully");})
    .catch((error)=>{console.log(error);})
}
module.exports = dbConnect;