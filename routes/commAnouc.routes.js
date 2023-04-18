const commAnoucs = require("../controllers/commAnouc.controller.js");

var router = require("express").Router();

// Create a new Tutorial
router.post("/", commAnoucs.create);

// Retrieve all Tutorials
router.get("/", commAnoucs.findAll);

// Retrieve all published Tutorials
//router.get("/published", tutorials.findAllPublished);

// Retrieve a single Tutorial with id
router.get("/:id", commAnoucs.findOne);

// Update a Tutorial with id
router.put("/:id", commAnoucs.update);

// Delete a Tutorial with id
router.delete("/:id", commAnoucs.delete);

// Delete all Tutorials
router.delete("/", commAnoucs.deleteAll);

module.exports = router;
