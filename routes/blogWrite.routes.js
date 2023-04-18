const blogWrites = require("../controllers/blogWrite.controller.js");

var router = require("express").Router();

// Create a new Tutorial
router.post("/", blogWrites.create);

// Retrieve all Tutorials
router.get("/", blogWrites.findAll);

// Retrieve all published Tutorials
//router.get("/published", tutorials.findAllPublished);

// Retrieve a single Tutorial with id
router.get("/:id", blogWrites.findOne);

// Update a Tutorial with id
router.put("/:id", blogWrites.update);

// Delete a Tutorial with id
router.delete("/:id", blogWrites.delete);

// Delete all Tutorials
router.delete("/", blogWrites.deleteAll);

module.exports = router;
