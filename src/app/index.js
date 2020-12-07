const config = require("../../config");
const restifyServer = require("./../infra/server/restify-server");

let server = {};
if (config.web.server === "restify") {
  server = new restifyServer();
}

module.exports.start = () => {
  server.start();
};
