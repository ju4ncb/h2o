import NavBar from "../../components/NavBar";
import juanC from "../../renderer/img/juancaballero.jpeg";
import migue from "../../renderer/img/miguelbarragan.jpeg";
import ilustracion1 from "../../renderer/img/ilustracion1.svg";
import ilustracion2 from "../../renderer/img/ilustracion2.svg";
import ilustracion3 from "../../renderer/img/ilustracion3.svg";
import ilustracion4 from "../../renderer/img/ilustracion4.svg";
import Card from "../../components/Card";
import Servicio from "../../components/Servicio";
import Footer from "../../components/Footer";

export { Page };

function Page() {
  return (
    <>
      <Header>
        <h1>H2O Esperanza</h1>

        <a href="/play">
          <h2>Jugar</h2>
        </a>
        <a href="/auth">
          <h3>Iniciar sesión</h3>
        </a>
      </Header>
      <main>
        <PropositoAlcance />
        <Clientes />
        <div className="parche2" />
        <Instrucciones />
      </main>
      <Footer />
    </>
  );
}

// Header

const Header = ({ children }: { children?: React.ReactNode }) => {
  return (
    <header>
      <NavBar />
      <section className="textos-header">{children}</section>
      <div className="wave" style={{ height: 150, overflow: "hidden" }}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#fff" }}
          ></path>
        </svg>
      </div>
    </header>
  );
};

// Main

const PropositoAlcance = () => {
  return (
    <section className="container sobre-nosotros">
      <h2 className="titulo">Nuestro producto</h2>
      <div className="container-sobre-nosotros">
        <img src={ilustracion2} alt="" className="imagen-about-us" />
        <div className="contenido-textos">
          <h3>
            <span>1</span>Propósito
          </h3>
          <p>
            Informar y educar a las personas sobre el agua limpia y el
            saneamiento a través de nuestra aplicación de preguntas triviales
            inspiradas en los objetivos del ODS 6. La aplicación permitirá a los
            usuarios adquirir conocimientos esenciales de una manera interactiva
            y atractiva.
          </p>
          <h3>
            <span>2</span>Alcance
          </h3>
          <p>
            Desarrollar una aplicación en la que las personas puedan aprender
            conceptos básicos y todo lo relacionado con los Objetivos de
            Desarrollo Sostenible a través de preguntas dinámicas. Esta
            aplicación no solo ofrecerá contenido educativo, sino también la
            posibilidad de registrar el progreso del usuario y proporcionar
            retroalimentación inmediata sobre las respuestas.
          </p>
        </div>
      </div>
      <a href="/about-us">
        <h6 style={{ marginBottom: 0 }}>Más información acerca de nosotros</h6>
      </a>
    </section>
  );
};

const Clientes = () => {
  return (
    <section className="clientes container">
      <h2 className="titulo">Opiniones de nuestros clientes</h2>
      <div className="cards">
        <Card image={migue} name="Miguel Barragan">
          Opinion de cliente 1
        </Card>

        <Card image={juanC} name="Juan Caballero">
          Opinion de cliente 2
        </Card>
      </div>
    </section>
  );
};

const Instrucciones = () => {
  return (
    <section className="about-services container">
      <div style={{ height: 150, overflow: "hidden" }}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M0.00,100.0 C150.00,200.00 350.0,50.00 500.00,100.0 L500.00,00.00 L0.00,00.00 Z"
            style={{ stroke: "none", fill: "#fff" }}
          ></path>
        </svg>
      </div>
      <div className="container">
        <h2 className="titulo">Instrucciones</h2>
        <div className="servicio-cont">
          <Servicio title="Sistema de puntos" image={ilustracion1}>
            Cada pregunta respondida correctamente equivale a un punto.
          </Servicio>
          <Servicio title="Temas" image={ilustracion4}>
            Los temas a desarrollar son principalmente acerca del objetivo de
            desarrollo sostenible 6.
          </Servicio>
          <Servicio title="¿Cómo ganar?" image={ilustracion3}>
            Se gana con cumplir con al menos unos 6 puntos.
          </Servicio>
        </div>
      </div>
    </section>
  );
};
