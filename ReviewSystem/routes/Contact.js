const express = require("express");
const route = express.Router();
const {createContact} = require("../controller/Contact");
const {auth,isVisitor,isOwner} = require("../middelware/auth")


route.post("/createContact",auth,createContact);

module.exports = route;