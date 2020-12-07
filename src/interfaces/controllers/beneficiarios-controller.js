const errors = require("restify-errors");
const {
  getBeneficiario,
  createBeneficiario,
  updateBeneficiario,
  deleteBeneficiario,
} = require("../../use-cases");

const get = async (req, res, next) => {
  try {
    const result = await getBeneficiario(req.params.cpf);
    res.send(result);
    next();
  } catch (err) {
    return next(new errors.InternalError(err.message));
  }
};

const create = async (req, res, next) => {
  try {
    const { id } = await createBeneficiario(req.body);
    res.send(201, { id });
    next();
  } catch (err) {
    return next(new errors.InternalError(err.message));
  }
};

const update = async (req, res, next) => {
  try {
    await updateBeneficiario(req.body);
    res.send(204);
    next();
  } catch (err) {
    return next(new errors.InternalError(err.message));
  }
};

const remove = async (req, res, next) => {
  try {
    await deleteBeneficiario(req.params.id);
    res.send(204);
    next();
  } catch (err) {
    return next(new errors.InternalError(err.message));
  }
};

module.exports = {
  get,
  create,
  update,
  remove,
};
