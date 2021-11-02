const express = require("express");
const router = express.Router();
const { Post_it } = require("../../models");

//get all postit posts

router.get("/", async (req, res) => {
  try {
    const postits = await Post_it.findAll();
    if (postits.length) {
      res.json(postits);
    } else {
      res.status(404).json({ message: "No post-its Found!" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "an error occured", err: err });
  }
});

//create a postit post

router.post("/", async (req, res) => {
  try {
    const postit = await Post_it.create({
      content: req.body.content,
      note_id: req.body.note_id,
    });
    res.status(200).json(postit);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "an error occured", err: err });
  }
});

//delete one postit post

router.delete("/:id", async (req, res) => {
  try {
    const postit = await Post_it.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(postit);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
