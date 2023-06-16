import { ErrorMessage, Field } from "formik";

import TitleH3 from "../TitleH3/TitleH3";
import Error from "./Error";
import "./Field.scss";

interface IMinifiedFormField {
  title: string;
  name: string;
  placeholder: string;
}

const Textarea = (props: IMinifiedFormField) => {
  const { title, name, placeholder, ...rest } = props;

  return (
    <div className="textarea">
      <TitleH3
        title={title}
        color={"var(--black-full-color)"}
        textAlign={"left"}
      ></TitleH3>
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
