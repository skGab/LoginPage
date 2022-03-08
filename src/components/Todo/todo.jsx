import "./todo.scss";
import add from "../../icons/add-icon.png";
import { Task } from "./Tasks/task";

function Todo() {
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
          <Task />
        </main>
        {/* FOOTER */}
        <footer className="todo__footer">
          <button className="todo__footer__new">
            <img src={add} alt="" />
          </button>
        </footer>
      </div>
    </div>
  );
}

export default Todo;
