const { authJwt } = require("../middlewares");
const controller = require("../controllers/utilisateur.controller");
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/test/all", controller.allAccess);
  app.get("/api/test/client", [authJwt.verifyToken], controller.clientBoard);
  app.get(
    "/api/test/restaurant",
    [authJwt.verifyToken, authJwt.isRestaurant],
    controller.restaurantBoard
  );
  app.get(
    "/api/test/livreur",
    [authJwt.verifyToken, authJwt.isLivreur],
    controller.livreurBoard
  );
  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};