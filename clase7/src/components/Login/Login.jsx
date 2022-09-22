import React, { useState } from "react";

import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const setJwt = async () => {
    try {
      const respuesta = await fetch("http://localhost:4000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mail: email,
          password: password,
        }),
      });

      if (!respuesta.ok) {
        throw new Error("Error en el servidor");
      }

      const respuestaJson = await respuesta.json();
      if (!respuestaJson.success) {
        throw new Error("No se encontró el usuario");
      }

      alert("Usted es feliz :D. Beba agua");

      localStorage.setItem("jwt", respuestaJson.token);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setJwt();
  };

  return (
    <>
      <header>LOG IN</header>
      <form onSubmit={handleSubmit}>
        <input
          email="user"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
        />
        <input
          email="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <button>Log In</button>
      </form>
    </>
  );
};

export default Login;
