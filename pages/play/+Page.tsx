import NavBar from "../../components/NavBar";
import { useData } from "../../renderer/useData";
import type { Data } from "./+data";

export { Page };

function Page() {
  const { user } = useData<Data>();
  return (
    <>
      <NavBar user={user} />
      <div className="app">
        <h2>Pregunta X</h2>
        <h5 id="pregunta">
          Descripción de la pregunta, contiene información para poder responder
          correctamente.
        </h5>
        <div className="options">
          <button className="option">Respuesta 1</button>
          <button className="option">Respuesta 2</button>
          <button className="option">Respuesta 3</button>
          <button className="option">Respuesta 4</button>
        </div>
        <div className="seccion-siguiente">
          <button className="siguiente">siguiente</button>
        </div>
      </div>
    </>
  );
}
