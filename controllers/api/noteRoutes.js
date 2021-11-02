const express = require("express");
const router = express.Router();
const { Note } = require("../../models");

//get all note posts

router.get("/", async (req, res) => {
  try {
    const notes = await Note.findAll();
    if (notes.length) {
      res.json(notes);
    } else {
      res.status(404).json({ message: "No notes Found!" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "an error occured", err: err });
  }
});

//create a note post

router.post("/", async (req, res) => {
  try {
    const note = await Note.create({
      user_id: req.session.user.id,
      month_id: req.body.month_id,
    });
    res.status(200).json(note);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "an error occured", err: err });
  }
});

//delete one note post

router.delete("/:id", async (req, res) => {
  try {
    const note = await Note.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(note);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;