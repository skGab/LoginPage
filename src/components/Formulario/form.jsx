import { Button } from "../Button/btn";
import { Social } from "../Rede/social";
import "./form.scss";
import react, {useState} from "react";


const Formulario = () => {

  const {login, setlogin} = useState('');

  function formHandle(e) {
    e.preventDefault();

    alert(login)
  }

  function takeInfo(event){
    setlogin(event.target.value)
  }


  return (
    <div className="form__container">
      <form onSubmit={formHandle}>
        <div className="form__header">
          <h1>Login to continue</h1>
        </div>
        <div className="form__filds">
          <input onChange={takeInfo} value={event.target.value} className="form__space" type="text" placeholder="Email" />
          <input type="text" placeholder="Password" />
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
