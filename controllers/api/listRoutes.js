const express = require("express");
const router = express.Router();
const { List, User } = require("../../models");

router.get("/",(req, res) => {
    List.findAll({
        where: {
            user_id: req.session.user.id
        },
        include: [User]
    }).then(list => {
        if(list){
            res.json(list);
        }else{
            res.status(404).json({ err: "Note not found!" });
        }
    }).catch((err) => {
        console.log(err);
        res.status(500).json({ err: "an error occurred" });
    });
})

router.post("/", (req, res) => {
    if (!req.session.user) {
      return res.status(403).json({ err: "not logged in" });
    }
    List.create({
      user_id: req.session.user.id,
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
    })
      .then((newList) => {
        res.status(200).json(newList);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err: "an error occurred" });
      });
});

module.exports = router;