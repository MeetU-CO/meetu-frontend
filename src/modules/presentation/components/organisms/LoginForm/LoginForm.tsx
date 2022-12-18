import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";

import ActionButton from "../../atoms/ButtonPasive/ButtonPasive";
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
