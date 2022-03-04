// IMPORTAÇÕES
import "./form.scss";
import { Button } from "./Button/btn";
import { Social } from "./Rede/social";
import { useState } from "react";
import { formContext } from "../../Context/formContext";
import { colorContext } from "../../Context/colorContext";
import { Input } from "./Input/input";
import userSchema from "./Validation/userValidation";
import { Nav } from "./Navegacao/nav";
import { Submitted } from "../Submitted/submit";

const Formulario = () => {
  // VARIAVEIS DE ESTADO

  const [passwordError, setPasswordError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [displayButton, setDisplayButton] = useState(true);

  const [currentForm, setCurrentForm] = useState("Login");
  const [brownButton, setBrownButton] = useState(true);
  const [purpleButton, setPurpleButton] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TRATANDO DADOS DO FORMULARIO
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());

    // ENVIANDO DADOS PARA O BACK-END

    // Validando formulario
    try {
      const isValid = await userSchema.validate(formData);

      if (currentForm === "Sign up") {
        const request = await fetch("http://localhost:3001/", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            accept: "application/json",
          },
          body: JSON.stringify(formData),
        });

        setDisplayButton(false);

        const changeForm = () => {
          setCurrentForm("Login");
          setBrownButton(true);
          setPurpleButton(false);
          setDisplayButton(true);
        };

        setTimeout(changeForm, 3000);
      }

      console.log(isValid);

      setEmailError("");
      setPasswordError("");
    } catch (err) {
      if (err.message.includes("email") || err.message.includes("password")) {
        if (err.message.includes("email")) {
          setEmailError(err.message);
          setPasswordError("");
        }

        if (err.message.includes("password")) {
          setPasswordError(err.message);
          setEmailError("");
        }

        if (err.message.includes("email") && err.message.includes("password")) {
          setEmailError(err.message);
          setPasswordError(err.message);
        }
      }
    }
  };

  return (
    <colorContext.Provider
      value={{ brownButton, setBrownButton, purpleButton, setPurpleButton }}
    >
      <formContext.Provider
        value={{
          currentForm,
          setCurrentForm,
        }}
      >
        <div className="form__container">
          {/* Navegação do formulario */}

          <Nav />

          {/* HEADER */}

          <form onSubmit={handleSubmit}>
            <div className="form__header">
              <h1>{currentForm} to continue</h1>
            </div>

            {/* CONTEUDO PRINCIPAL */}

            <Input name="Email" type="text" placeholder="Email" />
            {emailError ? <span className="error">{emailError}</span> : ""}

            <Input name="Password" type="password" placeholder="Password" />
            {passwordError ? (
              <span className="error">{passwordError}</span>
            ) : (
              ""
            )}

            {/* FOOTER */}

            <div className="form__forgot">
              <div className="form__check">
                <input type="checkbox" />
                <label name="remember">Remember me</label>
              </div>
              <p>
                <a href="#">Forgot Passoword?</a>
              </p>
            </div>

            {/* COMPONENTES DO FOOTER */}

            {displayButton ? (
              <Button currentForm={currentForm} />
            ) : (
              <Submitted />
            )}

            {/* <Button title={"Cadastro"} /> */}

            <Social currentForm={currentForm} />
          </form>
        </div>
      </formContext.Provider>
    </colorContext.Provider>
  );
};

export default Formulario;
