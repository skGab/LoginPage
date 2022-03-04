const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://127.0.0.1:27017/todo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch(console.error);

const Todo = require("./models/Todo");

app.get("/todos", async (req, res) => {
  const todos = await Todo.find();

  res.json(todos);
});

app.post("/", async (req, res) => {
  const data = req.body;

  res.json(data);
});

app.listen(3001, () => console.log("Server started on port 3001"));

// const products = [];

// app.post("/", (request, response) => {
//   const { Name, Password } = request.body;

//   const product = {
//     Name,
//     Password,
//   };

//   products.push(product);

//   return response.json(product.Name);
// });

// app.listen(3001, () => console.log("Servidor esta rodando na porta 3001"));
