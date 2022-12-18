import { ITitleH3Light } from "./ITitleH3Light";

import "./TitleH3Light.scss";

const TitleH3Light = ({ title, color, textAlign }: ITitleH3Light) => {
  return (
    <h3 className="titleH3Light" style={{ color, textAlign }}>
      {title}
    </h3>
  );
};

export default TitleH3Light;
