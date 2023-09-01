import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style/abc.css";

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
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Correo:</label>
        <input type="email" name="email" onChange={handleInput} />

        <label htmlFor="">Password:</label>
        <input type="password" name="password" onChange={handleInput} />

        <input type="submit" />
      </form>
      {error && <h1>Error al inciar sesion</h1>}
    </div>
  );
};
export default Login;
