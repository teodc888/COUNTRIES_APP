import "./formulario.css";
import React, { useState } from "react";
import { PostActivity} from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";


function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Nombre es requerido";
  }
  if (!input.duracion){
    errors.duracion = "Duracion es requerida"
  }
  return errors
}

function Formulario({setLoading}) {
  const history = useHistory();

  const countries = useSelector((state) => state.countries);

  const dispatch = useDispatch();

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
      <label className="label">PAISES</label>
      <form onSubmit={(e) => handleSubmit(e)}>
        <select onChange={(e) => handleSelectCountries(e)} className="select" required="required" >
          <option value="">PAISES...</option>
          {countries.map((el) => {
            return (
                <option key={el.id} name="pais" value={el.id}>
                  {el.name}
                </option>
            );
          })}
        </select> 
        
 
       { errors.name ? <label className="error"> {errors.name} </label>:
       
       <label className="label">Nombre</label>
       
       }
        <input
          className="inputs"
          name="name"
          type="text"
          placeholder="Nombre..."
          required="required"
          value={input.name}
          onChange={handleInputChange}
        />

        <label className="label">Dificultad</label>
        <p>
          <select
            onChange={(e) => handleSelect(e)}
            name="dificultad"
            className="select"
            required="required"
          >
            <option value="">
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
          <label className="label">Duracion En Minutos</label>
          }
        <input
          className="inputs"
          name="duracion"
          type="number"
          min="1"
          placeholder="Duracion..."
          value={input.duracion}
          required="required"
          onChange={handleInputChange}
        />


        <label className="label">Temporada</label>
        <p>
          <select
            onChange={(e) => handleSelect(e)}
            name="temporada"
            className="select"
            required="required"
          >
            <option value="">
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
