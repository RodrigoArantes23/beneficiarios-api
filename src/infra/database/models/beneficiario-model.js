const mongoose = require("mongoose");

const BeneficiarioSchema = new mongoose.Schema({
  nome: { type: String, required: true, trim: true, max: 30 },
  cpf: {
    type: String,
    required: true,
    unique: true,
    minlength: 14,
    maxlength: 14,
  },
  rg: {
    type: String,
    required: true,
    unique: true,
    minlength: 12,
    maxlength: 12,
  },
  dataNascimento: { type: Date, required: true },
  plano: {
    type: String,
    required: true,
    enum: ["Basic", "Standard", "Premium"],
  },
  dependentes: {
    type: Number,
  },
});

module.exports = mongoose.model("Beneficiario", BeneficiarioSchema);
