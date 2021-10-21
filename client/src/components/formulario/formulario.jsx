import "./formulario.css";
import React, { useState, useEffect } from "react";
import { PostActivity, AllCountries } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

export function validate(input) {
  let errors = {};
  if (!input.temporada) {
    errors.temporada = "Temporada is required";
  } else if (input.temporada !== "Verano") {
    errors.temporada = "Temporada is invalid";
  }
}

export function Formulario() {
  const history = useHistory();

  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(AllCountries());
  }, []);

  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    dificultad: "",
    duracion: "",
    temporada: "",
    countries: [],
  });
  console.log(input);

  const handleInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectCountries = function (e) {
    setInput({
      countries: [...input.countries, e.target.value],
    });
  };
  const handleSelect = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(PostActivity(input));
    alert("Actividad creada");
    setInput({
      name: "",
      dificultad: "",
      duracion: "",
      temporada: "",
      countries: [],
    });
    history.push("/home");
  }

  return (
    <div className="contenedorForm">
      <h1>CREAR FORMULARIO</h1>

      <label className="labelPais">Pais</label>
      <form onSubmit={(e) => handleSubmit(e)}>
        <select onChange={(e) => handleSelectCountries(e)} className="select">
          <option>PAISES...</option>
          {countries.map((el) => {
            return (
                <option key={el.id} name="pais" value={el.id}>
                  {el.name}
                </option>
            );
          })}
        </select>
        <label className="labelNombre">Nombre</label>
        <input
          className="inputs"
          name="name"
          type="text"
          placeholder="Nombre..."
          value={input.name}
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
          <select
            onChange={(e) => handleSelect(e)}
            name="temporada"
            className="select"
          >
            <option>
              TEMPORADA...
            </option>
            <option name="temporada" value="Verano">
              Verano
            </option>
            <option name="temporada" value="Invierno">
              Invierno
            </option>
            <option name="temporada" value="Primavera">
              Primavera
            </option>
            <option name="temporada" value="Otoño">
              Otoño
            </option>
          </select>
        </p>
        <button type="submit" className="botonCrear">
          Crear
        </button>
        <Link to="/home">
          <button className="botonVolver">Volver</button>
        </Link>
      </form>
    </div>
  );
}

export default Formulario;
