import { useEffect, useState } from "react";
import FormItem from "../../../../components/FormItem";
import NavBar from "../../../../components/NavBar";
import { useData } from "../../../../renderer/useData";
import type { Data } from "./+data";
import { FieldValues, useForm } from "react-hook-form";
import {
  dificultades,
  PreguntaTipoExtendido,
} from "../../../../server/clases/Pregunta";
import { SendHorizonal } from "lucide-react";
import { OpcionTipo } from "../../../../server/clases/Opcion";

export { Page };

function Page() {
  const { user, numeroPreguntas } = useData<Data>();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm();

  const [esVerdaderoFalso, setEsVerdaderoFalso] = useState(false);

  const onSubmit = async (data: FieldValues) => {
    const pregunta = {
      id_ju: user.id_ju,
      id_pr: 0,
      codigo: `P${numeroPreguntas}`,
      descripcion: data.pregunta,
      dificultad: data.dificultad,
    } as PreguntaTipoExtendido;
    const opciones = Array(4).fill({} as OpcionTipo);
    if (esVerdaderoFalso) {
      opciones[0] = {
        codigo: `P${numeroPreguntas}O${1}`,
        descripcion: "Falso",
        esCorrecta: "Falso" === data.verdaderoFalso,
      } as OpcionTipo;
      opciones[1] = {
        codigo: `P${numeroPreguntas}O${2}`,
        descripcion: "Verdadero",
        esCorrecta: "Falso" !== data.verdaderoFalso,
      } as OpcionTipo;
    } else {
      opciones[0] = {
        codigo: `P${numeroPreguntas}O${1}`,
        descripcion: data.opcion1,
        esCorrecta: true,
      } as OpcionTipo;
      opciones[1] = {
        codigo: `P${numeroPreguntas}O${2}`,
        descripcion: data.opcion2,
        esCorrecta: false,
      } as OpcionTipo;
      opciones[2] = {
        codigo: `P${numeroPreguntas}O${3}`,
        descripcion: data.opcion3,
        esCorrecta: false,
      } as OpcionTipo;
      opciones[3] = {
        codigo: `P${numeroPreguntas}O${4}`,
        descripcion: data.opcion4,
        esCorrecta: false,
      } as OpcionTipo;
    }
    const response = await fetch("/create-question", {
      method: "POST",
      body: JSON.stringify({
        pregunta: pregunta,
        opciones: opciones,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const responseMessage = await response.text();
    if (response.status === 500) {
      alert(responseMessage);
    } else {
      window.location.href = "/administrate/preguntas";
    }
  };
  return (
    <>
      <NavBar user={user} />
      <div className="crear-preguntas-container">
        <h3>Crear pregunta</h3>
        <section className="formulario">
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <div className="row">
              <div className="column one-third">
                <h5>Pregunta</h5>
              </div>
              <div className="column two-thirds">
                <FormItem
                  error={errors.pregunta}
                  message={errors.pregunta?.message}
                >
                  <textarea
                    {...register("pregunta", {
                      required: "Ingrese una pregunta",
                      maxLength: {
                        value: 500,
                        message: "Pregunta muy larga",
                      },
                    })}
                    placeholder="Descripción de la pregunta"
                  />
                </FormItem>
              </div>
            </div>
            <div className="row">
              <div className="column one-third">
                <h5>¿Es verdadero o falso?</h5>
              </div>
              <div className="column two-thirds">
                <input
                  placeholder="Opción 1"
                  type="checkbox"
                  style={{
                    width: 20,
                    height: 20,
                    marginTop: 6,
                    cursor: "pointer",
                  }}
                  checked={esVerdaderoFalso}
                  onChange={(e) => setEsVerdaderoFalso(e.target.checked)}
                />
              </div>
            </div>
            {esVerdaderoFalso ? (
              <div className="row">
                <div className="column one-third">
                  <h5>Valor</h5>
                </div>
                <div className="column two-thirds">
                  <select {...register("verdaderoFalso")}>
                    <option value="Falso">Falso</option>
                    <option value="Verdadero">Verdadero</option>
                  </select>
                </div>
              </div>
            ) : (
              <p
                style={{
                  textAlign: "center",
                  width: "100%",
                  marginBottom: 10,
                  color: "#666",
                }}
              >
                Nota: La opción correcta debe estar en la primera opción
              </p>
            )}
            <div className="row">
              <div className="column one-third">
                <h5 style={esVerdaderoFalso ? { color: "#aaa" } : {}}>
                  Opciones
                </h5>
              </div>
              <div className="column two-thirds">
                <FormItem
                  error={errors.opcion1}
                  message={errors.opcion1?.message}
                >
                  <textarea
                    {...register("opcion1", {
                      required: "Ingrese una opción válida",
                      maxLength: {
                        value: 400,
                        message: "Opción muy larga.",
                      },
                    })}
                    placeholder="Opción 1"
                    disabled={esVerdaderoFalso}
                  />
                </FormItem>
                <FormItem
                  error={errors.opcion2}
                  message={errors.opcion2?.message}
                >
                  <textarea
                    {...register("opcion2", {
                      required: "Ingrese una opción válida",
                      maxLength: {
                        value: 400,
                        message: "Opción muy larga.",
                      },
                    })}
                    placeholder="Opción 2"
                    disabled={esVerdaderoFalso}
                  />
                </FormItem>
                <FormItem
                  error={errors.opcion3}
                  message={errors.opcion3?.message}
                >
                  <textarea
                    {...register("opcion3", {
                      required: "Ingrese una opción válida",
                      maxLength: {
                        value: 400,
                        message: "Opción muy larga.",
                      },
                    })}
                    placeholder="Opción 3"
                    disabled={esVerdaderoFalso}
                  />
                </FormItem>
                <FormItem
                  error={errors.opcion4}
                  message={errors.opcion4?.message}
                >
                  <textarea
                    {...register("opcion4", {
                      required: "Ingrese una opción válida",
                      maxLength: {
                        value: 400,
                        message: "Opción muy larga.",
                      },
                    })}
                    placeholder="Opción 4"
                    disabled={esVerdaderoFalso}
                  />
                </FormItem>
              </div>
            </div>
            <div className="row">
              <div className="column one-third">
                <h5>Dificultad</h5>
              </div>
              <div className="column two-thirds">
                <select {...register("dificultad")}>
                  {dificultades.map((dificultad, index) => (
                    <option value={index} key={index}>
                      {dificultad}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="options">
              <button type="submit">Crear</button>
              <SendHorizonal />
            </div>
          </form>
        </section>
        <button
          className="button-volver"
          onClick={() => (window.location.href = "/administrate/preguntas")}
        >
          Volver
        </button>
      </div>
    </>
  );
}
