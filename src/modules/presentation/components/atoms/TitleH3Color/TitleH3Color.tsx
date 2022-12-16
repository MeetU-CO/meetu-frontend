import { ITitleH3Color } from "./ITitleH3Color";

import "./TitleH3Color.scss";

const TitleH3Color = ({ title, color }: ITitleH3Color) => {
  return (
    <h3 className="titleH3Color" style={{ color }}>
      {title}
    </h3>
  );
};

export default TitleH3Color;
