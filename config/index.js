require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

const database = require("./database");

module.exports = {
  web: {
    port: process.env.PORT,
    server: process.env.SERVER,
  },
  env: process.env.NODE_ENV || "development",
  db: database,
};
