import "./btn.scss";

export function Button(props) {
  return (
    <div className="button__container">
      <button type="submit" className="button__container--style">
        {props.title}
      </button>
    </div>
  );
}
