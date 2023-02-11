import { Form, Formik } from "formik";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";

import LogoGoogle from "../../../assets/Logos/LogoGoogle.svg";
import LogoMicrosoft from "../../../assets/Logos/LogoMicrosoft.svg";

import AnimatedLoader from "../../atoms/AnimatedLoader/AnimatedLoader";
import ButtonPasive from "../../atoms/ButtonPasive/ButtonPasive";
import ButtonSocial from "../../atoms/ButtonSocial/ButtonSocial";
import MeetUIconOrange from "../../atoms/IconMeetU/IconMeetUOrange";
import Input from "../../atoms/InputFormik/Input";
import Password from "../../atoms/InputFormik/Password";
import LinkList from "../../atoms/LinkList/LinkList";
import Loader from "../../atoms/Loader/Loader";

import { addCookie } from "../../../../application/services/Cookie.service";
import { loginService } from "../../../../application/services/Login.service";

import { login } from "../../../../infraestructure/slices/AuthSlice";

import "./LoginForm.scss";

const LoginForm = () => {
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

  const handleEmailLogin = async (values: any) => {
    setLoading(true);
    const res = await loginService(values);
    if (res.token) {
      dispatch(login(res));
      addCookie(res.token, "auth");
      toast.success(`Bienvenido de vuelta ${res.name}`, {
        onClose: () => navigate("/"),
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
            <ButtonPasive type="submit" text="Iniciar Sesión" />
          </div>
          <ul>
            <LinkList
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
