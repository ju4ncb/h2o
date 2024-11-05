import { FieldValues, useForm } from "react-hook-form";
import Form from "../../components/Form";
import NavBar from "../../components/NavBar";
import FormItem from "../../components/FormItem";
import { PageContext } from "vike/types";

export { Page };

function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    getValues,
  } = useForm();

  const onSubmit = async (data: FieldValues) => {
    const response = await fetch("/auth", {
      method: "POST",
      body: JSON.stringify({
        usuario: data.username,
        contrasena: data.contrasena,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.status === 401) {
      const responseMessage = await response.text();
      alert(responseMessage);
    } else {
      const responseData = await response.json();
      console.log(responseData);
      window.location.href = "/";
    }
  };

  return (
    <>
      <NavBar withBorder={true} />
      <Form
        title="Iniciar sesión"
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
      >
        <FormItem error={errors.username} message={errors.username?.message}>
          <input
            {...register("username", {
              required: "Ingrese un nombre de usuario",
              maxLength: { value: 50, message: "Nombre de usuario muy largo" },
            })}
            placeholder="Nombre de usuario"
            type="text"
          />
        </FormItem>
        <FormItem
          error={errors.contrasena}
          message={errors.contrasena?.message}
        >
          <input
            {...register("contrasena", {
              required: "Ingrese una contraseña",
              minLength: { value: 4, message: "Contraseña muy corta." },
              maxLength: { value: 50, message: "Contraseña muy larga." },
            })}
            placeholder="Contraseña"
            type="password"
          />
        </FormItem>
        <a href="/register">
          <p style={{ marginBottom: 0 }}>¿No tienes cuenta? Registrate aquí</p>
        </a>
      </Form>
    </>
  );
}
