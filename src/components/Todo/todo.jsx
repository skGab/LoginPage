import "./todo.scss";
import add from "../../icons/add-icon.png";
import { Task } from "./Tasks/task";
import { useEffect, useState } from "react";
import api from "../../services/api";

function Todo() {
  // STATE VARIABLES
  const [todos, setTodos] = useState([]);
  const [popupActive, setPopupActive] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  const fetchTasks = async () => {
    await fetch("http://localhost:3001/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.error("Error: ", err));
  };

  //GET TODOS
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="todo__container">
      <div className="todo__wrapper">
        {/* HEADER */}
        <header className="todo__header">
          <h1 className="todo__header__title">Welcome to your Todo List</h1>
          <h2>Your tasks</h2>
        </header>
        {/* MAIN CONTENT */}
        <main className="todo__main">
          {todos.map((todo) => {
            return <Task todo={todo} key={todo._id} />;
          })}
        </main>
        {/* FOOTER */}
        <footer className="todo__footer">
          <button className="todo__footer__new">
            <img src={add} alt="Add Button" />
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Todo;
