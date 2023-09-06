import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style/Register.css";
import NavBar from "./../components/components-pract-page/NavBar";
import { useContext } from "react";
import { UserContext } from "../context/UserProvider";

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
    if (values.user.length > 8) {
      setErrorLength(true);
    } else {
      const respuesta = await axios.post(
        "http://localhost:3000/register",
        values
      );
      if (respuesta.data.error) {
        setError(true);
      } else {
        navigate("/login");
        registro(true);
      }
    }
  };
  return (
    <div className="container2">
      <form action="" onSubmit={handleSubmit}>
        <div className="title-login">
          <h1 className="ingresar-login">Crear tu cuenta</h1>
        </div>

        <label htmlFor="" className="ocultar">
          Cuenta Usuario:
        </label>
        <input
          type="text"
          name="user"
          onChange={handleInput}
          className="inputs"
          placeholder="Nombre"
          required
        />

        <label htmlFor="" className="ocultar">
          Correo:
        </label>
        <input
          type="email"
          name="email"
          onChange={handleInput}
          className="inputs"
          placeholder="Correo Electronico"
          required
        />

        <label htmlFor="" className="ocultar">
          Password:
        </label>
        <input
          required
          type="password"
          name="password"
          onChange={handleInput}
          className="inputs"
          placeholder="Contraseña"
        />
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

export default Register;
