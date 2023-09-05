import { Link } from "react-router-dom";
import React, { useContext } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext, UserProvider } from "../context/UserProvider";
import "./style/login.css";
const Login = () => {
  const { insertUserName, nameUser } = useContext(UserContext);
  const [error, setError] = useState(false);
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("http://localhost:3000/login", values);

      if (response.status === 200) {
        const user = response.data.user;
        insertUserName(user);

        console.log("Inicio de sesión exitoso");
        navigate("/home");
      }
    } catch (err) {
      console.error("Error al iniciar sesión:", err);
      setError(true);
    }
  };

  return (
    <div className="container2">
      <form action="" onSubmit={handleSubmit}>
        <div className="title-register">
          <h1 className="ingresar-login">Ingresar</h1>
        </div>
        <div>
          <label htmlFor="" className="ocultar">
            Correo:
          </label>

          <input
            required
            type="email"
            name="email"
            onChange={handleInput}
            className="inputs"
            placeholder="Correo Electronico"
          />
        </div>
        <div>
          <label htmlFor="" className="ocultar">
            Password:
          </label>
          <input
            type="password"
            name="password"
            onChange={handleInput}
            className="inputs"
            placeholder="Contraseña"
            required
          />
          {error && (
            <div className="box-error">
              <h1 className="error-register">ERROR AL INICIAR SESION</h1>
            </div>
          )}
        </div>
        <div>
          <input type="submit" className="submit-register" id="submit" />
          <Link to={"/register"} className="inputs" id="back">
            <span id="span">NO TENGO UNA CUENTA</span>
          </Link>
        </div>

        <div className="box-terminos">
          <span>
            Al registrarse en SeñalizaTec, aceptas nuestros <br />{" "}
            <b>Términos</b> y<b> Política</b> de privacidad
          </span>
        </div>
      </form>
    </div>
  );
};
export default Login;
