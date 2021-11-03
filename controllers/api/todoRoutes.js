const express = require("express");
const router = express.Router();
const { Todo, Note } = require("../../models");

//get all todo posts

router.get("/", (req, res) => {
  Todo.findAll()
    .then((todoData) => {
      res.json(todoData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: "an error occurred" });
    });
});

//create a todo post

router.post("/", (req, res) => {
  if (!req.session.user) {
    return res.status(403).json({ err: "not logged in" });
  }
  Todo.create({
    content: req.body.content,
    note_id: req.body.note_id,
  })
    .then((newTodo) => {
      res.status(200).json(newTodo);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: "an error occurred" });
    });
});

//update one todo post

router.put("/:id", (req, res) => {
  if (!req.session.user) {
    return res.status(403).json({ err: "not logged in" });
  }
  Todo.findByPk(req.params.id)
    .then((found) => {
      Note.findByPk(found.note_id).then((foundNote) => {
        if (foundNote.user_id !== req.session.user.id) {
          return res.status(403).json({ err: "not your todo" });
        }
        Todo.update(
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
              res.status(404).json({ err: "no todo found to update" });
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

//delete one todo post

router.delete("/:id", (req, res) => {
  if (!req.session.user) {
    return res.status(403).json({ err: "not logged in" });
  }
  Todo.findByPk(req.params.id)
    .then((found) => {
      Note.findByPk(found.note_id).then((foundNote) => {
        if (foundNote.user_id !== req.session.user.id) {
          return res.status(403).json({ err: "not your todo" });
        }
        Todo.destroy({
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
