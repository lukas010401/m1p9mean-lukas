const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const Utilisateur = db.utilisateur;
const Role = db.role;
verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }
  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.userId = decoded.id;
    next();
  });
};
isAdmin = (req, res, next) => {
    Utilisateur.findById(req.userId).exec((err, utilisateur) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    Role.find(
      {
        _id: { $in: utilisateur.roles }
      },
      (err, roles) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        for (let i = 0; i < roles.length; i++) {
          if (roles[i].nom === "admin") {
            next();
            return;
          }
        }
        res.status(403).send({ message: "Require Admin Role!" });
        return;
      }
    );
  });
};
isRestaurant = (req, res, next) => {
    Utilisateur.findById(req.userId).exec((err, utilisateur) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    Role.find(
      {
        _id: { $in: utilisateur.roles }
      },
      (err, roles) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        for (let i = 0; i < roles.length; i++) {
          if (roles[i].nom === "restaurant") {
            next();
            return;
          }
        }
        res.status(403).send({ message: "Require Restaurant Role!" });
        return;
      }
    );
  });
};

isLivreur = (req, res, next) => {
    Utilisateur.findById(req.userId).exec((err, utilisateur) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }
      Role.find(
        {
          _id: { $in: utilisateur.roles }
        },
        (err, roles) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          for (let i = 0; i < roles.length; i++) {
            if (roles[i].nom === "livreur") {
              next();
              return;
            }
          }
          res.status(403).send({ message: "Require Livreur Role!" });
          return;
        }
      );
    });
  };
const authJwt = {
  verifyToken,
  isAdmin,
  isRestaurant,
  isLivreur
};
module.exports = authJwt;