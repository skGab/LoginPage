import "./btn.scss";

export function Button({ currentForm }) {
  return (
    <div className="button__container">
      <button type="submit" className="button__container--style">
        {currentForm}
      </button>
    </div>
  );
}
