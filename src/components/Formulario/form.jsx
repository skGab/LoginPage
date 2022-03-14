// IMPORTAÇÕES
import "./form.scss";
import { Button } from "./Button/btn";
import { Social } from "./Rede/social";
import { useState, useContext, useEffect } from "react";
import { formContext } from "../../Context/formContext";
import { colorContext } from "../../Context/colorContext";
import { Input } from "./Input/input";
import userSchema from "./Validation/userValidation";
import { Nav } from "./Navegacao/nav";
import { Submitted } from "./Submitted/submit";
import api from "../../services/api";

const Formulario = () => {
  // STATE PARA TRATAR ERRORS
  const [passwordError, setPasswordError] = useState(null);
  const [emailError, setEmailError] = useState(null);

  // STATE PARA DESABILITAR BOTÃO DE CADASTRO
  const [displayButton, setDisplayButton] = useState(true);

  // STATE PARA TROCAR CORES E FUNÇÃO DO FORMULARIO
  const { setBrownButton, setPurpleButton } = useContext(colorContext);
  const { currentForm, setCurrentForm, setDisplayTodo } =
    useContext(formContext);

  // STATE PARA ARMAZENAR USUARIOS JÁ CADASTRADOS
  const [userInfo, setUserInfo] = useState([]);

  let userAuthentication = false;

  // BUSCANDO DADOS DE USUARIOS

  const getUsers = async () => {
    await api.get("/users").then((data) => setUserInfo(data.data));
  };

  useEffect(() => {
    getUsers();
  }, [currentForm]);

  // TRATANDO FORMULARIO
  const handleSubmit = async (e) => {
    e.preventDefault();

    // ARMAZENANDO DADOS DOS INPUTS
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());

    // ENVIANDO DADOS PARA O BACK-END
    try {
      // Validando formulario
      const isValid = await userSchema.validate(formData);

      // CADASTRAR USUARIO
      if (currentForm === "Sign up") {
        userAuthentication = false;

        // BUSCANDO USUARIOS JÁ CADASTADOS
        for (let i = 0; i < userInfo.length; i++) {
          if (isValid.email === userInfo[i].email) {
            userAuthentication = true;
            break;
          }
        }

        if (userAuthentication == true) {
          setEmailError("E-mail is already being used");
        } else {
          console.log("Chegou no else");
          // ENVIANDO DADOS PARA O BACK-END
          const headers = {
            "Content-type": "application/json",
            accept: "application/json",
          };

          const body = JSON.stringify(isValid);

          api.post("/users/new", body, { headers });

          // DESABILITANDO BOTÃO E APGANDO MENSAGENS DE ERRO
          setDisplayButton(false);
          setEmailError(null);
          setPasswordError(null);

          // Troca de formulario
          const changeForm = () => {
            setCurrentForm("Login");
            setBrownButton(true);
            setPurpleButton(false);
            setDisplayButton(true);
          };

          setTimeout(changeForm, 3000);

          console.log("Info stored");
        }
      }

      // LOGAR USUARIO
      if (currentForm === "Login") {
        userAuthentication = false;

        for (let i = 0; i < userInfo.length; i++) {
          if (
            userInfo[i].email === isValid.email &&
            userInfo[i].password === isValid.password
          ) {
            userAuthentication = true;
            break;
          }
        }

        // AUTENTICAÇÃO USUARIO
        if (userAuthentication) {
          // TROCANDO PARA TODO LIST
          setDisplayTodo(true);

          // APAGANDO MENSAGENS DE ERRO
          setEmailError(null);
          setPasswordError(null);
        } else {
          setEmailError("Invalid email or password");
          setPasswordError("Invalid email or password");
        }
      }

      // VALIDANDO ERRORS
    } catch (err) {
      console.log("caiu no catch");
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
        {emailError && <span className="error">{emailError}</span>}

        <Input name="password" type="password" placeholder="Password" />
        {passwordError && <span className="error">{passwordError}</span>}

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
