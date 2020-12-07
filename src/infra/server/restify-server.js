const restify = require("restify");
const database = require("../../infra/database");
const config = require("../../../config");
const router = require("../../interfaces/router");

class Server {
  constructor() {
    this.restify = restify.createServer();
    this.database = database;
    this.router = router;
  }

  loadRoutes() {
    this.router(this.restify);
  }

  applyPlugins() {
    this.restify.use(restify.plugins.bodyParser());
  }

  start() {
    this.applyPlugins();
    this.loadRoutes();
    this.database.connect();
    this.restify.listen(config.web.port, function () {
      console.log("Server is up");
    });
  }
}

module.exports = Server;
