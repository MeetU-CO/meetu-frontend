import React from "react";
import "./ProfileButton.scss";

const ProfileButton = () => {
  return (
    <button className="profileButton">
      <span className="profileButton__icon material-icons">account_circle</span>
    </button>
  );
};

export default ProfileButton;
