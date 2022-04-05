const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.plats = require("./plat.model.js")(mongoose);
db.livreurs = require("./livreur.model.js")(mongoose);
db.restaurants = require("./restaurant.model.js")(mongoose);
module.exports = db;