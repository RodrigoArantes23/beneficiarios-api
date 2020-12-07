const mongoose = require("mongoose");
const config = require("../../../config");

const connect = () => {
  mongoose.connect(
    `mongodb://${config.db.username}:${config.db.password}@${config.db.host}/${config.db.database}?authSource=admin`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
  return mongoose;
};

module.exports.connect = connect;
