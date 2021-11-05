const express = require("express");
const router = express.Router();
const { Post_it, Note } = require("../../models");

//get all postit posts

router.get("/", (req, res) => {
  Post_it.findAll()
    .then((postitData) => {
      res.json(postitData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: "an error occurred" });
    });
});

//get a post-it post and it's associated note

router.get("/:id", (req, res) => {
  Post_it.findOne({
    where: {
      id: req.params.id,
    },
    include: [Note],
  })
    .then((data) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({ err: "no such post-it found!" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: "an error occurred" });
    });
});

//create a postit post

router.post("/", (req, res) => {
  if (!req.session.user) {
    return res.status(403).json({ err: "not logged in" });
  }
  Post_it.create({
      content: req.body.content,
      note_id: req.body.note_id,
    })
    .then(newPostit=>{
      res.status(200).json(newPostit);
    }).catch(err=> {
      console.log(err);
      res.status(500).json({ err: "an error occurred" });
    }) 
});

//update a postit post

router.put("/:id", (req, res) => {
  if (!req.session.user) {
    return res.status(403).json({ err: "not logged in" });
  }
  Post_it.findByPk(req.params.id)
    .then((found) => {
      Note.findByPk(found.note_id).then((foundNote) => {
        if (foundNote.user_id !== req.session.user.id) {
          return res.status(403).json({ err: "not your post-it" });
        }
        Post_it.update(
          {
            content: req.body.content,
            css: req.body.css,
            title: req.body.title
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
              res.status(404).json({ err: "no post-it found to update" });
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

//delete one postit post

router.delete("/:id", (req, res) => {
  if (!req.session.user) {
    return res.status(403).json({ err: "not logged in" });
  }
  Post_it.findByPk(req.params.id)
    .then((found) => {
      Note.findByPk(found.note_id).then((foundNote) => {
        if (foundNote.user_id !== req.session.user.id) {
          return res.status(403).json({ err: "not your post-it" });
        }
        Post_it.destroy({
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
