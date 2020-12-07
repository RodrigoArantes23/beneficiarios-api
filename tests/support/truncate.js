const mongoose = require("../../src/infra/database");

module.exports = async (collection) => {
  const database = mongoose.connect();
  await database.connection.db.dropCollection(collection);
  database.connection.close();
};
