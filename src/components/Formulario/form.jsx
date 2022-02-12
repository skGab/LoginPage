import { Button } from "../Button/btn";
import { Social } from "../Rede/social";
import "./form.scss";
import react, { useState } from "react";

const Formulario = () => {
  const [register, setRegister] = useState({});

  const handleChange = (e) => {
    setRegister({...register, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(register);
  };

  return (
    <div className="form__container">
      <form onSubmit={handleSubmit}>
        <div className="form__header">
          <h1>Login to continue</h1>
        </div>
        <div className="form__filds">
          <input
            onChange={handleChange}
            className="form__space"
            type="text"
            placeholder="Email"
            name="Name"
          />
          <input name="PassWord" onChange={handleChange} type="text" placeholder="Password" />
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
