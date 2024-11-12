import NavBar from "../../components/NavBar";

export { Page };

function Page() {
  return (
    <>
      <NavBar />
      <main className="administrate-home">
        <button
          onClick={() => (window.location.href = "/administrate/preguntas")}
        >
          Administrar preguntas
        </button>
        <button onClick={() => alert("Página en desarrollo")}>
          Administrar temas de estudio
        </button>
        <button onClick={() => (window.location.href = "/")}>
          Volver al inicio
        </button>
      </main>
    </>
  );
}
