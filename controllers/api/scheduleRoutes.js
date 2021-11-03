const express = require("express");
const router = express.Router();
const { Schedule, Note } = require("../../models");

//get all schedule posts

router.get("/", (req, res) => {
  Schedule.findAll()
    .then((scheduleData) => {
      res.json(scheduleData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: "an error occurred" });
    });
});

//create a schedule post

router.post("/", (req, res) => {
  if (!req.session.user) {
    return res.status(403).json({ err: "not logged in" });
  }
  Schedule.create({
    content8am: req.body.content8am,
    content9am: req.body.content9am,
    content10am: req.body.content10am,
    content11am: req.body.content11am,
    content12pm: req.body.content12pm,
    content1pm: req.body.content1pm,
    content2pm: req.body.content2pm,
    content3pm: req.body.content3pm,
    content4pm: req.body.content4pm,
    content5pm: req.body.content5pm,
    content6pm: req.body.content6pm,
    content7pm: req.body.content7pm,
    content8pm: req.body.content8pm,
    note_id: req.body.note_id,
  })
    .then((newSchedule) => {
      res.status(200).json(newSchedule);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err: "an error occurred" });
    });
});

//update one schedule post

router.put("/:id", (req, res) => {
  if (!req.session.user) {
    return res.status(403).json({ err: "not logged in" });
  }
  Schedule.findByPk(req.params.id)
    .then((found) => {
      Note.findByPk(found.note_id).then((foundNote) => {
        if (foundNote.user_id !== req.session.user.id) {
          return res.status(403).json({ err: "not your schedule" });
        }
        Schedule.update(
          {
            content8am: req.body.content8am,
            content9am: req.body.content9am,
            content10am: req.body.content10am,
            content11am: req.body.content11am,
            content12pm: req.body.content12pm,
            content1pm: req.body.content1pm,
            content2pm: req.body.content2pm,
            content3pm: req.body.content3pm,
            content4pm: req.body.content4pm,
            content5pm: req.body.content5pm,
            content6pm: req.body.content6pm,
            content7pm: req.body.content7pm,
            content8pm: req.body.content8pm,
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
              res.status(404).json({ err: "no schedule found to update" });
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

//delete one schedule post

router.delete("/:id", (req, res) => {
  if (!req.session.user) {
    return res.status(403).json({ err: "not logged in" });
  }
  Schedule.findByPk(req.params.id)
    .then((found) => {
      Note.findByPk(found.note_id).then((foundNote) => {
        if (foundNote.user_id !== req.session.user.id) {
          return res.status(403).json({ err: "not your schedule" });
        }
        Schedule.destroy({
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
