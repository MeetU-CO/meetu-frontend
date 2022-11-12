import React from "react";
import "./ActionButton.scss";

interface IActionButton {
  type: "button" | "submit" | "reset";
  text: string;
}

const ActionButton = ({ type, text }: IActionButton) => {
  return (
    <button type={type} className="actionButton">
      {text}
    </button>
  );
};

export default ActionButton;
