import { useEffect, useState } from "react";
import FormItem from "../../components/FormItem";
import NavBar from "../../components/NavBar";
import { useData } from "../../renderer/useData";
import type { Data } from "./+data";
import { Heart, Edit, SaveIcon, Ban } from "lucide-react";
import { FieldValues, useForm } from "react-hook-form";
import { JugadorTipo } from "../../server/clases/Jugador";
import swalCustomAlert from "../../components/SwalCustom";

export { Page };

function Page() {
  const { user } = useData<Data>();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue,
  } = useForm();

  const [estaEditando, setEstaEditando] = useState(false);

  const resetValues = () => {
    setValue("nombre1", user.nm1);
    setValue("nombre2", user.nm2);
    setValue("apellido1", user.ap1);
    setValue("apellido2", user.ap2);
    setValue("username", user.username);
    setValue("contrasena", user.passwd);
  };
  useEffect(() => {
    resetValues();
  }, []);

  const onSubmit = async (data: FieldValues) => {
    const jugador = {
      id_ju: user.id_ju,
      username: data.username,
      passwd: data.contrasena,
      nm1: data.nombre1,
      nm2: data.nombre2,
      ap1: data.apellido1,
      ap2: data.apellido2,
    } as JugadorTipo;
    const response = await fetch("/modify-user", {
      method: "POST",
      body: JSON.stringify({
        jugador: jugador,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const responseMessage = await response.text();
    if (response.status === 409) {
      swalCustomAlert(responseMessage, true);
    } else {
      swalCustomAlert(responseMessage).then(() => {
        setEstaEditando(false);
      });
    }
  };
  return (
    <>
      <NavBar user={user} />
      <div className="me-container">
        <h3>Editar campos</h3>
        <section className="formulario">
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <div className="options">
              {estaEditando ? (
                <>
                  <SaveIcon />
                  <button type="submit">Guardar</button>
                  <button
                    onClick={() => {
                      resetValues();
                      setEstaEditando(false);
                    }}
                  >
                    Cancelar
                  </button>
                  <Ban />
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setEstaEditando(true);
                    }}
                  >
                    Editar
                  </button>
                  <Edit />
                </>
              )}
            </div>
            <div className="row">
              <div className="column one-third">
                <h5 style={estaEditando ? {} : { color: "#aaa" }}>
                  Nombre de usuario
                </h5>
              </div>
              <div className="column two-thirds">
                <FormItem
                  error={errors.username}
                  message={errors.username?.message}
                >
                  <input
                    {...register("username", {
                      required: "Ingrese un nombre de usuario",
                      maxLength: {
                        value: 30,
                        message: "Nombre de usuario muy largo",
                      },
                    })}
                    placeholder="Nombre de usuario"
                    disabled={!estaEditando}
                    type="text"
                  />
                </FormItem>
              </div>
            </div>
            <div className="row">
              <div className="column one-third">
                <h5 style={estaEditando ? {} : { color: "#aaa" }}>
                  Contraseña
                </h5>
              </div>
              <div className="column two-thirds">
                <FormItem
                  error={errors.contrasena}
                  message={errors.contrasena?.message}
                >
                  <input
                    {...register("contrasena", {
                      required: "Ingrese una contrasena",
                      minLength: { value: 4, message: "Contraseña muy corta." },
                      maxLength: {
                        value: 30,
                        message: "Contraseña muy larga.",
                      },
                    })}
                    placeholder="Contraseña"
                    disabled={!estaEditando}
                    type="password"
                  />
                </FormItem>
              </div>
            </div>
            <div className="row">
              <div className="column one-third">
                <h5 style={estaEditando ? {} : { color: "#aaa" }}>Nombres</h5>
              </div>
              <div className="column two-thirds">
                <FormItem
                  error={errors.nombre1}
                  message={errors.nombre1?.message}
                >
                  <input
                    {...register("nombre1", {
                      required: "Ingrese un nombre",
                      maxLength: { value: 30, message: "Nombre muy largo" },
                    })}
                    placeholder="Primer nombre"
                    disabled={!estaEditando}
                    type="text"
                  />
                </FormItem>
                <FormItem
                  error={errors.nombre2}
                  message={errors.nombre2?.message}
                >
                  <input
                    {...register("nombre2", {
                      maxLength: { value: 30, message: "Nombre muy largo" },
                    })}
                    placeholder="Segundo nombre"
                    disabled={!estaEditando}
                    type="text"
                  />
                </FormItem>
                <FormItem
                  error={errors.apellido1}
                  message={errors.apellido1?.message}
                >
                  <input
                    {...register("apellido1", {
                      required: "Ingrese un apellido",
                      maxLength: { value: 30, message: "Apellido muy largo" },
                    })}
                    placeholder="Primer apellido"
                    disabled={!estaEditando}
                    type="text"
                  />
                </FormItem>
                <FormItem
                  error={errors.apellido2}
                  message={errors.apellido2?.message}
                >
                  <input
                    {...register("apellido2", {
                      maxLength: { value: 30, message: "Apellido muy largo" },
                    })}
                    placeholder="Segundo apellido"
                    disabled={!estaEditando}
                    type="text"
                  />
                </FormItem>
              </div>
            </div>
          </form>
        </section>
        <button
          className="button-volver"
          onClick={() => (window.location.href = "/")}
        >
          Volver
        </button>
      </div>
      {user.username === "yeii" && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 10,
          }}
        >
          <h2 style={{ color: "red", margin: 0 }}>Te quiero muchooooo</h2>
          <Heart color="red" fontSize={100} />
        </div>
      )}
    </>
  );
}
