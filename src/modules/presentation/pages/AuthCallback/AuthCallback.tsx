import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

import AuthCallbackTemplate from "../../templates/AuthCallback/AuthCallback";

import { addCookie } from "../../../application/services/Cookie.service";

import { login } from "../../../infraestructure/slices/AuthSlice";

import "./AuthCallback.scss";

interface IAuthCallback {}

const AuthCallback = ({}: IAuthCallback) => {
  const [params] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUrlToken = () => {
    // TODO replace token type
    const token: any = params.get("token");
    dispatch(login(token));
    addCookie(token, "auth");
    // TODO create service to read JWT
    toast.success(`Bienvenido de vuelta usuario`);
    toast.onChange((v) => {
      if (v.status === "removed" && true) {
        navigate("/");
      }
    });
  };

  useEffect(() => {
    handleUrlToken();
  }, []);

  return (
    <div className="authCallback">
      <AuthCallbackTemplate />
    </div>
  );
};

export default AuthCallback;
