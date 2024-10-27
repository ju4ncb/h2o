import {
  FieldValues,
  SubmitHandler,
  SubmitErrorHandler,
} from "react-hook-form";

interface Props {
  title: string;
  onSubmit: (data: FieldValues) => Promise<void>;
  handleSubmit: (
    onValid: SubmitHandler<FieldValues>,
    onInvalid?: SubmitErrorHandler<FieldValues> | undefined
  ) => (e?: React.BaseSyntheticEvent) => Promise<void>;
  children?: React.ReactNode;
}

const Form = ({ title, handleSubmit, onSubmit, children }: Props) => {
  return (
    <form
      className="container-form"
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <h2>{title}</h2>
      {children}
      <button type="submit">Aceptar</button>
    </form>
  );
};

export default Form;
