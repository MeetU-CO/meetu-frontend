import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";

import LogoGoogle from "../../../assets/Logos/LogoGoogle.svg";
import LogoMicrosoft from "../../../assets/Logos/LogoMicrosoft.svg";

import ButtonPasive from "../../atoms/ButtonPasive/ButtonPasive";
import ButtonSocial from "../../atoms/ButtonSocial/ButtonSocial";
import MeetUIconOrange from "../../atoms/IconMeetU/IconMeetUOrange";
import Input from "../../atoms/InputFormik/Input";
import Password from "../../atoms/InputFormik/Password";
import LinkList from "../../atoms/LinkList/LinkList";

import { addCookie } from "../../../../application/services/Cookie.service";
import { loginService } from "../../../../application/services/Login.service";

import { login } from "../../../../infraestructure/slices/AuthSlice";

import "./LoginForm.scss";

const LoginForm = () => {
  const navigate = useNavigate();
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

  const handleLogin = async (values: any) => {
    const res = await loginService(values);
    if (res.token) {
      dispatch(login(res));
      addCookie(res.token, "auth");
      toast.success(`Bienvenido de vuelta ${res.name}`);
      toast.onChange((v) => {
        if (v.status === "removed" && !res.response) {
          navigate("/");
        }
      });
    } else {
      toast.error("Ocurrió un error, intenta de nuevo");
    }
  };

  const handleLoginGooogle = async () => {
    const windowFeatures = "left=0px,top=0px,width=420,height=620";
    const googlePopup: any = window.open(
      `${process.env.REACT_APP_AUTHENTICATION_SERVICE_URI}/google`,
      "_self"
      // "mozillaWindow",
      // windowFeatures
    );

    // console.log(googlePopup);
    // console.log(googlePopup.document);
    debugger;
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
              onClick={handleLoginGooogle}
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
