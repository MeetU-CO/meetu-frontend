import { ITitleH3Bold } from "./ITitleH3Bold";

import "./TitleH3Bold.scss";

const TitleH3Bold = ({ title, color, textAlign }: ITitleH3Bold) => {
  return (
    <h3 className="titleH3Bold" style={{ color, textAlign }}>
      {title}
    </h3>
  );
};

export default TitleH3Bold;
