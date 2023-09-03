import { ErrorMessage, Field } from "formik";

import Error from "./Error";
import "./Field.scss";

interface IMinifiedFormField {
  name: string;
  placeholder: string;
}

const Textarea = (props: IMinifiedFormField) => {
  const { name, placeholder, ...rest } = props;

  return (
    <div className="textarea">
      <Field id={name} name={name}>
        {({ field, form, meta }: any) => (
          <textarea placeholder={placeholder} {...field} {...rest} />
        )}
      </Field>
      <ErrorMessage name={name}>
        {(children) => <Error>{children}</Error>}
      </ErrorMessage>
    </div>
  );
};

export default Textarea;
