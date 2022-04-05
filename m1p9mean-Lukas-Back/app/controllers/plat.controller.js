const db = require("../models");
const Plat = db.plats;
// Create and Save a new Plat
exports.create = (req, res) => {
   // Validate request
   if (!req.body.nom) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  // Create a Plat
  const plat = new Plat({
    nom: req.body.nom,
    description: req.body.description,
    prix: req.body.prix,
    image_url: req.body.image_url
  });
  // Save Plat in the database
  plat
    .save(plat)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Plat."
      });
    });
};
// Retrieve all Plats from the database.
exports.findAll = (req, res) => {
    const nom = req.query.nom;
    var condition = nom ? { nom: { $regex: new RegExp(nom), $options: "i" } } : {};
    Plat.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving plats."
        });
      });
};
// Find a single Plat with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Plat.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found plat with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving plat with id=" + id });
      });
};
// Update a Plat by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
      const id = req.params.id;
      Plat.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update Plat with id=${id}. Maybe Plat was not found!`
            });
          } else res.send({ message: "Plat was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Plat with id=" + id
          });
        });
};
// Delete a Plat with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Plat.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Plat with id=${id}. Maybe Plat was not found!`
          });
        } else {
          res.send({
            message: "Plat was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Plat with id=" + id
        });
      });
};
// Delete all Plats from the database.
exports.deleteAll = (req, res) => {
    Plat.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Plats were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Plats."
      });
    });
};
// Find all published Plats
// exports.findAllPublished = (req, res) => {
  
// };