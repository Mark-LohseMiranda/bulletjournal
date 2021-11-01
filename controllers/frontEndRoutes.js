const express = require('express');
const router = express.Router();
const {User} = require('../models');

//render login page

router.get("/login",(req,res)=>{
    res.render("login")
})

//render sign up page

router.get("/signup",(req,res)=>{
    res.render("signup")
})

//render home page

router.get("/", (req, res)=>{
    req.render("home")
})

router.get("*", (req, res)=>{
    res.send("<h1>Wrong Route!</h1>")
})

module.exports = router;