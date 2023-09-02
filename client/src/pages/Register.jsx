import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./style/Register.css";
import NavBar from "./../components/components-pract-page/NavBar";

const Register = () => {
  const navigate = useNavigate();
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

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3000/register", values)
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container2">
      <form action="" onSubmit={handleSubmit} >
        <h1 id="h1">Crear tu cuenta</h1>

        <label htmlFor="" className="ocultar">Cuenta Usuario:</label>
        <input type="text" name="user" onChange={handleInput} className="inputs" placeholder="Nombre"/>

        <label htmlFor="" className="ocultar">Correo:</label>
        <input type="email" name="email" onChange={handleInput} className="inputs" placeholder="Correo Electronico"/>

        <label htmlFor="" className="ocultar">Password:</label>
        <input type="password" name="password" onChange={handleInput} className="inputs" placeholder="Contraseña"/>

        <input type="submit" className="inputs" id="submit"/>
        <Link to={"/login"} className="inputs" id="back">
          <span id="span">YA TENGO UNA CUENTA</span>
        </Link>
      </form>
    </div>
  );
};

export default Register;
