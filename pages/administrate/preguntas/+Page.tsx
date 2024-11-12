import NavBar from "../../../components/NavBar";
import { useData } from "../../../renderer/useData";
import type { Data } from "./+data";
import { Trash2 } from "lucide-react";
import Swal from "sweetalert2";

export { Page };

function Page() {
  const { user, preguntas } = useData<Data>();

  const onDelete = async (index: number) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "¡No podrás revertir esta acción!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#5088db",
      cancelButtonColor: "#5088db",
      confirmButtonText: "Eliminar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        // Perform the delete action here
        const response = await fetch("/delete-question", {
          method: "POST",
          body: JSON.stringify({
            id_pr: preguntas[index].id_pr,
          }),
          headers: { "Content-Type": "application/json" },
        });
        const responseMessage = await response.text();
        if (response.status === 500) {
          Swal.fire("¡Error!", responseMessage, "error");
        } else {
          Swal.fire(
            "¡Eliminada!",
            "Pregunta eliminada con éxito.",
            "success"
          ).then(() => (window.location.href = "/administrate/preguntas"));
        }
      }
    });
  };

  return (
    <>
      <NavBar user={user} />
      <div className="preguntas-container">
        <h3>Preguntas</h3>
        <section className="preguntas">
          {preguntas.map(({ descripcion }, index) => (
            <div key={index} className="pregunta">
              <p>{descripcion}</p>
              <Trash2 onClick={() => onDelete(index)} />
            </div>
          ))}
        </section>
        <div className="row">
          <button
            type="button"
            className="column one-half"
            onClick={() =>
              (window.location.href = "/administrate/preguntas/crear-pregunta")
            }
          >
            Añadir
          </button>
          <button
            type="button"
            className="column one-half"
            onClick={() => (window.location.href = "/administrate")}
          >
            Volver
          </button>
        </div>
      </div>
    </>
  );
}
