const express = require('express');
const router = express.Router();

const userRoutes = require("./userController");
router.use("/users",userRoutes);

const braindumpRoutes = require("./braindumpRoutes");
router.use("/braindumps",braindumpRoutes);

const noteRoutes = require("./noteRoutes");
router.use("/notes",noteRoutes);

const goalRoutes = require("./goalRoutes");
router.use("/goals",goalRoutes);

const postitRoutes = require("./postitRoutes");
router.use("/postits",postitRoutes);

const scheduleRoutes = require("./scheduleRoutes");
router.use("/schedules",scheduleRoutes);

const todoRoutes = require("./todoRoutes");
router.use("/todos",todoRoutes);

const inspirationRoutes = require("./inspirationRoutes");
router.use("/inspirations",inspirationRoutes);

const listRoutes = require('./listRoutes');
router.use('/lists', listRoutes)

module.exports = router;