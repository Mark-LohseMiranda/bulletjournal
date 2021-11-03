const express = require('express');
const router = express.Router();
const {User, Braindump, Inspiration, Todo, Schedule, Note} = require('../models');

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

router.get('/day/:num', (req, res) => {
    if(!req.session.user){
        return res.redirect("/login")
    };
    Note.findOne({
        where:{day: req.params.num},
        include:[User, Braindump, Inspiration, Todo, Schedule]
    }).then(noteData=>{
        const hbsNote = noteData.get({plain:true});
        res.render("day",hbsNote)
    }).catch(err => {
        res.status(500).json('internal server error')
    })
});

module.exports = router;