const repository = require("../infra/database/repositories/beneficiario-repository");
module.exports = async (beneficiario) => {
  const result = await repository.update(beneficiario);

  if (result.n === 0 && result.nModified === 0)
    throw new Error("beneficiario not found");

  if (result.n !== result.nModified) throw new Error("no changes found");

  if (!result) {
    throw new Error("beneficiario not found");
  }
  return result;
};
