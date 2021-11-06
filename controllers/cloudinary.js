const express = require("express");
const router = express.Router();
const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET,
  secure: true
});



router.post("/cloud",(req,res)=> {
  console.log(req.files);
  console.log(req.body);

  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).send('No files were uploaded.');
    return;
  }
  var imagePath = req.files.image.path;

  cloudinary.uploader.upload(imagePath, { tags: 'post_it' })
    .then(function (image) {
      console.log('File uploaded');
      if(!image.url) {
        res.status(404).json({message: 'No url was found'})
      }
      res.status(200).json(image.url);
    }) .catch(err => res.status(500).json(err))
  }

);
module.exports = router;