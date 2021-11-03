const express = require("express");
const router = express.Router();
const { Inspiration } = require("../../models");

//get all inspiration posts

router.get("/", async (req, res) => {
  try {
    const inspiration = await Inspiration.findAll();
    if (inspiration.length) {
      res.json(inspiration);
    } else {
      res.status(404).json({ message: "No inspirations Found!" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "an error occured", err: err });
  }
});

//create a inspiration post

router.post("/", async (req, res) => {
  try {
    const inspiration= await Inspiration.create({
      content: req.body.content,
      note_id: req.body.note_id,
    });
    res.status(200).json(inspiration);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "an error occured", err: err });
  }
});

//delete one inspiration post

router.delete("/:id", async (req, res) => {
  try {
    const inspiration= await Inspiration.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(inspiration);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;