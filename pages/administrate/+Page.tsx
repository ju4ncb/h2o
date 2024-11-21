import Swal from "sweetalert2";
import NavBar from "../../components/NavBar";
import swalCustomAlert from "../../components/SwalCustom";
import { useData } from "../../renderer/useData";
import { Data } from "./+data";

export { Page };

function Page() {
  const { user } = useData<Data>();
  return (
    <>
      <NavBar user={user} />
      <main className="administrate-home">
        <button
          onClick={() => (window.location.href = "/administrate/preguntas")}
        >
          Administrar preguntas
        </button>
        <button onClick={() => swalCustomAlert("Página en desarrollo")}>
          Administrar temas de estudio
        </button>
        <button onClick={() => (window.location.href = "/")}>
          Volver al inicio
        </button>
      </main>
    </>
  );
}
