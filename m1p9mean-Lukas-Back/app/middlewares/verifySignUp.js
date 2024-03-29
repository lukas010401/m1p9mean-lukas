const db = require("../models");
const ROLES = db.ROLES;
const Utilisateur = db.utilisateur;
checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  Utilisateur.findOne({
    nom: req.body.nom
  }).exec((err, utilisateur) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    if (utilisateur) {
      res.status(400).send({ message: "Failed! Username is already in use!" });
      return;
    }
    // Email
    Utilisateur.findOne({
      email: req.body.email
    }).exec((err, utilisateur) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      if (utilisateur) {
        res.status(400).send({ message: "Failed! Email is already in use!" });
        return;
      }
      next();
    });
  });
};
checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: `Failed! Role ${req.body.roles[i]} does not exist!`
        });
        return;
      }
    }
  }
  next();
};
const verifySignUp = {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted
};
module.exports = verifySignUp;