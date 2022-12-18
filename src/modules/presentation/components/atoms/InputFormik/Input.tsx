import { Field, ErrorMessage } from "formik";
import Error from "./Error";
import "./Field.scss";

interface IMinifiedFormField {
  type: string;
  name: string;
  label: string;
  guideLink?: string;
}

const Input = (props: IMinifiedFormField) => {
  const { type, name, label, guideLink, ...rest } = props;

  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <Field type={type} id={name} name={name} {...rest} />
      <ErrorMessage name={name}>
        {(children) => <Error>{children}</Error>}
      </ErrorMessage>

      {guideLink ? (
        <span>
          ¿Olvidaste tu {label.toLowerCase()}?{" "}
          <a href={guideLink}>Click aquí</a>
        </span>
      ) : (
        ""
      )}
    </div>
  );
};

export default Input;
