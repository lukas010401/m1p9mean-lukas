const express = require("express");
const cors = require("cors");
const app = express();
var corsOptions = {
  origin: "https://m1p9mean-lukas-front.herokuapp.com"
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hello world !" });
});
const db = require("./app/models");
const Role = db.role;
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
    // initial();
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
  require("./app/routes/plat.routes")(app);
  require("./app/routes/livreur.routes")(app);
  require("./app/routes/restaurant.routes")(app);

  function initial() {
    Role.estimatedDocumentCount((err, count) => {
      if (!err && count === 0) {
        new Role({
          nom: "client"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
          console.log("added 'client' to roles collection");
        });
        new Role({
          nom: "restaurant"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
          console.log("added 'restaurant' to roles collection");
        });
        new Role({
          nom: "livreur"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
          console.log("added 'livreur' to roles collection");
        });
        new Role({
          nom: "admin"
        }).save(err => {
          if (err) {
            console.log("error", err);
          }
          console.log("added 'admin' to roles collection");
        });
      }
    });
  }

  // routes
require('./app/routes/auth.routes')(app);
require('./app/routes/utilisateur.routes')(app);
  // set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
