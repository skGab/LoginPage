import { useState } from "react";
import trash from "../../../icons/delete-icon.png";

export function Task({ todo }) {
  const [active, setActive] = useState(true);

  return (
    <div className="todo__main__filds">
      <div className="todo__main__fild" key={todo._id}>
        <div
          className={`todo__main__checkbox ${
            active ? "todo__main__checkbox--active" : ""
          }`}
        ></div>

        <div
          className={`todo__main__text ${
            active ? "todo__main__text--active" : ""
          }`}
        >
          {todo.text}
        </div>
      </div>

      <div className="todo__main__delete">
        <img src={trash} alt="" />
      </div>
    </div>
  );
}
