import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style/Register.css";
import NavBar from "./../components/components-pract-page/NavBar";

const Register = () => {
  const navigate = useNavigate();
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

    try {
      const respuesta = await axios.post(
        "http://localhost:3000/register",
        values
      );

      if (respuesta.status === 200) {
        navigate("/login");
      }
    } catch (error) {
      setError(true);
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

        {error && (
          <div className="box-error">
            <h1 className="error-register">CORREO YA EXISTENTE</h1>
          </div>
        )}

        <input type="submit" className="submit-register" id="submit" />
        <Link to={"/login"} className="inputs" id="back">
          <span id="span">YA TENGO UNA CUENTA</span>
        </Link>
      </form>
    </div>
  );
};

export default Register;
