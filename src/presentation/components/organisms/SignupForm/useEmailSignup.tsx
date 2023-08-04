import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Auth } from "../../../../modules/auth/domain/Auth";

import { signup } from "../../../../modules/auth/application/Signup";
import { addCookie } from "../../../../modules/cookie/application/addCookie";

import { createMongoDBAuthRepository } from "../../../../modules/auth/infrastructure/MongoDBAuthRepository";
import { login as loginSlice } from "../../../../modules/auth/infrastructure/slices/AuthSlice";
import { createUniversalCookieRepository } from "../../../../modules/cookie/infrastructure/UniversalCookieRepository";

const useEmailSignup = () => {
  const cookieRepository = createUniversalCookieRepository();
  const authRepository = createMongoDBAuthRepository();

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false);

  const handleEmailSignup = async (values: Auth) => {
    setLoading(true);
    const res = await signup(authRepository, values);
    if (res.token) {
      dispatch(loginSlice(res));
      addCookie(cookieRepository, { name: "auth", data: res.token });
      toast.success("Cuenta creada con éxito", {
        onClose: () => navigate(0),
      });
    } else {
      toast.error("Ocurrió un error, intenta de nuevo");
    }
    setLoading(false);
  };

  return { loading, handleEmailSignup };
};

export default useEmailSignup;
