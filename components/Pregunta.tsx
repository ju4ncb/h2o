import React, { useRef, useState } from "react";
import { PreguntaTipoExtendidoOpciones } from "../server/clases/Pregunta";
import CountdownBar from "./CountdownBar";

interface Props {
  numeroPregunta: number;
  pregunta: PreguntaTipoExtendidoOpciones;
  puntos: number;
  onSiguiente(): void;
}

const Pregunta = ({ numeroPregunta, pregunta, puntos, onSiguiente }: Props) => {
  const [respuestaEscogida, setRespuestaEscogida] = useState(-1);
  const [noRespondido, setNoRespondido] = useState(true);

  const clickSiguiente = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    if (respuestaEscogida === -1) {
      alert("Escoge una respuesta");
      return;
    }
    if (pregunta.opciones[respuestaEscogida].es_correcta === 0) {
      setNoRespondido(false);
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
      <h5 id="pregunta">{pregunta.descripcion}</h5>
      <div className="options">
        {pregunta.opciones.map(({ descripcion, es_correcta }, index) => {
          let classes = "option";
          if (index === respuestaEscogida && noRespondido) {
            classes += " active";
          } else {
            if (es_correcta && !noRespondido) classes += " correct";
            if (respuestaEscogida === index) classes += " wrong";
          }
          return (
            <button
              className={classes}
              onClick={(e) => {
                clickOption(e, index);
              }}
              disabled={!noRespondido}
            >
              {descripcion}
            </button>
          );
        })}
      </div>

      <div className="seccion-siguiente">
        {noRespondido ? (
          <button className="siguiente" onClick={clickSiguiente}>
            Siguiente
          </button>
        ) : (
          <button
            className="siguiente"
            onClick={() => (window.location.href = "play")}
          >
            Intentar de nuevo
          </button>
        )}
        <CountdownBar
          tiempo={30}
          timeOutFunction={() => {
            setNoRespondido(false);
          }}
        />
      </div>
      {!noRespondido && (
        <>
          <h5>Has perdido!</h5>
          <p>Puntos: {puntos}</p>
        </>
      )}
    </div>
  );
};

export default Pregunta;
