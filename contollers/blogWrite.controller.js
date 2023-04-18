const db = require("../models");
const BlogWrite = db.blogWrites;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.blog) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tutorial
  const blogWrite= {
    blog: req.body.blog,
    rollno: req.body.rollno,
    //published: req.body.published ? req.body.published : false,
  };

  // Save Tutorial in the database
  BlogWrite.create(blogWrite)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial.",
      });
    });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const {  blog, page = 1, limit = 10 } = req.query;
  const offset = (page - 1) * limit;
  var condition = blog ? { blog: { [Op.like]: `%${blog}%` } } : null;

  BlogWrite.findAndCountAll({ where: condition, limit, offset })
    .then((data) => {
      const totalPages = Math.ceil(data.count / limit);
      res.send({
        totalItems: data.count,
        totalPages,
        currentPage: page,
        blogs: data.rows,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving blogs.",
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  BlogWrite.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Tutorial with id=" + id,
      });
    });
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  BlogWrite.update(req.body, {
    where: { id: id },
})
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tutorial was updated successfully.",
        });
    } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`,
        });
    }
})
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Tutorial with rollno=" + id,
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  BlogWrite.destroy({
    where: { id: id },
})
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Tutorial was deleted successfully!",
        });
    } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`,
        });
    }
})
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Tutorial with id=" + id,
      });
    });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
    BlogWrite.destroy({
        where: {},
        truncate: false,
})
.then((nums) => {
    res.send({ message: `${nums} Tutorials were deleted successfully!` });
})
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials.",
        });
    });
};

// // Find all published Tutorials
// exports.findAllPublished = (req, res) => {
//   Tutorial.findAll({ where: { published: true } })
//     .then((data) => {
//       res.send(data);
//     })
//     .catch((err) => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving tutorials.",
//       });
//     });
// };
