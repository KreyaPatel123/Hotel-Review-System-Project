const express = require("express");
const route = express.Router();
const {sendOTP,signup,login,changePassword} = require("../controller/Auth")

route.post("/sendOTP",sendOTP);
route.post("/signup",signup);
route.post("/login",login);
route.post("/changePassword",changePassword);

module.exports = route;
