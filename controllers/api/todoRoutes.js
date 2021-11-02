const express = require("express");
const router = express.Router();
const { Todo } = require("../../models");

//get all todo posts

router.get("/", async (req, res) => {
  try {
    const todos = await Todo.findAll();
    if (todos.length) {
      res.json(todos);
    } else {
      res.status(404).json({ message: "No todos Found!" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "an error occured", err: err });
  }
});

//create a todo post

router.post("/", async (req, res) => {
  try {
    const todo = await Todo.create({
      content: req.body.content,
      note_id: req.body.note_id,
    });
    res.status(200).json(todo);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "an error occured", err: err });
  }
});

//delete one todo post

router.delete("/:id", async (req, res) => {
  try {
    const todo = await Todo.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(todo);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
