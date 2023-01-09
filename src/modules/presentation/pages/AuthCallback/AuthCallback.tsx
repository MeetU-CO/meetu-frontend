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

  useEffect(() => {
    let data: any = {};
    data.email = params.get("email");
    data.name = params.get("name");
    data.roles = params.get("roles");
    data.notifications = params.get("notifications");
    data.token = params.get("token");
    dispatch(login(data));
    addCookie(data.token, "auth");
    toast.success(`Bienvenido de vuelta ${data.name}`);
    toast.onChange((v) => {
      if (v.status === "removed" && !data.response) {
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="authCallback">
      <AuthCallbackTemplate />
    </div>
  );
};

export default AuthCallback;
