const repository = require("../infra/database/repositories/beneficiario-repository");
module.exports = async (beneficiario) => {
  const result = await repository.insert(beneficiario);
  return result.toObject();
};
