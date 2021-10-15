import "./formulario.css";
import React, { useState } from "react";

import { Link } from "react-router-dom";

export function validate(input) {
  let errors = {};
  if (!input.temporada) {
    errors.temporada = "Temporada is required";
  } else if (input.temporada !== "Verano") {
    errors.temporada = "Temporada is invalid";
  }
}

export function Formulario() {
  const [errors, setErrors] = useState({});

  const [input, setInput] = useState({
    nombre: "",
    dificultad: "",
    duracion: "",
    temporada: "",
    pais: "",
  });

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  return (
    <div className="contenedorForm">
      <h1>CREAR FORMULARIO</h1>
      <label className="labelNombre">Nombre</label>
      <input
        className="inputs"
        name="nombre"
        type="text"
        placeholder="Nombre..."
        value={input.nombre}
        onChange={handleInputChange}
      />

      <label className="labelDificultad">Dificultad</label>
      <input
        className="inputs"
        name="dificultad"
        type="number"
        min="1"
        max="5"
        placeholder="Dificultad..."
        value={input.dificultad}
        onChange={handleInputChange}
      />

      <label className="labelDuracion">Duracion</label>
      <input
        className="inputs"
        name="duracion"
        type="number"
        placeholder="Duracion..."
        value={input.duracion}
        onChange={handleInputChange}
      />

      <label className="labelTempora">Temporada</label>
      <p>
        <select className="select">
          <option>VERANO</option>
          <option>INVIERNO</option>
          <option>PRIMAVERA</option>
          <option>OTOÑO</option>
        </select>
      </p>

      <label className="labelPais">Pais</label>
      <input
        className="inputs"
        name="pais"
        type="text"
        placeholder="Pais"
        value={input.pais}
        onChange={handleInputChange}
      />

      <button className="botonCrear">Crear</button>
      <Link to="/home">
        <button className="botonVolver">Volver</button>
      </Link>
    </div>
  );
}

export default Formulario;
