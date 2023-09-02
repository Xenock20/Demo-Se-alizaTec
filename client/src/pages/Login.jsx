import { Link } from "react-router-dom";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style/Register.css";

const Login = () => {
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
    axios.post("http://localhost:3000/login", values);

    try {
      const response = await axios.post("http://localhost:3000/login", values);

      console.log("Respuesta del servidor:", response.data);
      if (response.status === 200) {
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
        <h1 id="h1">Ingresar</h1>

        <label htmlFor="" className="ocultar">Correo:</label>
        <input type="email" name="email" onChange={handleInput} className="inputs" placeholder="Correo Electronico"/>

        <label htmlFor="" className="ocultar">Password:</label>
        <input type="password" name="password" onChange={handleInput} className="inputs" placeholder="Contraseña"/>

        <input type="submit" className="inputs" id="submit"/>
        <Link to={"/register"} className="inputs" id="back">
          <span id="span">NO TENGO UNA CUENTA</span>
        </Link>
      </form>
      {error && <h1>Error al inciar sesion</h1>}
    </div>
  );
};
export default Login;
