const timetables = require("../controllers/timetable.controller.js");

var router = require("express").Router();

// Create a new Tutorial
router.post("/", timetables.create);

// Retrieve all Tutorials
router.get("/", timetables.findAll);

// Retrieve a single Tutorial with id
router.get("/:id", timetables.findOne);

// Update a Tutorial with id
router.put("/:id", timetables.update);

// Delete a Tutorial with id
router.delete("/:id", timetables.delete);

// Delete all Tutorials
router.delete("/", timetables.deleteAll);

module.exports = router;
