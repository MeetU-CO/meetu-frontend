import { Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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

import { Auth } from "../../../../modules/auth/domain/Auth";

import { login } from "../../../../modules/auth/application/Login";
import { addCookie } from "../../../../modules/cookie/application/addCookie";

import { createMongoDBAuthRepository } from "../../../../modules/auth/infrastructure/MongoDBAuthRepository";
import { login as loginSlice } from "../../../../modules/auth/infrastructure/slices/AuthSlice";
import { createUniversalCookieRepository } from "../../../../modules/cookie/infrastructure/UniversalCookieRepository";
import "./LoginForm.scss";

const LoginForm = () => {
  const cookieRepository = createUniversalCookieRepository();
  const authRepository = createMongoDBAuthRepository();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);

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

  const handleEmailLogin = async (values: Auth) => {
    setLoading(true);
    const res = await login(authRepository, values);
    if (res.token) {
      dispatch(loginSlice(res));
      addCookie(cookieRepository, { name: "auth", data: res.token });
      toast.success(`Bienvenido ${res.name}`, {
        onClose: () => navigate(0),
      });
    } else {
      toast.error("Ocurrió un error, intenta de nuevo");
    }
    setLoading(false);
  };

  const handleLoginGooogle = async () => {
    window.open(
      `${process.env.REACT_APP_AUTHENTICATION_SERVICE_URI}/google`,
      "_self"
    );
  };

  const handleLoginMicrosoft = async () => {
    window.open(
      `${process.env.REACT_APP_AUTHENTICATION_SERVICE_URI}/microsoft`,
      "_self"
    );
  };

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
              onClick={handleLoginGooogle}
            />
            <ButtonSocial
              imgUrl={LogoMicrosoft}
              text={"Acceder con Microsoft"}
              color={"#8E8E8E"}
              textColor={"#7B7B7B"}
              fill={false}
              border={true}
              shadow={""}
              onClick={handleLoginMicrosoft}
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
