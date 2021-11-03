const express = require('express');
const router = express.Router();

const userRoutes = require("./userController");
router.use("/users",userRoutes);

const braindumpRoutes = require("./braindumpRoutes");
router.use("/braindumps",braindumpRoutes);

const noteRoutes = require("./noteRoutes");
router.use("/notes",noteRoutes);

const monthRoutes = require("./monthRoutes");
router.use("/months",monthRoutes);

const goalRoutes = require("./goalRoutes");
router.use("/goals",goalRoutes);

const postitRoutes = require("./postitRoutes");
router.use("/postits",postitRoutes);

const reminderRoutes = require("./reminderRoutes");
router.use("/reminders",reminderRoutes);

const scheduleRoutes = require("./scheduleRoutes");
router.use("/schedules",scheduleRoutes);

const todoRoutes = require("./todoRoutes");
router.use("/todos",todoRoutes);

const inspirationRoutes = require("./inspirationRoutes");
router.use("/todos",inspirationRoutes);

module.exports = router;