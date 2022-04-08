const mongoose = require("mongoose");
const Utilisateur = mongoose.model(
  "Utilisateur",
  new mongoose.Schema({
    nom: String,
    email: String,
    mdp: String,
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);
module.exports = Utilisateur;