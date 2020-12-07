const Router = require("restify-router").Router;
const beneficiarioController = require("./controllers/beneficiarios-controller");

module.exports = (server) => {
  var router = new Router();

  router.get("/beneficiarios", beneficiarioController.get);
  router.get("/beneficiarios/:cpf", beneficiarioController.get);
  router.post("/beneficiarios", beneficiarioController.create);
  router.put("/beneficiarios", beneficiarioController.update);
  router.del("/beneficiarios/:id", beneficiarioController.remove);

  router.applyRoutes(server);
};
