// const { PrismaClient } = require("@prisma/client");
// const prisma = new PrismaClient();

const express = require("express");
const app = express();

// Tratando requisições

app.use(express.json());

const products = [];

app.post("/", (request, response) => {
  const { Name, Password } = request.body;

  const product = {
    Name,
    Password,
  };

  products.push(product);

  return response.json(product.Name);
});

app.listen(3001, () => console.log("Servidor esta rodando na porta 3001"));
