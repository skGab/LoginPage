import { useContext } from "react";
import { colorContext } from "../../../Context/colorContext";
import { formContext } from "../../../Context/formContext";

export function Nav({ props }) {
  // STATE VARIABLES
  const { setCurrentForm } = useContext(formContext);
  const { brownButton, setBrownButton, purpleButton, setPurpleButton } =
    useContext(colorContext);

  const { setPasswordError, setEmailError } = props;

  // CHANGE FORMS
  const loginForm = () => {
    setCurrentForm("Login");
    setBrownButton(true);
    setPurpleButton(false);
    setPasswordError(null);
    setEmailError(null);
  };

  const signForm = () => {
    setCurrentForm("Sign up");
    setBrownButton(false);
    setPurpleButton(true);
    setPasswordError(null);
    setEmailError(null);
  };

  return (
    <nav className="form__nav">
      {/* LOGIN BUTTON */}
      <button
        onClick={loginForm}
        className={`form__nav--hoverBrown ${
          brownButton ? "brownSelected" : ""
        }`}
      >
        Login
      </button>
      {/* SIGN UP BUTTON */}
      <button
        onClick={signForm}
        className={`form__nav--hoverPurple ${
          purpleButton ? "purpleSelected" : ""
        }`}
      >
        Sign Up
      </button>
    </nav>
  );
}
