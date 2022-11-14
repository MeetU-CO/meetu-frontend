import React from "react";
import SignupForm from "../../components/organisms/SignupForm/SignupForm";
import LayoutBlobs from "../LayoutBlobs/LayoutBlobs";
import "./Signup.scss";

const Signup = () => {
  return (
    <div className="signup-template">
      <LayoutBlobs>
        <SignupForm />
      </LayoutBlobs>
    </div>
  );
};

export default Signup;
