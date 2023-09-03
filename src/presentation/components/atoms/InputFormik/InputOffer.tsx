import { ErrorMessage, Field } from "formik";

import Error from "./Error";
import "./Field.scss";

interface IMinifiedFormField {
  type: string;
  name: string;
  placeholder: string;
}

const InputOffer = (props: IMinifiedFormField) => {
  const { type, name, placeholder, ...rest } = props;

  return (
    <div className="field">
      <Field
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        {...rest}
      />
      <ErrorMessage name={name}>
        {(children) => <Error>{children}</Error>}
      </ErrorMessage>
    </div>
  );
};

export default InputOffer;
