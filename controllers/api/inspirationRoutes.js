const express = require("express");
const router = express.Router();
const { Inspiration, Note } = require("../../models");

//get all inspiration posts

router.get("/", (req, res) => {
  Inspiration.findAll()
    .then((inspirationData) => {
      res.json(inspiration);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: "an error occurred" });
    });
});

//get a inspiration post and it's associated note

router.get("/:id", (req, res) => {
  Inspiration.findOne({
    where: {
      id: req.params.id,
    },
    include: [Note],
  })
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({ err: "no such inspiration found!" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: "an error occurred" });
    });
});

//create a inspiration post

router.post("/", (req, res) => {
  if (!req.session.user) {
    return res.status(403).json({ err: "not logged in" });
  }
  Inspiration.create({
    content: req.body.content,
    note_id: req.body.note_id,
  })
    .then((newInspiration) => {
      res.status(200).json(newInspiration);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: "an error occurred" });
    });
});

//update a inspiration post

router.put("/:id", (req, res) => {
  if (!req.session.user) {
    return res.status(403).json({ err: "not logged in" });
  }
  Inspiration.findByPk(req.params.id)
    .then((found) => {
      Note.findByPk(found.note_id).then((foundNote) => {
        if (foundNote.user_id !== req.session.user.id) {
          return res.status(403).json({ err: "not your inspiration" });
        }
        Inspiration.update(
          {
            content: req.body.content,
          },
          {
            where: {
              id: req.params.id,
            },
          }
        )
          .then((updateData) => {
            if (updateData[0]) {
              res.status(200).json(updateData);
            } else {
              res.status(404).json({ err: "no inspiration found to update" });
            }
          })
          .catch((err) => {
            console.log(err);
            res.status(500).json({ err: "an error occurred" });
          });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: "an error occurred" });
    });
});

//delete one inspiration post

router.delete("/:id", (req, res) => {
  if (!req.session.user) {
    return res.status(403).json({ err: "not logged in" });
  }
  Inspiration.findByPk(req.params.id)
    .then((found) => {
      Note.findByPk(found.note_id).then((foundNote) => {
        if (foundNote.user_id !== req.session.user.id) {
          return res.status(403).json({ err: "not your inspiration" });
        }
        Inspiration.destroy({
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
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: "an error occurred" });
    });
});

module.exports = router;
