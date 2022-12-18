import TitleH2 from "../../atoms/TitleH2/TitleH2";
import TitleH3Light from "../../atoms/TitleH3Light/TitleH3Light";

import "./TitleWithHead.scss";

interface ITitleWithHead {
  head: string;
  title: string;
  align: "center" | "flex-start" | "flex-end";
  textAlign: "left" | "center" | "right";
}

const TitleWithHead = ({ head, title, align, textAlign }: ITitleWithHead) => {
  return (
    <div
      className="titleWithHead"
      style={{
        alignItems: align,
        textAlign: textAlign,
      }}
    >
      <TitleH3Light
        title={head}
        color="var(--orange-color)"
        textAlign={textAlign}
      />
      <TitleH2
        title={title}
        color={"var(--black-full-color)"}
        textAlign={textAlign}
      />
    </div>
  );
};

export default TitleWithHead;
