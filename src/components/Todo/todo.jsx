import "./todo.scss";
import add from "../../icons/add-icon.png";
import { useEffect, useState } from "react";
import api from "../../services/api";
import trash from "../../icons/delete-icon.png";

function Todo() {
  // STATE VARIABLES
  const [todos, setTodos] = useState([]);

  const [popupActive, setPopupActive] = useState(false);
  const [newTodo, setNewTodo] = useState("");

  const fetchTasks = async () => {
    await api
      .get("/todos")
      .then((data) => setTodos(data.data))
      .catch((err) => console.error("Error: ", err));
  };

  //GET TODOS
  useEffect(() => {
    fetchTasks();
  }, []);

  // MARCAR OU DESATIVAR TAREFA
  const completeTodo = async (id) => {
    const data = await api.put("todos/complete/" + id).then((res) => res.data);

    setTodos(
      todos.map((todo) => {
        if (todo._id === data._id) {
          todo.complete = data.complete;
        }

        return todo;
      })
    );
  };

  // DELETAR TAREFA

  const deleteTodo = async (id) => {
    const data = await api.delete("todos/delete/" + id).then((res) => res.data);

    setTodos((todos) => todos.filter((todo) => todo._id !== data._id));
  };

  // CRIAR TAREFA
  const creatingTask = (e) => {
    setNewTodo(e.target.value);
  };

  const sendTask = async () => {
    try {
      const headers = {
        "Content-type": "application/json",
        accept: "application/json",
      };

      const body = {
        text: newTodo,
      };

      const data = await api.post("/todos/new", body, { headers });

      setTodos([...todos, data.data]);
      setPopupActive(false);
    } catch (error) {
      console.log(error);
    }
  };

  const createBlock = () => {
    return (
      <div className="todo__createBlock">
        <div className="todo__line"></div>

        <div className="teste">
          <input
            onChange={creatingTask}
            type="newTask"
            name="newTask"
            placeholder="New Task"
          />
          <button onClick={sendTask}></button>
        </div>
      </div>
    );
  };

  return (
    <div className="todo__container">
      {/* CREATE */}

      {popupActive && createBlock()}
      <div className="todo__wrapper">
        {/* HEADER */}
        <header className="todo__header">
          <h1 className="todo__header__title">Welcome to your Todo List</h1>
          <h2>Your tasks</h2>
        </header>
        {/* MAIN CONTENT */}
        <main className="todo__main">
          {todos.map((todo) => (
            <div className="todo__main__filds" key={todo._id}>
              <div
                className="todo__main__fild"
                onClick={() => completeTodo(todo._id)}
              >
                {/* CHECKBOX */}
                <div
                  className={`todo__main__checkbox ${
                    todo.complete && "todo__main__checkbox--active"
                  }`}
                ></div>

                {/* TEXTO */}
                <div
                  className={`todo__main__text ${
                    todo.complete && "todo__main__text--active"
                  }`}
                >
                  {todo.text}
                </div>
              </div>

              {/* ICONE DELETAR */}
              <div
                className="todo__main__delete"
                onClick={() => deleteTodo(todo._id)}
              >
                <img src={trash} alt="Icone deletar tarefa" />
              </div>
            </div>
          ))}
        </main>

        {/* FOOTER */}
        <footer className="todo__footer">
          <button
            className="todo__footer__new"
            onClick={() => setPopupActive(true)}
          >
            <img src={add} alt="Add Button" />
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Todo;
