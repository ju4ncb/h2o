import { FieldError, Merge, FieldErrorsImpl } from "react-hook-form";

interface Props {
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>> | undefined;
  message?:
    | string
    | FieldError
    | Merge<FieldError, FieldErrorsImpl<any>>
    | undefined;
  children?: React.ReactNode;
}

const FormItem = ({ error, message, children }: Props) => {
  return (
    <div className="input-container">
      {children}
      {error && <p className="error-message">{`${message}`}</p>}
    </div>
  );
};

export default FormItem;
