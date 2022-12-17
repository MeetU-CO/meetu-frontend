import { ITitleH3 } from "./ITitleH3";

import "./TitleH3.scss";

const TitleH3 = ({ title, ...rest }: ITitleH3) => {
  return (
    <h3 className="titleH3" style={{ ...rest }}>
      {title}
    </h3>
  );
};

export default TitleH3;
