import { useState } from "react";
import NavBar from "../../components/NavBar";
import Pregunta from "../../components/Pregunta";
import { useData } from "../../renderer/useData";
import type { Data } from "./+data";

export { Page };

function Page() {
  const { user, preguntas } = useData<Data>();
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [puntos, setPuntos] = useState(0);
  console.log(preguntas);
  return (
    <>
      <NavBar user={user} />
      {preguntas.map((pregunta, index) => {
        if (index === activeQuestion) {
          return (
            <Pregunta
              key={index}
              onSiguiente={() => {
                setActiveQuestion((n) => n + 1);
                setPuntos((n) => n + 1);
              }}
              numeroPregunta={index + 1}
              pregunta={pregunta}
              puntos={puntos}
            />
          );
        }
      })}
      {activeQuestion === preguntas.length && (
        <div className="app">
          <h5>Has ganado!</h5>
          <p style={{ margin: 10 }}>
            Gracias por jugar nuestra demo, puntos: {puntos}/{puntos}
          </p>
          <button onClick={() => (window.location.href = "play")}>
            Intentar de nuevo
          </button>
        </div>
      )}
    </>
  );
}
