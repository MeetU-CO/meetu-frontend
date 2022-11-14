import React from "react";
import "./SignupForm.scss";
import MeetUIconOrange from "../../atoms/MeetUIcon/MeetUIconOrange";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../../atoms/Formik/Input";
import Password from "../../atoms/Formik/Password";
import ActionButton from "../../atoms/ActionButton/ActionButton";
import MenuLink from "../../atoms/MenuLink/MenuLink";

const SignupForm = () => {
  const loginInitialValues = {
    email: "",
    password: "",
    passwordConfirm: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Email no valido")
      .required("Este campo es obligatorio"),
    password: Yup.string()
      .required("Este campo es obligatorio")
      .test(
        "a",
        "Incluye al menos una minuscula",
        (value: string | undefined): boolean => {
          return value ? /[a-z]/.test(value) : false;
        }
      )
      .test(
        "a",
        "Incluye valores alfanuméricos",
        (value: string | undefined): boolean => {
          return value ? /[0-9]/.test(value) : false;
        }
      )
      .test(
        "a",
        "Incluye al menos una mayuscula",
        (value: string | undefined): boolean => {
          return value ? /[A-Z]/.test(value) : false;
        }
      )
      .min(8, "Mínimo 8 caracteres")
      .max(60, "Máximo 50 caracteres"),
    passwordConfirm: Yup.string().test(
      "",
      "Las contraseñas no coinciden",
      function (value) {
        return this.parent.password === value;
      }
    ),
  });

  const handleSignup = (values: any) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={loginInitialValues}
      onSubmit={handleSignup}
      validationSchema={validationSchema}
    >
      {() => (
        <Form className="signup-form">
          <MeetUIconOrange />
          <Input type="text" name="email" label="Correo electrónico" />
          <Password
            type="text"
            name="password"
            label="Contraseña"
            autoComplete="username"
          />
          <Password
            type="text"
            name="passwordConfirm"
            label="Confirmar contraseña"
            autoComplete="username"
          />
          <div className="signup-form__buttons">
            <ActionButton type="submit" text="Registrarse" />
          </div>
          <ul>
            <MenuLink
              title="¿Ya tienes una cuenta? Inicia sesión aquí"
              link="signup"
              color="var(--orange-color)"
            />
          </ul>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
