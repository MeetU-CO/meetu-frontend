import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

import AuthCallbackTemplate from "../../templates/AuthCallback/AuthCallback";

import { Token } from "../../../domain/entity/Token.entity";

import { addCookie } from "../../../application/services/Cookie.service";
import { tokenHandler } from "../../../application/services/TokenHandler.service";

import { login } from "../../../infraestructure/slices/AuthSlice";

import "./AuthCallback.scss";

interface IAuthCallback {}

const AuthCallback = ({}: IAuthCallback) => {
  const [params] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToast = (decodedToken: Token) => {
    toast.success(`Bienvenido de vuelta ${decodedToken.name}`, {
      onClose: () => navigate("/"),
    });
  };

  const handleUrlToken = () => {
    const token: string = params.get("token")!;
    const decodedToken: Token = tokenHandler(token);
    addCookie(token, "auth");
    handleToast(decodedToken);
  };

  useEffect(() => {
    handleUrlToken();
  }, []);

  // TODO check for cookie generated coming from other routes

  return (
    <div className="authCallback">
      <AuthCallbackTemplate />
    </div>
  );
};

export default AuthCallback;
