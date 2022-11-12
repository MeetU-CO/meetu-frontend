import React from "react";
import "./LoginForm.scss";
import MeetUIconOrange from "../../atoms/MeetUIcon/MeetUIconOrange";
import { Formik, Form } from "formik";
import FormikControl from "../../atoms/Formik/FormikControl";
import * as Yup from "yup";
import Input from "../../atoms/Formik/Input";
import Password from "../../atoms/Formik/Password";
import ActionButton from "../../atoms/ActionButton/ActionButton";
import MenuLink from "../../atoms/MenuLink/MenuLink";
import { useDispatch } from "react-redux";
import { login } from "../../../../../application/slices/AuthSlice";

const LoginForm = () => {
  const dispatch = useDispatch();

  const loginInitialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Email no valido")
      .required("Este campo es obligatorio"),
    password: Yup.string().required("Este campo es obligatorio"),
  });

  const handleLogin = (values: any) => {
    console.log(values);
    dispatch(login({ name: "Jonathan" }));
  };

  return (
    <Formik
      initialValues={loginInitialValues}
      onSubmit={handleLogin}
      validationSchema={validationSchema}
    >
      {() => (
        <Form className="login-form">
          <MeetUIconOrange />
          <Input
            type="text"
            name="email"
            label="Correo electrónico"
            guideLink="name"
          />
          <Password
            type="text"
            name="password"
            label="Contraseña"
            guideLink="name"
            autoComplete="username"
          />
          <div className="login-form__buttons">
            <ActionButton type="submit" text="Iniciar Sesión" />
          </div>
          <ul>
            <MenuLink
              title="¿No tienes una cuenta? Crea una aquí"
              link="signup"
              color="var(--orange-color)"
            />
          </ul>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
