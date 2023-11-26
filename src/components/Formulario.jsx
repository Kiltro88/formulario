// Formulario.jsx
import React, { useState } from "react";
import Validacion from "./Validacion";

const Formulario = ({ onValidationResult }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationResult = Validacion(e, { nombre, email, password, passwordConfirm });
    
    onValidationResult(validationResult);
  };

  return (
    <>
      <form className="formulario" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre</label>
          <input
            type="text"
            name="nombre"
            className="form-control"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <label>Contraseña</label>
          <input
            type="password"
            name="Password"
            className="form-control"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="form-group">
          <label>Confirma tu Contraseña</label>
          <input
            type="password"
            name="PasswordConfirm"
            className="form-control"
            onChange={(e) => setPasswordConfirm(e.target.value)}
            value={passwordConfirm}
          />
        </div>
        <button 
          type="submit" 
          className="btn btn-success"
        >
          Registrarse
        </button>
      </form>
    </>
  );
};

export default Formulario;
