import "./todo.scss";
import trash from "../../icons/delete-icon.png";
import add from "../../icons/add-icon.png";

function Todo() {
  return (
    <div className="todo__container">
      <div className="todo__wrraper">
        <header className="todo__header">
          <h1 className="todo__header__title">Welcome to your Todo List</h1>
          <h2>Your tasks</h2>
        </header>

        <main className="todo__main">
          <div className="teste">
            <div className="todo__main__filds">
              <input
                id="01"
                className="todo__main__checkbox"
                type="checkbox"
                name="r"
                value="1"
              />
              <label for="01">Levar lixo para fora</label>
            </div>

            <div className="todo__main__delete">
              <img src={trash} alt="" />
            </div>
          </div>
          <div className="teste">
            <div className="todo__main__filds">
              <input
                id="01"
                className="todo__main__checkbox"
                type="checkbox"
                name="r"
                value="1"
              />
              <label for="01">Levar lixo para fora</label>
            </div>

            <div className="todo__main__delete">
              <img src={trash} alt="" />
            </div>
          </div>
        </main>

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
