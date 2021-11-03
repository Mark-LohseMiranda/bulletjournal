const express = require("express");
const router = express.Router();
const {
  Note,
  User,
  Braindump,
  Goal,
  Inspiration,
  Post_it,
  Reminder,
  Schedule,
  Todo,
} = require("../../models");

//get all note posts

router.get("/", (req, res) => {
  Note.findAll({
    include: [
      User,
      Braindump,
      Goal,
      Inspiration,
      Post_it,
      Reminder,
      Schedule,
      Todo,
    ],
  })
    .then((notes) => {
      res.json(notes);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: "an error occurred" });
    });
});

//create a note post

router.post("/", (req, res) => {
  if (!req.session.user) {
    return res.status(403).json({ err: "not logged in" });
  }
  Note.create({
    user_id: req.session.user.id,
  })
    .then((newNote) => {
      res.status(200).json(newNote);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: "an error occurred" });
    });
});

//find a single note

router.get("/:day", (req, res) => {
  Note.findOne({
    where: {
      day: req.params.day,
      user_id: req.session.user.id
    },
    include: [
      User,
      Braindump,
      Goal,
      Inspiration,
      Post_it,
      Reminder,
      Schedule,
      Todo,
    ],
  })
    .then((note) => {
      if (note) {
        res.json(note);
      } else {
        res.status(404).json({ err: "Note not found!" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: "an error occurred" });
    });
});

//delete one note post

router.delete("/:id", (req, res) => {
  if (!req.session.user) {
    return res.status(403).json({ err: "not logged in" });
  }
  Note.findByPk(req.params.id)
    .then((found) => {
      if (req.session.user.id !== found.user_id) {
        return res.status(403).json({ err: "not your note" });
      }
      Note.destroy({
        where: {
          id: req.params.id,
        },
      })
        .then((deleted) => {
          if (deleted) {
            res.status(200).json(deleted);
          }
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ err: "an error occurred" });
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: "an error occurred" });
    });
});

module.exports = router;
