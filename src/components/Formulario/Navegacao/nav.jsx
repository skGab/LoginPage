import { useContext, useState } from "react";
import { colorContext } from "../../../Context/colorContext";
// import { colorContext } from '../../../Context/colorContext';
import { formContext } from "../../../Context/formContext";

export function Nav({ props }) {
  const { setCurrentForm } = useContext(formContext);
  const { brownButton, setBrownButton, purpleButton, setPurpleButton } =
    useContext(colorContext);

  const { setPasswordError, setEmailError } = props;

  return (
    <nav className="form__nav">
      <button
        onClick={() => {
          setCurrentForm("Login");
          setBrownButton(true);
          setPurpleButton(false);
          setPasswordError(null);
          setEmailError(null);
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
          setPasswordError(null);
          setEmailError(null);
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
