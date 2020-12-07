const repository = require("../infra/database/repositories/beneficiario-repository");
module.exports = async (id) => {
  const result = await repository.remove(id);
  if (!result) {
    throw new Error("beneficiario not found");
  }
};
