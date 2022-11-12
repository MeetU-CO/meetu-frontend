import React from "react";
import "./SmallDescriptionText.scss";

interface ISmallDescriptionText {
  description: (string | JSX.Element)[];
  fontSize: string;
}

const SmallDescriptionText = ({
  description,
  fontSize,
}: ISmallDescriptionText) => {
  return (
    <p className="smallDescriptionText" style={{ fontSize }}>
      {description}
    </p>
  );
};

export default SmallDescriptionText;
