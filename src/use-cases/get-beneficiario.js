const repository = require("../infra/database/repositories/beneficiario-repository");
module.exports = async (cpf) => {
  const result = await repository.get(cpf);
  return result.map((o) => o.toObject());
};
