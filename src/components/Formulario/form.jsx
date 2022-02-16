import { Button } from "../Button/btn";
import { Social } from "../Rede/social";
import "./form.scss";
import react, { useState } from "react";

const Formulario = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData(e.target);
    const formData = Object.fromEntries(form.entries());


    const request = await fetch('http://localhost:3001/', {
      method: 'POST',
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(formData)
    });
  };

  return (
    <div className="form__container">
      <form onSubmit={handleSubmit}>
        <div className="form__header">
          <h1>Login to continue</h1>
        </div>
        <div className="form__filds">
          <input
            className="form__space"
            type="text"
            placeholder="Email"
            name="Name"
          />
          <input name="Password" type="text" placeholder="Password" />
        </div>

        <div className="form__forgot">
          <div className="form__check">
            <input type="checkbox" />
            <label name="remember">Remember me</label>
          </div>
          <p>
            <a href="#">Forgot Passoword?</a>
          </p>
        </div>

        <Button />
        <Social />
      </form>
    </div>
  );
};

export default Formulario;
