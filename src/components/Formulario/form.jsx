// IMPORTAÇÕES
import { Button } from "../Button/btn";
import { Social } from "../Rede/social";
import "./form.scss";
import react, { useState } from "react";

const Formulario = () => {
  // VARIAVEIS DE ESTADO
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [currentForm, setCurrentForm] = useState("Login");

  // TRATANDO FORMULARIO
  const handleSubmit = async (e) => {
    e.preventDefault();
    // TRATANDO DADOS DO FORMULARIO
    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());
    // ENVIANDO DADOS PARA O BACK-END
    const request = await fetch("http://localhost:3001/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify(formData),
    });
  };

  return (
    <div className="form__container">
      {/* Navegação do formulario */}
      <nav className="form__nav">
        <button
          onClick={() => setCurrentForm("Login")}
          className="form__nav--hoverGreen"
        >
          Login
        </button>
        <button
          onClick={() => setCurrentForm("Sing up")}
          className="form__nav--hoverRoxo"
        >
          Sing Up
        </button>
      </nav>
      {/* HEADER */}
      <form onSubmit={handleSubmit}>
        <div className="form__header">
          <h1>{currentForm} to continue</h1>
        </div>
        {/* CONTEUDO PRINCIPAL */}
        <div className="form__filds">
          <input
            className="form__space"
            type="text"
            placeholder="Email"
            name="Name"
          />
          <input name="Password" type="text" placeholder="Password" />
        </div>
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

        <Button currentForm={currentForm} />

        {/* <Button title={"Cadastro"} /> */}

        <Social currentForm={currentForm} />
      </form>
    </div>
  );
};

export default Formulario;
