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
    res.render("home")
})

router.get("/dashboard", (req,res)=>{
    res.render("dashboard")
})

router.get("/note", (req,res) => {
    res.render("note")
})

module.exports = router;