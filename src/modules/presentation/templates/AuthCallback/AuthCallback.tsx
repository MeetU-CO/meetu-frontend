import AnimatedTick from "../../components/atoms/AnimatedTick/AnimatedTick";
import TitleH1 from "../../components/atoms/TitleH1/TitleH1";

import "./AuthCallback.scss";

interface IAuthCallback {}

const AuthCallback = ({}: IAuthCallback) => {
  return (
    <div className="authCallback">
      <TitleH1
        title={"Inicio de sesión exitoso"}
        color={"var(--black-full-color)"}
        textAlign={"center"}
      />
      <AnimatedTick />
    </div>
  );
};

export default AuthCallback;
