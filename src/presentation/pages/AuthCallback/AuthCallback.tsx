import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";

import AuthCallbackTemplate from "../../templates/AuthCallback/AuthCallback";

import { Token } from "../../../modules/token/domain/Token";

import { addCookie } from "../../../modules/cookie/application/addCookie";
import { decodeToken } from "../../../modules/token/application/decodeToken";

import { createUniversalCookieRepository } from "../../../modules/cookie/infrastructure/UniversalCookieRepository";
import { ReactJWTTokenRepository } from "../../../modules/token/infrastructure/ReactJWTTokenRepository";
import "./AuthCallback.scss";

interface IAuthCallback {}

const AuthCallback = ({}: IAuthCallback) => {
  const tokenRepository = ReactJWTTokenRepository();

  const cookieRepository = createUniversalCookieRepository();
  const [params] = useSearchParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleToast = (decodedToken: Token) => {
    toast.success(`Bienvenido ${decodedToken.name}`, {
      onClose: () => {
        navigate(0);
      },
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
