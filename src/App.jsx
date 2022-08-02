import { useState } from "react";

import Navbar from "./components/Navbar/Navbar";

function App() {
  const [nombre, setNombre] = useState("");
  const [listadoNombres, setListadoNombres] = useState([]);

  const manejoInputNombre = (evento) => {
    setNombre(evento.target.value);
  };

  const manejoBotonGuardar = () => {
    setListadoNombres([...listadoNombres, nombre]);
    setNombre("");
  };

  return (
    <div>
      <h1>Mi primer proyecto</h1>

      <label>Nombre</label>
      <input
        type="text"
        placeholder="Ingrese su nombre"
        value={nombre}
        onChange={manejoInputNombre}
      />
      <input type="button" value="Guardar" onClick={manejoBotonGuardar} />

      <h2>Listado nombres ({listadoNombres.length})</h2>
      <ul>
        {listadoNombres.map((valorNombre, indice) => {
          const key = valorNombre + indice;
          return <li key={key}>{valorNombre}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
