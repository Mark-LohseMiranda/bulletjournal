const express = require("express");
const router = express.Router();
const { Schedule } = require("../../models");

//get all schedule posts

router.get("/", async (req, res) => {
  try {
    const schedules = await Schedule.findAll();
    if (schedules.length) {
      res.json(schedules);
    } else {
      res.status(404).json({ message: "No schedules Found!" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "an error occured", err: err });
  }
});

//create a schedule post

router.post("/", async (req, res) => {
  try {
    const schedule = await Schedule.create({
      content: req.body.content,
      time_of_day: req.body.time_of_day,
      note_id: req.body.note_id,
    });
    res.status(200).json(schedule);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "an error occured", err: err });
  }
});

//delete one schedule post

router.delete("/:id", async (req, res) => {
  try {
    const schedule = await Schedule.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(schedule);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
