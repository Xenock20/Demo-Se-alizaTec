import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

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
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">Cuenta Usurio:</label>
        <input type="text" name="user" onChange={handleInput} />

        <label htmlFor="">Correo:</label>
        <input type="email" name="email" onChange={handleInput} />

        <label htmlFor="">Password:</label>
        <input type="password" name="password" onChange={handleInput} />

        <input type="submit" />
      </form>
    </div>
  );
};

export default Register;
