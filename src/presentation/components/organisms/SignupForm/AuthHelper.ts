import useEmailLogin from "../LoginForm/useEmailLogin";
import useEmailSignup from "./useEmailSignup";

const handleAuthGooogle = async () => {
  window.open(
    `${process.env.REACT_APP_AUTHENTICATION_SERVICE_URI}/google`,
    "_self"
  );
};

const handleAuthMicrosoft = async () => {
  window.open(
    `${process.env.REACT_APP_AUTHENTICATION_SERVICE_URI}/microsoft`,
    "_self"
  );
};

export {
  handleAuthGooogle,
  handleAuthMicrosoft,
  useEmailSignup,
  useEmailLogin,
};
