const db = require("../models");
const Dish = db.dish;
const Op = db.Sequelize.Op;

// Create and Save a new Dish
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
  }

  // Create a Dish
  const dish = {
    name: req.body.name,
    restaurantId: req.body.restaurantId,
    filename: req.file ? req.file.filename : ""
  }

  console.log(dish);

  // Save Dish in the database
  Dish.create(dish).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the dish"
    })
  });
};

// Retrieve all Dishs from the database.
exports.findAll = (req, res) => {
  Dish.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving all Dishs"
    })
  })
};

// Find a single Dish with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  console.log(id)

  Dish.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Dish with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Dish with id=" + id
      });
    });
};


// Update

exports.update = (req, res) => {

  const id = req.params.id;
  var image = '';
  if (!req.body.name) {
    res.status(400).send({
      message: "Content cannot be empty!"
    });
  }

  // Create a Dish
  const dish = {
    name: req.body.name,
    restaurantId: req.body.restaurantId,
    filename: req.file ? req.file.filename : ""
  }
  if (dish.filename == "") {
    Dish.findByPk(id)
      .then(data => {
        if (data) {
          image = data;
          dish.filename = image.filename;
          Dish.update(dish, {
            where: { id: id }
          })
            .then(num => {
              if (num == 1) {
                res.send({
                  message: "Dish was updated successfully."
                });
              } else {
                res.send({
                  message: `Cannot update Dish with id=${id}. Maybe Dish was not found!`
                });
              }
            })
            .catch(err => {
              res.status(500).send({
                message: "Error updating Dish with id=" + id
              });
            });
        } else {
          res.status(404).send({
            message: `Cannot find Dish with id=${id}.`
          });
        }
      })
  } else {
    Dish.update(dish, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Dish was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Dish with id=${id}. Maybe Dish was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Dish with id=" + id
        });
      });
  }


};


exports.findAllByRestaurantId = (req, res) => {
  const id = req.params.id;
  console.log(req.params.id)

  Dish.findAll({ where: { restaurantId: id } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving dishes."
      });
    });
};

// Delete


exports.delete = (req, res) => {
  const id = req.params.id;

  Dish.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Dish was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete Dish with id=${id}. Maybe Dish was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Dish with id=" + id
      });
    });
};