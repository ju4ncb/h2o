import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import juanC from "../../renderer/img/yo-ese.jpg";
import juanM from "../../renderer/img/montenegro.jpg";
import juanP from "../../renderer/img/otro-gei.jpg";
import fran from "../../renderer/img/un-gei.jpg";
import pipe from "../../renderer/img/pipe.jpg";
import ilustracion5 from "../../renderer/img/ilustracion5.png";
import TeamCard from "../../components/TeamCard";
import type { Data } from "./+data";
import { useData } from "../../renderer/useData";

export { Page };

function Page() {
  const { user } = useData<Data>();
  return (
    <>
      <NuestroEquipo>
        <NavBar user={user} />
        <h1 className="titulo">Conoce al equipo</h1>
        <div className="integrantes">
          <TeamCard
            img={juanC}
            name="Juan Caballero"
            occupation="Scrum Master"
          />
          <TeamCard img={juanP} name="Juan Perez" occupation="Product Owner" />
          <TeamCard
            img={fran}
            name="Francisco Sosa"
            occupation="Frontend Dev"
          />
          <TeamCard img={pipe} name="Andrés Solano" occupation="Backend Dev" />
          <TeamCard
            img={juanM}
            name="Juan Montenegro"
            occupation="Backend Dev"
          />
        </div>
      </NuestroEquipo>
      <main>
        <Objetivos />
      </main>
      <Footer />
    </>
  );
}

const NuestroEquipo = ({ children }: { children?: React.ReactNode }) => {
  return (
    <section className="container los-eso-brad">
      {children}
      <div style={{ height: 150, overflow: "hidden" }}>
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: "none", fill: "#fff", width: "100%" }}
          ></path>
        </svg>
      </div>
      <div className="parche1" />
    </section>
  );
};

const Objetivos = () => {
  return (
    <section className="container sobre-nosotros">
      <h2 className="titulo">¿Qué es la ODS 6?</h2>
      <div className="container-sobre-nosotros">
        <img
          src={ilustracion5}
          alt=""
          className="imagen-about-us"
          style={{ padding: 20 }}
        />
        <div className="contenido-textos low-margin">
          <p>
            El Objetivo de Desarrollo Sostenible 6 (ODS 6) de las Naciones
            Unidas se centra en garantizar la disponibilidad y la gestión
            sostenible del agua y el saneamiento para todos. Este objetivo tiene
            varias metas específicas, incluyendo:
          </p>
          <div className="objetivos">
            <div>
              <h3>
                <span>1</span>Acceso Universal
              </h3>
              <p>
                Asegurar que todas las personas tengan acceso a agua potable
                segura y asequible.
              </p>
            </div>
            <div>
              <h3>
                <span>2</span>Saneamiento e Higiene
              </h3>
              <p>
                Lograr el acceso adecuado a servicios de saneamiento e higiene,
                especialmente para mujeres y niñas.
              </p>
            </div>
            <div>
              <h3>
                <span>3</span>Gestión del Agua
              </h3>
              <p>
                Implementar una gestión integral de los recursos hídricos a
                todos los niveles, incluyendo la cooperación transfronteriza
                cuando sea necesario.
              </p>
            </div>
            <div>
              <h3>
                <span>4</span>Calidad del Agua
              </h3>
              <p>
                Mejorar la calidad del agua mediante la reducción de la
                contaminación, eliminando el vertido de productos químicos
                peligrosos y reduciendo al mínimo la liberación de materiales
                peligrosos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
