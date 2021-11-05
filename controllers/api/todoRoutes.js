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

//get a todo post and it's associated note

router.get("/:id", (req, res) => {
  Todo.findOne({
    where: {
      id: req.params.id,
    },
    include: [Note],
  })
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({ err: "no such todo found!" });
      }
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
    content1: req.body.content1,
    content2: req.body.content2,
    content3: req.body.content3,
    content4: req.body.content4,
    content5: req.body.content5,
    content6: req.body.content6,
    content7: req.body.content7,
    content8: req.body.content8,
    content9: req.body.content9,
    content10: req.body.content10,
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
            content1: req.body.content1,
            content2: req.body.content2,
            content3: req.body.content3,
            content4: req.body.content4,
            content5: req.body.content5,
            content6: req.body.content6,
            content7: req.body.content7,
            content8: req.body.content8,
            content9: req.body.content9,
            content10: req.body.content10,
            content1IsChecked: req.body.content1IsChecked,
            content2IsChecked: req.body.content2IsChecked,
            content3IsChecked: req.body.content3IsChecked,
            content4IsChecked: req.body.content4IsChecked,
            content5IsChecked: req.body.content5IsChecked,
            content6IsChecked: req.body.content6IsChecked,
            content7IsChecked: req.body.content7IsChecked,
            content8IsChecked: req.body.content8IsChecked,
            content9IsChecked: req.body.content9IsChecked,
            content10IsChecked: req.body.content10IsChecked,
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
