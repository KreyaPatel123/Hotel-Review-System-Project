const User = require("../model/User")
const OTP = require("../model/OTP");
const { generate } = require("otp-generator");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
require("dotenv").config();

exports.sendOTP = async(request,response) => {
    try{
        const {email} = request.body;
        //Check if your with entered EmailId Exists or not
        const checkEmailExists = await User.findOne({email})

        //if user email is already exists then return Email is Alredy Exists 
        if(checkEmailExists){
            return response.status(401).json({
                success:false,
                message:"Email is Already Exists",
            })          
        }
        
        //otherwise generate OTP
        let otp =  generate(6,{
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
            specialChars:false,
        })

        console.log('OTP generated',otp);

        //ensure OTP is unique
        let result = await OTP.find({otp:otp})
        while(result)
        {
            otp = generate(6,{
                upperCaseAlphabets:false,
                lowerCaseAlphabets:false,
                specialChars:false,
            });
            result = await OTP.findOne({otp:otp})
        }
        //save otp 
        // const otpPayload = {email,otp}
        // const otpBody = await OTP.create({otpPayload});
        const otpBody = await OTP.create({email:email,otp:otp});
        console.log(otpBody);
         return response.status(200).json({
            success:true,
            message:"OTP Send Successfully",
            data:otpBody,
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

exports.signup = async(request,response) => {
    try{
        const {firstName,lastName,email,password,confirmPassword,contactNumber,accountType,otp} = request.body;
        if(!firstName || !lastName || !email || !password || !confirmPassword
             || !contactNumber || !accountType || !otp)
            {
                return response.status(400).json({
                    success:false,
                    message:"All fields are Required",
            
                })
            }

        const checkUserExists = await User.findOne({email})
        if(checkUserExists){
            return response.status(400).json({
                success:false,
                message:"User is Already Exists please Sign-up with another emailId"
            })
        }  
        if(password !== confirmPassword){
            return response.status(400).json({
                success:false,
                message:"Password and Conform password does not matches",
            })
        }
        
        //find recent OTP
        // const recentOTP = await OTP.find({email}).sort({createdAt:-1}).limit(1);
        const recentOTP = await OTP.findOne({email}).sort({createdAt:-1});

        console.log("Recent OTP",recentOTP);

        //if recent OTP is not arrived
        if(!recentOTP){
            return response.status(400).json({
                success:false,
                message:"OTP Length is Zero...OTP Not Found",
                
            })
        }
    //     if (String(otp) !== String(recentOTP.otp)) {
    //      return response.status(400).json({
    //     success: false,
    //     message: "Entered OTP does not match the most recent OTP",
    //   });
    // }

        //check Your enter OTP and recendOTP match or not
        if(otp !== recentOTP.otp){
            return response.status(400).json({
                success:false,
                message:"Your Entered OTP and recent arrive OTP does not matches",
            })
        }

        //hash password then store into database
        const hashPassword = await bcrypt.hash(password,10)
        const sinnUpData =  await User.create({
            firstName,
            lastName,
            email,
            password:hashPassword,
            // confirmPassword,
            contactNumber,
            accountType,
            image:`https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
        })   
        return response.status(200).json({
            success:true,
            message:"You are Sign-up Successfully",
            data:sinnUpData,
        })
        

    }
    catch(error){
        console.log(error);
        response.status(500).json({
            success:false,
            message:"Internal Server Error",
            error:error.message,        
        })
        
    }
}

exports.login = async(request,response) => {
    try{
        const {email,password} = request.body;

    if(!email || !password)
    {
        return response.status(404).json({
            success:false,
            message:"All fields are required"
        })
    }

        //check email id sign-up or nor
    const user = await User.findOne({email})
    if(!user)
    {
        return response.status(400).json({
            success:false,
            message:"Please First Signup then Login"
        });
    } 

    const isMatch = await bcrypt.compare(password,user.password)
    if(!isMatch){
        return response.status(404).json({
            success:false,
            message:"Incorrect Password.....Password Does not Matches",
        })
    }
    
    //create/generate token and cookie
    const payload = {
        id:user._id,
        email:user.email,
        accountType:user.accountType,
    }

    const token = jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:"2h"});

    // prepare userData without password
    const userData = user.toObject();
    userData.password=undefined;
    userData.token=token;

    //send cookie options
    const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly:true,
    }

    return response.cookie("token", token, options).status(200).json({
        success: true,
        message: "Logged in successfully",
        token,
        user: userData,
      });

    }
    catch(error)
    {
        console.log(error);
        return response.status(500).json({
            success:false,
            message:"Internal Server Error",
            error:error.message,
        })
    }
}

exports.changePassword = async(request,response) => {
    try{
        const {email,newPassword,confirmPassword} = request.body;
        if(!email || !newPassword || !confirmPassword){
            return response.status(404).json({
                success:false,
                message:"All fields are required"
        
            });
        }

        const user = await User.findOne({email})
        if(!user)
        {
            return response.status(404).json({
                success:false,
                message:"User with this Email Does not Exists",
            });
        }
        
        if(newPassword !== confirmPassword)
        {
            return response.status(404).json({
                success:false,
                message:"Password and ConfirmPassword does not matches",
            });
        }

        const hashPassword = await bcrypt.hash(newPassword,10);
        user.password=hashPassword;
        await user.save();

        //return response
        return response.status(200).json({
        success:true,
        message:"Mail Send Successfully",
        
    });
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