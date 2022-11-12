import React, { useState } from "react";
import { Field, ErrorMessage } from "formik";
import Error from "./Error";
import "./Field.scss";

interface IPassword {
  type: string;
  name: string;
  label: string;
  guideLink?: string;
  [rest: string]: any;
}

const Password = (props: IPassword) => {
  const { type, name, label, guideLink, ...rest } = props;

  const [visiblePassword, setVisiblePassword] = useState<boolean>(false);

  return (
    <div className="field">
      <label htmlFor="password">{label}</label>
      <div className="field__password">
        <Field
          type={visiblePassword ? "text" : "password"}
          id={name}
          name={name}
          {...rest}
        />

        <i
          className={`bi bi-eye${visiblePassword ? "" : "-slash"}`}
          onClick={() => setVisiblePassword(!visiblePassword)}
        ></i>
      </div>
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

export default Password;
