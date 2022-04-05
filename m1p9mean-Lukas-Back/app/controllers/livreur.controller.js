const db = require("../models");
const Livreur = db.livreurs;
// Create and Save a new Livreur
exports.create = (req, res) => {
   // Validate request
   if (!req.body.nom) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }
  // Create a Livreur
  const livreur = new Livreur({
    nom: req.body.nom,
    telephone: req.body.telephone
  });
  // Save Livreur in the database
  livreur
    .save(livreur)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the livreur."
      });
    });
};
// Retrieve all livreurs from the database.
exports.findAll = (req, res) => {
    const nom = req.query.nom;
    var condition = nom ? { nom: { $regex: new RegExp(nom), $options: "i" } } : {};
    Livreur.find(condition)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving livreurs."
        });
      });
};
// Find a single Livreur with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Livreur.findById(id)
      .then(data => {
        if (!data)
          res.status(404).send({ message: "Not found livreur with id " + id });
        else res.send(data);
      })
      .catch(err => {
        res
          .status(500)
          .send({ message: "Error retrieving livreur with id=" + id });
      });
};
// Update a Livreur by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
        return res.status(400).send({
          message: "Data to update can not be empty!"
        });
      }
      const id = req.params.id;
      Livreur.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
        .then(data => {
          if (!data) {
            res.status(404).send({
              message: `Cannot update Livreur with id=${id}. Maybe Livreur was not found!`
            });
          } else res.send({ message: "Livreur was updated successfully." });
        })
        .catch(err => {
          res.status(500).send({
            message: "Error updating Livreur with id=" + id
          });
        });
};
// Delete a Livreur with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Livreur.findByIdAndRemove(id)
      .then(data => {
        if (!data) {
          res.status(404).send({
            message: `Cannot delete Livreur with id=${id}. Maybe Livreur was not found!`
          });
        } else {
          res.send({
            message: "Livreur was deleted successfully!"
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Livreur with id=" + id
        });
      });
};
// Delete all Livreurs from the database.
exports.deleteAll = (req, res) => {
    Livreur.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Livreurs were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Livreurs."
      });
    });
};
// Find all published Livreurs
// exports.findAllPublished = (req, res) => {
  
// };