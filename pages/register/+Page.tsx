import { FieldValues, useForm } from "react-hook-form";
import Form from "../../components/Form";
import NavBar from "../../components/NavBar";
import FormItem from "../../components/FormItem";

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
    const response = await fetch("/metodo", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    const responseData = await response.json();
    reset();
  };

  return (
    <>
      <NavBar withBorder={true} />
      <Form title="Registro" handleSubmit={handleSubmit} onSubmit={onSubmit}>
        <FormItem error={errors.nombre1} message={errors.nombre1?.message}>
          <input
            {...register("nombre1", {
              required: "Ingrese un nombre",
              maxLength: { value: 30, message: "Nombre muy largo" },
            })}
            placeholder="Primer nombre"
            type="text"
          />
        </FormItem>
        <FormItem error={errors.nombre2} message={errors.nombre2?.message}>
          <input
            {...register("nombre2", {
              maxLength: { value: 30, message: "Nombre muy largo" },
            })}
            placeholder="Segundo nombre"
            type="text"
          />
        </FormItem>
        <FormItem error={errors.apellido1} message={errors.apellido1?.message}>
          <input
            {...register("apellido1", {
              required: "Ingrese un apellido",
              maxLength: { value: 30, message: "Apellido muy largo" },
            })}
            placeholder="Primer apellido"
            type="text"
          />
        </FormItem>
        <FormItem error={errors.apellido2} message={errors.apellido2?.message}>
          <input
            {...register("apellido2", {
              maxLength: { value: 30, message: "Apellido muy largo" },
            })}
            placeholder="Segundo apellido"
            type="text"
          />
        </FormItem>
        <FormItem error={errors.username} message={errors.username?.message}>
          <input
            {...register("username", {
              required: "Ingrese un nombre de usuario",
              maxLength: { value: 30, message: "Nombre de usuario muy largo" },
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
              required: "Ingrese una contrasena",
              minLength: { value: 4, message: "Contraseña muy corta." },
              maxLength: { value: 30, message: "Contraseña muy larga." },
            })}
            placeholder="Contraseña"
            type="password"
          />
        </FormItem>
        <a href="/auth">
          <p style={{ marginBottom: 0 }}>
            ¿Ya tienes cuenta? Inicia sesión aquí
          </p>
        </a>
      </Form>
    </>
  );
}
