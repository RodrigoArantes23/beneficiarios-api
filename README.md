# Beneficiarios API

Beneficiarios CRUD API

## How to run

The simplest way to run is through the docker-compose

```bash
docker-compose up
```

## Usage

POST

http://localhost:8080/beneficiarios

```json
{
  "nome": "Carlos",
  "rg": "14.514.672-8",
  "cpf": "206.374.130-16",
  "dataNascimento": "2002-10-01",
  "plano": "Basic",
  "dependentes": 1
}
```

GET

```
http://localhost:8080/beneficiarios
http://localhost:8080/beneficiarios/:cpf
```

PUT

http://localhost:8080/beneficiarios

```json
{
  "_id": ">BeneficiarioID HERE<",
  "nome": "Carlos",
  "rg": "14.514.672-8",
  "cpf": "206.374.130-16",
  "dataNascimento": "2002-10-01",
  "plano": "Premium",
  "dependentes": 2
}
```

DELETE

```
http://localhost:8080/beneficiarios/:id
```

## Test

Before running the tests, make sure the database is up (look in the docker-compose file).

```
npm run test
```
