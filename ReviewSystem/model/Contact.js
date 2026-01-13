const mongoose = require("mongoose");
const contactSchema = new mongoose.Schema({
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    email:{
        type:String
    },
    contactNumber:{
        type:String,
    },
    countryName:{
        type:String,
    },
    cityName:{
        type:String,
    },
    about:{
        type:String,
    }
})
module.exports = mongoose.model("Contact",contactSchema);