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
  oneColumn?: boolean;
  children?: React.ReactNode;
}

const Form = ({
  title,
  handleSubmit,
  onSubmit,
  children,
  oneColumn,
}: Props) => {
  return (
    <form
      className={oneColumn ? "container-form-smaller" : "container-form"}
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <h2>{title}</h2>
      <div className="inputs">{children}</div>
      <button type="submit">Aceptar</button>
    </form>
  );
};

export default Form;
