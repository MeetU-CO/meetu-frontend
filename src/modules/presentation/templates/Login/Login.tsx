import LoginForm from "../../components/organisms/LoginForm/LoginForm";
import LayoutBlobs from "../LayoutBlobs/LayoutBlobs";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login-template">
      <LayoutBlobs>
        <LoginForm />
      </LayoutBlobs>
    </div>
  );
};

export default Login;
