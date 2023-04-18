const announcments = require("../controllers/announcment.controller.js");

var router = require("express").Router();

// Create a new Tutorial
router.post("/", announcments.create);

// Retrieve all Tutorials
router.get("/", announcments.findAll);

// Retrieve all published Tutorials
//router.get("/published", tutorials.findAllPublished);

// Retrieve a single Tutorial with id
router.get("/:id", announcments.findOne);

// Update a Tutorial with id
router.put("/:id", announcments.update);

// Delete a Tutorial with id
router.delete("/:id", announcments.delete);

// Delete all Tutorials
router.delete("/", announcments.deleteAll);

module.exports = router;
