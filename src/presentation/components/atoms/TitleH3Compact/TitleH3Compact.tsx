import { ITitleH3Compact } from "./ITitleH3Compact";

import "./TitleH3Compact.scss";

const TitleH3Compact = ({ title, color, textAlign }: ITitleH3Compact) => {
  return (
    <h3 className="titleH3Compact" style={{ color, textAlign }}>
      {title}
    </h3>
  );
};

export default TitleH3Compact;
