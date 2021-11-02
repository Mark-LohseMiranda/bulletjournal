const express = require("express");
const router = express.Router();
const { Braindump } = require("../../models");

//get all braindump posts

router.get("/", async (req, res) => {
  try {
    const braindumps = await Braindump.findAll();
    if (braindumps.length) {
      res.json(braindumps);
    } else {
      res.status(404).json({ message: "No braindumps Found!" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "an error occured", err: err });
  }
});

//create a braindump post

router.post("/", async (req, res) => {
  try {
    const braindump = await Braindump.create({
      content: req.body.content,
      note_id: req.body.note_id,
    });
    res.status(200).json(braindump);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "an error occured", err: err });
  }
});

//delete one braindump post

router.delete("/:id", async (req, res) => {
  try {
    const braindump = await Braindump.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(braindump);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
