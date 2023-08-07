import { Form, Formik } from "formik";
import * as Yup from "yup";

import LogoGoogle from "../../../assets/Logos/LogoGoogle.svg";
import LogoMicrosoft from "../../../assets/Logos/LogoMicrosoft.svg";

import AnimatedLoader from "../../atoms/AnimatedLoader/AnimatedLoader";
import ButtonPassive from "../../atoms/ButtonPassive/ButtonPassive";
import ButtonSocial from "../../atoms/ButtonSocial/ButtonSocial";
import MeetUIconOrange from "../../atoms/IconMeetU/IconMeetUOrange";
import Input from "../../atoms/InputFormik/Input";
import Password from "../../atoms/InputFormik/Password";
import LinkList from "../../atoms/LinkList/LinkList";

import {
  handleAuthGooogle,
  handleAuthMicrosoft,
  useEmailLogin,
} from "../SignupForm/AuthHelper";

import "./LoginForm.scss";

const LoginForm = () => {
  const { loading, handleEmailLogin } = useEmailLogin();

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

  if (loading) {
    return (
      <div className="login-form--loading">
        <AnimatedLoader />
      </div>
    );
  }

  return (
    <Formik
      initialValues={loginInitialValues}
      onSubmit={handleEmailLogin}
      validationSchema={validationSchema}
    >
      {() => (
        <Form className="login-form" data-test-id="login-form">
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
            <ButtonSocial
              imgUrl={LogoGoogle}
              text={"Acceder con Google"}
              color={"#FFF"}
              textColor={"rgba(0, 0, 0, 0.54)"}
              fill={true}
              border={false}
              shadow={"rgba(0, 0, 0, 0.084)"}
              onClick={handleAuthGooogle}
            />
            <ButtonSocial
              imgUrl={LogoMicrosoft}
              text={"Acceder con Microsoft"}
              color={"#8E8E8E"}
              textColor={"#7B7B7B"}
              fill={false}
              border={true}
              shadow={""}
              onClick={handleAuthMicrosoft}
            />
            <ButtonPassive type="submit" text="Iniciar Sesión" />
          </div>
          <ul>
            <LinkList
              title="¿No tienes una cuenta? Crea una aquí"
              link="/signup"
              color="var(--orange-color)"
            />
          </ul>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
