import { useContext, useState } from "react";
import { colorContext } from "../../../Context/colorContext";
// import { colorContext } from '../../../Context/colorContext';
import { formContext } from "../../../Context/formContext";

export function Nav() {
  const { setCurrentForm } = useContext(formContext);
  const { brownButton, setBrownButton, purpleButton, setPurpleButton } =
    useContext(colorContext);

  return (
    <nav className="form__nav">
      <button
        onClick={() => {
          setCurrentForm("Login");
          setBrownButton(true);
          setPurpleButton(false);
        }}
        className={`form__nav--hoverBrown ${
          brownButton ? "brownSelected" : ""
        }`}
      >
        Login
      </button>
      <button
        onClick={() => {
          setCurrentForm("Sign up");
          setBrownButton(false);
          setPurpleButton(true);
        }}
        className={`form__nav--hoverPurple ${
          purpleButton ? "purpleSelected" : ""
        }`}
      >
        Sign Up
      </button>
    </nav>
  );
}