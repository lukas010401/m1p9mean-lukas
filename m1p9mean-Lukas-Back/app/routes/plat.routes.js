module.exports = app => {
    const plats = require("../controllers/plat.controller.js");
    var router = require("express").Router();
    // Create a new Tutorial
    router.post("/", plats.create);
    // Retrieve all plats
    router.get("/", plats.findAll);
    // Retrieve all published plats
    // router.get("/published", plats.findAllPublished);
    // Retrieve a single Tutorial with id
    router.get("/:id", plats.findOne);
    // Update a Tutorial with id
    router.put("/:id", plats.update);
    // Delete a Tutorial with id
    router.delete("/:id", plats.delete);
    // Create a new Tutorial
    router.delete("/", plats.deleteAll);
    app.use('/api/plats', router);
  };