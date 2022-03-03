// IMPORTAÇÕES
import "./form.scss";
import { Button } from "./Button/btn";
import { Social } from "./Rede/social";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { formContext } from "../../Context/formContext";
import { colorContext } from "../../Context/colorContext";
import Nav from "./Navegacao/nav";

const Formulario = () => {
  // VARIAVEIS DE ESTADO

  const { register, handleSubmit } = useForm("");

  const [currentForm, setCurrentForm] = useState("Login");
  const [brownButton, setBrownButton] = useState(true);
  const [purpleButton, setPurpleButton] = useState("");

  const onSubmit = async (data) => {
    // TRATANDO DADOS DO FORMULARIO
    // ENVIANDO DADOS PARA O BACK-END
    // const request = await fetch("http://localhost:3001/", {
    //   method: "POST",
    //   headers: {
    //     "Content-type": "application/json",
    //     accept: "application/json",
    //   },
    //   body: JSON.stringify(data),
    // });

    // Funções do formulario
    console.log(data);
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form__header">
              <h1>{currentForm} to continue</h1>
            </div>
            {/* CONTEUDO PRINCIPAL */}
            <div className="form__filds">
              <input
                {...register("Email", { required: true })}
                className="form__space"
                type="text"
                placeholder="Email"
              />
              {}
              <input
                {...register("Password", {
                  required: true,
                  minLength: {
                    value: 5,
                    placeholder: "Necessario 3",
                  },
                })}
                type="password"
                placeholder="Password"
              />
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
      </formContext.Provider>
    </colorContext.Provider>
  );
};

export default Formulario;
