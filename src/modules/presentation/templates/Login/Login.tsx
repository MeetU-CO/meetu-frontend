import Blob1 from "../../assets/Blobs/Blob1.svg";
import Blob2 from "../../assets/Blobs/Blob2.svg";

import LoginForm from "../../components/organisms/LoginForm/LoginForm";

import { IBlob } from "../LayoutBlobs/IBlob";
import LayoutBlobs from "../LayoutBlobs/LayoutBlobs";
import "./Login.scss";

const Login = () => {
  const layoutBlobs: IBlob[] = [
    {
      id: "blob1",
      src: Blob1,
      top: "0",
      bottom: "",
      right: "",
      left: "0",
      width: "600px",
      zIndex: "",
    },
    {
      id: "blob2",
      src: Blob2,
      top: "",
      bottom: "0",
      right: "0",
      left: "",
      width: "700px",
      zIndex: "",
    },
  ];

  return (
    <div className="login-template">
      <LayoutBlobs blobs={layoutBlobs} maxWidth="100%">
        <LoginForm />
      </LayoutBlobs>
    </div>
  );
};

export default Login;
