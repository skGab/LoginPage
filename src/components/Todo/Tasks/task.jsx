import trash from "../../../icons/delete-icon.png";

export function Task() {
  return (
    <div className="todo__main__wrapper">
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
  );
}
