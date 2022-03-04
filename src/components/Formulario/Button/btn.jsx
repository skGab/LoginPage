import "./btn.scss";
import { useContext, useState, useEffect } from "react";
import { colorContext } from "../../../Context/colorContext";

export function Button({ currentForm }) {
  const { brownButton, purpleButton } = useContext(colorContext);

  const [colorState, setColorState] = useState("");

  useEffect(() => {
    const selectColor = () => {
      if (brownButton == true) {
        setColorState(true);
      } else {
        setColorState(false);
      }
    };

    selectColor();
  }, [brownButton, purpleButton]);

  return (
    <div className="button__container">
      <button
        type="submit"
        className={`button__container--style ${
          colorState ? "brownSelected" : "purpleSelected"
        }`}
      >
        {currentForm}
      </button>
    </div>
  );
}
