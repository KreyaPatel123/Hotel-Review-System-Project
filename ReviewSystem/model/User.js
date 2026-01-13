const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    otp:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"OTP"
    },
    password:{
        type:String,
        required:true,
    },
    contactNumber:{
        type:Number,
        
    },
    confirmPassword:{
        type:String,
        
    },
    newPassword:{
        type:String,
        
    },
    image:{
        type:String,
    },
    token:{
        type:String
    },
    accountType:{
        type:String,
        required:true,
        enum:["Visitor","Owner"]
    },
    card:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Card"
    }
})
module.exports = mongoose.model("User",userSchema);