const commBlogs = require("../controllers/commBlog.controller.js");

var router = require("express").Router();

// Create a new Tutorial
router.post("/", commBlogs.create);

// Retrieve all Tutorials
router.get("/", commBlogs.findAll);

// Retrieve all published Tutorials
//router.get("/published", tutorials.findAllPublished);

// Retrieve a single Tutorial with id
router.get("/:id", commBlogs.findOne);

// Update a Tutorial with id
router.put("/:id", commBlogs.update);

// Delete a Tutorial with id
router.delete("/:id", commBlogs.delete);

// Delete all Tutorials
router.delete("/", commBlogs.deleteAll);

module.exports = router;
