import React, {useState} from "react";
import "./App.css";

function App() {

  const [estaSonando, setEstaSonando] = useState("")
  //Array de cada nota
  const notas = [
    {
      nombre: "Do",
      //Esto está extrayendo el archivo con node
      link: require("./notes/do.wav"),
      tieneSostenido: true
    },
    {
      nombre: "Re",
      link: require("./notes/re.wav"),
      tieneSostenido: true
    },
    {
      nombre: "Mi",
      link: require("./notes/mi.wav"),
    },
    {
      nombre: "Fa",
      link: require("./notes/fa.wav"),
      tieneSostenido: true
    },
    {
      nombre: "Sol",
      link: require("./notes/sol.wav"),
      tieneSostenido: true
    },
    {
      nombre: "La",
      link: require("./notes/la.wav"),
      tieneSostenido: true
    },
    {
      nombre: "Si",
      link: require("./notes/si.wav"),
    },
  ];
  const handleClick = (nota) => {
    setEstaSonando(nota.nombre)
    const sonido = new Audio(nota.link);
    sonido.play();
    }

    setTimeout(() => {
      setEstaSonando("")
    }, 300)

  return (
    <div className="App">
      <div className="titulo">
        <h1>Piano con React</h1>
        <h2> Made by 🦄 Daiana Blanco</h2>
        {estaSonando &&
        <h3> esta sonando la nota {estaSonando}</h3>}
      </div>

      <div className="contenedor">
        {/*Recorrer el Array de notas con MAP- Y por cada nota devolver es un DIV con la clase nota que cuando  haga click se ejecute la función HANDLECLICK */}
        {
        notas.map(nota => {
          return(
          <div className={`nota ${estaSonando === nota.nombre && 'estaSonando'}`} onClick={() => handleClick(nota)}>
            {nota.tieneSostenido && <div className="negra"></div> }
          </div>
        )
      })
    }
      </div>
    </div>
  );
}


export default App;

