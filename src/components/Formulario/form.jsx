// IMPORTAÇÕES
import "./form.scss";
import { Button } from "./Button/btn";
import { Social } from "./Rede/social";
import { useState, useContext } from "react";
import { formContext } from "../../Context/formContext";
import { colorContext } from "../../Context/colorContext";
import { Input } from "./Input/input";
import userSchema from "./Validation/userValidation";
import { Nav } from "./Navegacao/nav";
import { Submitted } from "./Submitted/submit";
import api from "../../services/api";

const Formulario = () => {
  // VARIAVEIS DE ESTADO
  const [passwordError, setPasswordError] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [displayButton, setDisplayButton] = useState(true);
  const [userAuthentication, setUserAuthentication] = useState("");

  const { setBrownButton, setPurpleButton } = useContext(colorContext);
  const { currentForm, setCurrentForm, setDisplayTodo } =
    useContext(formContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // TRATANDO DADOS DO FORMULARIO
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());

    // ENVIANDO DADOS PARA O BACK-END
    try {
      // Validando formulario
      const isValid = await userSchema.validate(formData);

      // CADASTRAR USUARIO
      if (currentForm === "Sign up") {
        const request = await fetch("http://localhost:3001/users/new", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            accept: "application/json",
          },
          body: JSON.stringify(formData),
        });

        // Troca de formulario
        setDisplayButton(false);

        const changeForm = () => {
          setCurrentForm("Login");
          setBrownButton(true);
          setPurpleButton(false);
          setDisplayButton(true);
        };

        setTimeout(changeForm, 3000);

        console.log("Info stored");
      }

      // LOGAR USUARIO
      if (currentForm === "Login") {
        setUserAuthentication("");
        await api
          .get("/users")
          .then((res) => {
            const user = res.data;
            //VALIDAÇÃO DE USUARIO
            for (let i = 0; i <= user.length; i++) {
              if (
                user[i].email === formData.email &&
                user[i].password === formData.password
              ) {
                setUserAuthentication(true);
                break;
              } else {
                setUserAuthentication(false);
              }
            }
          })
          .catch((err) => {
            console.log(err);
          });
        // AUTENTICAÇÃO USUARIO
        if (userAuthentication == true) {
          setDisplayTodo(true);

          console.log("Logado");
          console.log(userAuthentication);

          setEmailError(null);
          setPasswordError(null);
        } else {
          console.log(userAuthentication);

          setEmailError("Invalid email or password");
          setPasswordError("Invalid email or password");
        }
      }

      // VALIDANDO ERRORS
    } catch (err) {
      if (err.message.includes("email") || err.message.includes("password")) {
        if (err.message.includes("email")) {
          setEmailError(err.message);
          setPasswordError(null);
        }

        if (err.message.includes("password")) {
          setPasswordError(err.message);
          setEmailError(null);
        }

        if (err.message.includes("email") && err.message.includes("password")) {
          setEmailError(err.message);
          setPasswordError(err.message);
        }
      }
    }
  };

  return (
    <div className="form__container">
      {/* Navegação do formulario */}
      <Nav props={{ setPasswordError, setEmailError }} />

      {/* HEADER */}
      <form onSubmit={handleSubmit}>
        <div className="form__header">
          <h1>{currentForm} to continue</h1>
        </div>

        {/* CONTEUDO PRINCIPAL */}
        <Input name="email" type="text" placeholder="Email" />
        {emailError ? <span className="error">{emailError}</span> : ""}

        <Input name="password" type="password" placeholder="Password" />
        {passwordError ? <span className="error">{passwordError}</span> : ""}

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
        {displayButton ? <Button currentForm={currentForm} /> : <Submitted />}

        {/* <Button title={"Cadastro"} /> */}
        <Social currentForm={currentForm} />
      </form>
    </div>
  );
};

export default Formulario;
