import { Button } from "../Button/btn";
import { Social } from "../Rede/social";
import "./form.scss";

const Formulario = () => {
  return (
    <div className="form__container">
      <form className="" action="#">
        <div className="form__header">
          <h1>Login to continue</h1>
        </div>
        <div className="form__filds">
          <input className="form__space" type="text" placeholder="Email" />
          <input type="text" placeholder="Passoword" />
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
