const express = require("express");
const router = express.Router();
const { Goal } = require("../../models");

//get all goal posts

router.get("/", async (req, res) => {
  try {
    const goals = await Goal.findAll();
    if (goals.length) {
      res.json(goals);
    } else {
      res.status(404).json({ message: "No goals Found!" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "an error occured", err: err });
  }
});

//create a goal post

router.post("/", async (req, res) => {
  try {
    const goal = await Goal.create({
      content: req.body.content,
      note_id: req.body.note_id,
    });
    res.status(200).json(goal);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "an error occured", err: err });
  }
});

//delete one goal post

router.delete("/:id", async (req, res) => {
  try {
    const goal = await Goal.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(goal);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
