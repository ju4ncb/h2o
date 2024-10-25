import NavBar from "../../components/NavBar";
import juanC from "../../renderer/img/juancaballero.jpeg";
import migue from "../../renderer/img/miguelbarragan.jpeg";
import ilustracion1 from "../../renderer/img/ilustracion1.svg";
import ilustracion2 from "../../renderer/img/ilustracion2.svg";
import ilustracion3 from "../../renderer/img/ilustracion3.svg";
import ilustracion4 from "../../renderer/img/ilustracion4.svg";
import Card from "../../components/Card";
import Servicio from "../../components/Servicio";

export { Page };

interface FooterItemProps {
  titulo: string;
  descripcion: string;
}

function Page() {
  return (
    <>
      <Header>
        <h1>H2O Esperanza</h1>
        <h2>Juego de preguntas</h2>
      </Header>
      <main>
        <AboutUs />
        <Clientes />
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

const AboutUs = () => {
  return (
    <section className="container sobre-nosotros">
      <h2 className="titulo">Nuestro producto</h2>
      <div className="container-sobre-nosotros">
        <img src={ilustracion2} alt="" className="imagen-about-us" />
        <div className="contenido-textos">
          <h3>
            <span>1</span>Visión
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            veniam eius aspernatur ad consequuntur aperiam minima sed dicta odit
            numquam sapiente quam eum, architecto animi pariatur, velit
            doloribus laboriosam ut.
          </p>
          <h3>
            <span>2</span>Misión
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            veniam eius aspernatur ad consequuntur aperiam minima sed dicta odit
            numquam sapiente quam eum, architecto animi pariatur, velit
            doloribus laboriosam ut.
          </p>
        </div>
      </div>
    </section>
  );
};

const Clientes = () => {
  return (
    <section className="clientes container">
      <h2 className="titulo">Opiniones de nuestros clientes</h2>
      <div className="cards">
        <Card image={migue} name="Miguel Barragan">
          menuda mierda
        </Card>

        <Card image={juanC} name="Juan Caballero">
          este juego lo hicieron con el culo
        </Card>
      </div>
    </section>
  );
};

const Instrucciones = () => {
  return (
    <section className="about-services container">
      <div className="wave" style={{ height: 150, overflow: "hidden" }}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M0.00,100.0 C150.00,150.00 350.0,50.00 500.00,100.0 L500.00,00.00 L0.00,00.00 Z"
            style={{ stroke: "none", fill: "#fff" }}
          ></path>
        </svg>
      </div>
      <div className="container">
        <h2 className="titulo">Instrucciones</h2>
        <div className="servicio-cont">
          <Servicio title="Sistema de puntos" image={ilustracion1}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
            qui?
          </Servicio>

          <div className="servicio-ind">
            <img src={ilustracion4} alt="" />
            <h3>Temas</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              qui?
            </p>
          </div>
          <div className="servicio-ind">
            <img src={ilustracion3} alt="" />
            <h3>¿Cómo ganar?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore,
              qui?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Footer

const Footer = () => {
  return (
    <footer>
      <div className="contenedor-footer">
        <FooterItem titulo="Teléfono" descripcion="69420" />
        <FooterItem titulo="Correo" descripcion="h2o@mail.com" />
        <FooterItem titulo="Dirección" descripcion="En tu casa" />
      </div>
      <h2 className="titulo-final">&copy; Los Eso brad</h2>
    </footer>
  );
};

const FooterItem = ({ titulo, descripcion }: FooterItemProps) => {
  return (
    <div className="content-foo">
      <h4>{titulo}</h4>
      <p>{descripcion}</p>
    </div>
  );
};
