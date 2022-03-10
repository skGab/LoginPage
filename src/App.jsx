// import logo from './logo.svg'
import react, { useState } from "react";
import "../src/styles/global.scss";
import { BackGround } from "./components/BackGround/bg";
import Formulario from "./components/Formulario/form";
import Todo from "./components/Todo/todo";
import { colorContext } from "./Context/colorContext";
import { formContext } from "./Context/formContext";

function App() {
  const [brownButton, setBrownButton] = useState(true);
  const [purpleButton, setPurpleButton] = useState("");

  const [currentForm, setCurrentForm] = useState("Login");
  const [displayTodo, setDisplayTodo] = useState(true);

  const changeAplication = () => {
    if (displayTodo) {
      return <Todo />;
    } else {
      // return [<BackGround />, <Formulario />];
    }
  };

  return (
    <colorContext.Provider
      value={{ brownButton, setBrownButton, purpleButton, setPurpleButton }}
    >
      <formContext.Provider value={{ currentForm, setCurrentForm, setDisplayTodo}}>
        <div className="main__container">{changeAplication()}</div>
      </formContext.Provider>
    </colorContext.Provider>
  );
}

export default App;
