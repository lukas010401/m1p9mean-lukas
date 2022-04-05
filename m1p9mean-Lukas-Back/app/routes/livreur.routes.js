module.exports = app => {
    const livreurs = require("../controllers/livreur.controller.js");
    var router = require("express").Router();
    // Create a new livreur
    router.post("/", livreurs.create);
    // Retrieve all livreurs
    router.get("/", livreurs.findAll);
    // Retrieve all published livreurs
    // router.get("/published", livreurs.findAllPublished);
    // Retrieve a single livreur with id
    router.get("/:id", livreurs.findOne);
    // Update a livreur with id
    router.put("/:id", livreurs.update);
    // Delete a livreur with id
    router.delete("/:id", livreurs.delete);
    // Create a new livreur
    router.delete("/", livreurs.deleteAll);
    app.use('/api/livreurs', router);
  };