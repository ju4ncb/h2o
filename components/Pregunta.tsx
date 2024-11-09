import React, { useState } from "react";
import { OpcionTipo } from "../server/clases/Opcion";

interface Props {
  numeroPregunta: number;
  pregunta: string;
  opciones: OpcionTipo[];
  punto: number;
  onSiguiente(): void;
}

const Pregunta = ({
  numeroPregunta,
  pregunta,
  opciones,
  punto,
  onSiguiente,
}: Props) => {
  const [respuestaEscogida, setRespuestaEscogida] = useState(-1);

  const clickSiguiente = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (respuestaEscogida === -1) {
      alert("Escoge una respuesta");
      return;
    }
    onSiguiente();
  };

  const clickOption = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number
  ) => {
    e.preventDefault();
    setRespuestaEscogida(index);
  };

  return (
    <div className="app">
      <h2>Pregunta {numeroPregunta}</h2>
      <h5 id="pregunta">{pregunta}</h5>
      {opciones.map(({ descripcion, esCorrecta }, index) => {
        let classes = "option";
        if (index === respuestaEscogida) {
          classes += " active";
          esCorrecta ? (punto = 1) : (punto = 0);
        }
        return (
          <button
            className={classes}
            onClick={(e) => {
              clickOption(e, index);
            }}
          >
            {descripcion}
          </button>
        );
      })}

      <div className="seccion-siguiente">
        <button className="siguiente" onClick={clickSiguiente}>
          siguiente
        </button>
      </div>
    </div>
  );
};

export default Pregunta;
