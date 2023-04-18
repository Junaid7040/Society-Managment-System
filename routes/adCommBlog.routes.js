const AdCommBlogs = require("../controllers/adCommblog.controller.js");

var router = require("express").Router();

// Create a new Tutorial
router.post("/", AdCommBlogs.create);

// Retrieve all Tutorials
router.get("/", AdCommBlogs.findAll);

// Retrieve all published Tutorials
//router.get("/published", tutorials.findAllPublished);

// Retrieve a single Tutorial with id
router.get("/:id", AdCommBlogs.findOne);

// Update a Tutorial with id
router.put("/:id", AdCommBlogs.update);

// Delete a Tutorial with id
router.delete("/:id", AdCommBlogs.delete);

// Delete all Tutorials
router.delete("/", AdCommBlogs.deleteAll);

module.exports = router;
