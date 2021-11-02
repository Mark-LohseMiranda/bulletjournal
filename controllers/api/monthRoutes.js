const express = require("express");
const router = express.Router();
const { Month } = require("../../models");

//get all month posts

router.get("/", async (req, res) => {
  try {
    const months = await Month.findAll();
    if (months.length) {
      res.json(months);
    } else {
      res.status(404).json({ message: "No months Found!" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "an error occured", err: err });
  }
});

//create a month post

router.post("/", async (req, res) => {
  try {
    const month = await Month.create({
      month_name: req.body.month_name,
      days: req.body.days,
      user_id: req.session.user.id
    });
    res.status(200).json(month);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "an error occured", err: err });
  }
});

//delete one month post

router.delete("/:id", async (req, res) => {
  try {
    const month = await Month.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(month);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
