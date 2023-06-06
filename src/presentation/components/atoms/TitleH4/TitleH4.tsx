import { ITitleH4 } from "./ITitleH4";

import "./TitleH4.scss";

const TitleH4 = ({ title, color, textAlign }: ITitleH4) => {
  return (
    <h4 className="titleH4" style={{ color, textAlign }}>
      {title}
    </h4>
  );
};

export default TitleH4;
