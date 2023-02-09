import GreenCheck from "../../components/atoms/GreenCheck/GreenCheck";

import "./AuthCallback.scss";

interface IAuthCallback {}

const AuthCallback = ({}: IAuthCallback) => {
  return (
    <div className="authCallback">
      <GreenCheck />
    </div>
  );
};

export default AuthCallback;
