const express = require("express");
const router = express.Router();
const { Reminder } = require("../../models");

//get all reminder posts

router.get("/", async (req, res) => {
  try {
    const reminders = await Reminder.findAll();
    if (reminders.length) {
      res.json(reminders);
    } else {
      res.status(404).json({ message: "No reminders Found!" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "an error occured", err: err });
  }
});

//create a reminder post

router.post("/", async (req, res) => {
  try {
    const reminder = await Reminder.create({
      content: req.body.content,
      note_id: req.body.note_id,
    });
    res.status(200).json(reminder);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "an error occured", err: err });
  }
});

//delete one reminder post

router.delete("/:id", async (req, res) => {
  try {
    const reminder = await Reminder.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(reminder);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
