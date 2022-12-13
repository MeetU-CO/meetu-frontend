import "./LoginForm.scss";
import MeetUIconOrange from "../../atoms/MeetUIcon/MeetUIconOrange";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Input from "../../atoms/Formik/Input";
import Password from "../../atoms/Formik/Password";
import ActionButton from "../../atoms/ActionButton/ActionButton";
import MenuLink from "../../atoms/MenuLink/MenuLink";
import { useDispatch } from "react-redux";
import { login } from "../../../../infraestructure/slices/AuthSlice";
import { loginService } from "../../../../application/services/Login.service";
import { addCookie } from "../../../../application/services/Cookie.service";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

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
