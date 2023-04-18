const AdCommAnoucs = require("../controllers/adCommAnouc.controller.js");

var router = require("express").Router();

// Create a new Tutorial
router.post("/", AdCommAnoucs.create);

// Retrieve all Tutorials
router.get("/", AdCommAnoucs.findAll);

// Retrieve all published Tutorials
//router.get("/published", tutorials.findAllPublished);

// Retrieve a single Tutorial with id
router.get("/:id", AdCommAnoucs.findOne);

// Update a Tutorial with id
router.put("/:id", AdCommAnoucs.update);

// Delete a Tutorial with id
router.delete("/:id", AdCommAnoucs.delete);

// Delete all Tutorials
router.delete("/", AdCommAnoucs.deleteAll);

module.exports = router;
