// import logo from './logo.svg'
import react, {  useState } from "react";
import "../src/styles/global.scss";
import { BackGround } from "./components/BackGround/bg";
import Formulario from "./components/Formulario/form";
import Todo from "./components/Todo/todo";
import {colorContext} from "./Context/colorContext"
import {formContext} from "./Context/formContext"


function App() {
  const [brownButton, setBrownButton] = useState(true);
  const [purpleButton, setPurpleButton] = useState("");

  const [currentForm, setCurrentForm] = useState("Login");

  return (
    <colorContext.Provider
      value={{ brownButton, setBrownButton, purpleButton, setPurpleButton }}
    >
      <formContext.Provider value={{ currentForm, setCurrentForm }}>
        <div className="main__container">
          <Todo/>
          {/* <BackGround />
          <Formulario /> */}
        </div>
      </formContext.Provider>
    </colorContext.Provider>
  );
}

export default App;
