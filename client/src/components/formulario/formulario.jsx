import "./formulario.css";
import React, { useState, useEffect } from "react";
import { PostActivity, AllCountries } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Nombre es requerido";
  }
  if (!input.duracion){
    errors.duracion = "Duracion es reequerida"
  }
  return errors
}

function Formulario({setLoading}) {
  const history = useHistory();

  const countries = useSelector((state) => state.countries);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(AllCountries());
  }, [dispatch]);

  const [errors, setErrors] = useState({})
  const [input, setInput] = useState({
    name: "",
    dificultad: "",
    duracion: "",
    temporada: "",
    countries: [],
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

  const handleSelectCountries = function (e) {
    setInput({
      countries: [...input.countries, e.target.value],
    });
  };
  
  //Se usa para la dificultad y la temporada
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
    setLoading(true)
    history.push("/home");
  }
  function handleClick(e){
    e.preventDefault(e);
    setLoading(true)
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
       { errors.name ? <label className="error"> {errors.name} </label>:
       
       <label className="labelNombre">Nombre</label>
       
       }
        <input
          className="inputs"
          name="name"
          type="text"
          placeholder="Nombre..."
          value={input.name}
          onChange={handleInputChange}
        />

        <label className="labelDificultad">Dificultad</label>
        <p>
          <select
            onChange={(e) => handleSelect(e)}
            name="dificultad"
            className="select"
          >
            <option>
              DIFICULTAD...
            </option>
            <option name="dificultad" value="1">
              Muy Facil / 1
            </option>
            <option name="dificultad" value="2">
              Facil / 2
            </option>
            <option name="dificultad" value="3">
              Intermedio / 3
            </option>
            <option name="dificultad" value="4">
              Dificil / 4
            </option>
            <option name="dificultad" value="5">
              Muy Dificil / 5
            </option>
          </select>
        </p>

        {
          errors.duracion ?  <label className="error"> {errors.duracion} </label> :
          <label className="labelDuracion">Duracion En Minutos</label>
          }
        <input
          className="inputs"
          name="duracion"
          type="number"
          min="1"
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
        <button className="botonVolver" onClick={(e) => handleClick(e)} >volver</button>
        </Link>
      </form>
    </div>
  );
}

export default Formulario;
