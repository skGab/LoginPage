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

// Manipulando banco de dados
// async function main() {
//   await prisma.user.create({
//     data: {
//       name: "",
//       email: "",
//     },
//   });

//   // const newUser = await prisma.post.update({
//   //   where: { id: 1 },
//   //   data: { published: true },
//   // });

//   // const allUsers = await prisma.user.findMany({
//   //   include: {
//   //     posts: true,
//   //     profile: true,
//   //   },
//   // });

//   // console.log(newUser);
// }

// main()
//   .catch((e) => {
//     throw e;
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

app.listen(3001, () => console.log("Servidor esta rodando na porta 3001"));
