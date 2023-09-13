import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style/Register.css";
import NavBar from "./../components/components-pract-page/NavBar";
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";
import emailicon from "../assets/email.svg";
import passwordicon from "../assets/passwordicon.svg";
import iconcopy from "../assets/iconcopy.svg";

const Register = () => {
  const { registro } = useContext(UserContext);
  const navigate = useNavigate();
  const [errorLength, setErrorLength] = useState(false);
  const [error, setError] = useState(false);
  const [values, setValues] = useState({
    user: "",
    email: "",
    password: "",
  });

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (values.user.length > 11) {
      setErrorLength(true);
    } else {
      try {
        const respuesta = await axios.post(
          "http://localhost:3000/register",
          values
        );
        navigate("/login");
        registro(true);
      } catch (error) {
        setError(true);
      }
    }
  };
  return (
    <div className="container2">
      <form action="" onSubmit={handleSubmit}>
        <div className="title-login">
          <h1 className="ingresar-login">Crear tu cuenta</h1>
        </div>
        <div className="box-form">
          <div>
            <div class="group">
              {/* <img className="imagen-input" src={passwordicon} alt="" /> */}
              <input
                type="text"
                name="user"
                placeholder="Username"
                onChange={handleInput}
                required
                className="input"
              />
            </div>
          </div>
          <div>
            <div class="group">
              {/* <img className="imagen-input" src={emailicon} alt="" /> */}
              <input
                required
                type="email"
                name="email"
                onChange={handleInput}
                className="input"
                placeholder="email"
              />
            </div>
          </div>
          <div>
            <div class="group">
              {/* <img className="imagen-input" src={passwordicon} alt="" /> */}
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleInput}
                required
                className="input"
              />
            </div>
          </div>
        </div>
        {errorLength && (
          <div className="box-error">
            <h1 className="error-register">Usuario demasiado largo</h1>
          </div>
        )}
        {error && (
          <div className="box-error">
            <h1 className="error-register">CORREO YA EXISTENTE</h1>
          </div>
        )}

        <input type="submit" className="submit-register" id="submit" />
        <Link to={"/login"} className="inputs" id="back">
          <span id="span">YA TENGO UNA CUENTA</span>
        </Link>

        <div className="temrminos-form">
          <div className="box-terminos">
            <span>
              Al registrarse en SeñalizaTec, aceptas nuestros <br />{" "}
              <b>Términos</b> y<b> Política</b> de privacidad
            </span>
          </div>
          <div className="box-copy">
            {/* <img className="img-copy" src={iconcopy} alt="" /> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
