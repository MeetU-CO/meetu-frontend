import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

import AuthCallbackTemplate from "../../templates/AuthCallback/AuthCallback";

import { Token } from "../../../modules/token/domain/Token";

import { addCookie } from "../../../modules/cookie/application/addCookie";
import { decodeToken } from "../../../modules/token/application/decodeToken";

import { createUniversalCookieRepository } from "../../../modules/cookie/infrastructure/UniversalCookie";
import { ReactJWTToken } from "../../../modules/token/infrastructure/ReactJWTToken";
import "./AuthCallback.scss";

interface IAuthCallback {}

const AuthCallback = ({}: IAuthCallback) => {
  const tokenRepository = ReactJWTToken();

  const cookieRepository = createUniversalCookieRepository();
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
    const decodedToken: Token = decodeToken(tokenRepository, token);
    addCookie(cookieRepository, { name: "auth", data: token });
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