import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";

import LogoGoogle from "../../../assets/Logos/LogoGoogle.svg";
import LogoMicrosoft from "../../../assets/Logos/LogoMicrosoft.svg";

import ActionButton from "../../atoms/ButtonPasive/ButtonPasive";
import ButtonSocial from "../../atoms/ButtonSocial/ButtonSocial";
import MeetUIconOrange from "../../atoms/IconMeetU/IconMeetUOrange";
import Input from "../../atoms/InputFormik/Input";
import Password from "../../atoms/InputFormik/Password";
import LinkList from "../../atoms/LinkList/LinkList";

import { signup } from "../../../../domain/entity/Signup.entity";

import { addCookie } from "../../../../application/services/Cookie.service";
import { signupService } from "../../../../application/services/Signup.service";

import { login } from "../../../../infraestructure/slices/AuthSlice";

import "./SignupForm.scss";

const SignupForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signupInitialValues = {
    email: "",
    name: "",
    password: "",
    passwordConfirm: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Email no valido")
      .required("Este campo es obligatorio"),
    name: Yup.string()
      .required("Este campo es obligatorio")
      .min(8, "Mínimo 8 caracteres")
      .max(60, "Máximo 50 caracteres"),
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

  const handleSignup = async (values: signup) => {
    const res = await signupService(values);
    if (res.token) {
      dispatch(login(res));
      addCookie(res.token, "auth");
      toast.success("Cuenta creada con éxito", {
        onClose: () => navigate("/"),
      });
    } else {
      toast.error("Ocurrió un error, intenta de nuevo");
    }
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

  return (
    <Formik
      initialValues={signupInitialValues}
      onSubmit={handleSignup}
      validationSchema={validationSchema}
    >
      {() => (
        <Form className="signup-form">
          <MeetUIconOrange />
          <Input type="text" name="email" label="Correo electrónico" />
          <Input type="text" name="name" label="Nombre completo" />
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
            <ActionButton type="submit" text="Registrarse" />
          </div>
          <ul>
            <LinkList
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
