// import logo from './logo.svg'
import { useState, useEffect } from "react";
import "../src/styles/global.scss";
import { BackGround } from "./components/BackGround/bg";
import Formulario from "./components/Formulario/form";
import Todo from "./components/Todo/todo";
import { colorContext } from "./Context/colorContext";
import { formContext } from "./Context/formContext";
import api from "./services/api";

function App() {
  // CORES DE FORMULARIOS
  const [brownButton, setBrownButton] = useState(true);
  const [purpleButton, setPurpleButton] = useState("");

  // RENDERIZANDO COMPONENTES (LOGIN, SIGN IN OU TODO)
  const [currentForm, setCurrentForm] = useState("Login");
  const [displayTodo, setDisplayTodo] = useState(false); // Deixar setado como FALSE

  // Current User
  const [currentUser, setCurrentUser] = useState({});

  // Armazenando tarefas
  const [todos, setTodos] = useState([]);

  const user = window.localStorage.getItem("user");

  useEffect(() => {
    if (user) {
      setDisplayTodo(true);

      api
        .get("/todos/" + user)
        .then((data) => setTodos(data.data))
        .catch((err) => console.error("Error: ", err));
    }
  }, [currentUser]);

  // Trocando Pagina
  const changeAplication = () => {
    if (displayTodo) {
      return <Todo setDisplayTodo={setDisplayTodo} />;
    } else {
      return [<BackGround />, <Formulario />];
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
          setDisplayTodo,
          currentUser,
          setCurrentUser,
          todos,
          setTodos,
        }}
      >
        <div className="main__container">{changeAplication()}</div>
      </formContext.Provider>
    </colorContext.Provider>
  );
}

export default App;
