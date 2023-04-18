const db = require("../models");
const CommBlog = db.commBlogs;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.comment) {
    res.status(400).send({
      message: "Content can not be empty!",
    });
    return;
  }

  // Create a Tutorial
  const commBlogs= {
    comment: req.body.comment,
    rollno: req.body.rollno,
    //published: req.body.published ? req.body.published : false,
  };

  // Save Tutorial in the database
  CommBlog.create(commBlogs)
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
  const { page = 1, pageSize = 10, comment } = req.query;

  const condition = comment ? { comment: { [Op.like]: `%${comment}%` } } : null;
  const limit = Number(pageSize);
  const offset = (Number(page) - 1) * limit;

  CommBlog.findAndCountAll({
    where: condition,
    limit,
    offset,
  })
    .then((data) => {
      const totalPages = Math.ceil(data.count / limit);

      res.send({
        data: data.rows,
        totalItems: data.count,
        totalPages,
        currentPage: Number(page),
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  CommBlog.findByPk(id)
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

  CommBlog.update(req.body, {
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

  CommBlog.destroy({
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
    CommBlog.destroy({
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
