const truncate = require("../support/truncate");
const database = require("../../src/infra/database");

const { createBeneficiario } = require("../../src/use-cases");

const mock = require("../mocks/beneficiario-mock");

describe("UNIT :: CREATE-ANUNCIO", () => {
  beforeAll(async () => {
    database.connect();
  });
  afterAll(async () => {
    await truncate("beneficiarios");
  });

  it("Garante que o beneficiario está sendo criado com sucesso", async () => {
    const result = await createBeneficiario(mock);

    expect(result._id).toBeTruthy();
    expect(result.nome).toBe(mock.nome);
    expect(result.cpf).toBe(mock.cpf);
    expect(result.rg).toBe(mock.rg);
    expect(Date.parse(result.dataNascimento)).toBe(
      Date.parse(mock.dataNascimento)
    );
    expect(result.plano).toBe(mock.plano);
    expect(result.dependentes).toBe(mock.dependentes);
  });
});
