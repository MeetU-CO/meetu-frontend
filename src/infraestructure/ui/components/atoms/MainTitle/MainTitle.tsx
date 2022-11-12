import React from "react";
import "./MainTitle.scss";

interface IMainTitle {
  title: (string | JSX.Element)[];
}

export const MainTitle = ({ title }: IMainTitle) => {
  return (
    <div className="mainTitle">
      <h1>{title}</h1>
    </div>
  );
};
