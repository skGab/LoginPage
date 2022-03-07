const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

// DB CONNECTION

mongoose
  .connect(
    "mongodb+srv://dbADM:123@loginpage.8qpuj.mongodb.net/Todo?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to DB"))
  .catch(console.error);

const { Todo, User } = require("./models/Todo");

// GET METHOD

app.get("/todos", async (req, res) => {
  const todos = await Todo.find();

  res.json(todos);
});

app.get("/users", async (req, res) => {
  const users = await User.find();

  res.json(users);
});

// POST METHOD

app.post("/newuser", async (req, res) => {
  const newUser = await new User(req.body);

  newUser.save();

  return res.json(newUser);
});

app.post("/todo", async (req, res) => {
  const task = await new Todo(req.body);

  task.save();

  return res.json(task);
});

// DELETE METHOD

// app.delete("/delete", async (req, res) => {
//   Todo.findByIdAndRemove(req.params.todoId, (err, todo) => {
//     if (err) return res.status(500).send(err);

//     const response = {
//       message: "Colletions deleted",
//       id: todo._id,
//     };

//     return res.status(200).send(response);
//   });
// });

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
