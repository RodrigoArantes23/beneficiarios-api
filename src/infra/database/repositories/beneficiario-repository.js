const BeneficiarioModel = require("../models/beneficiario-model");

const insert = async (beneficiario) => {
  const result = new BeneficiarioModel(beneficiario);
  return await result.save();
};

const remove = async (id) => {
  return await BeneficiarioModel.findByIdAndDelete(id);
};

const update = async (beneficiario) => {
  const { _id } = beneficiario;
  return await BeneficiarioModel.update(
    { _id },
    { $set: { ...beneficiario } },
    { runValidators: true }
  );
};

const get = async (cpf) => {
  const query = {};
  if (cpf) {
    query.cpf = cpf;
  }

  const result = await BeneficiarioModel.find(query);
  return result;
};

module.exports = { insert, get, update, remove };
