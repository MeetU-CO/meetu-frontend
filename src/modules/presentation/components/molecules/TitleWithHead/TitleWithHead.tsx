import TitleH3 from "../../atoms/TitleH3/TitleH3";

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
      <TitleH3
        title={head}
        width="85%"
        fontSize="19px"
        color="var(--orange-color)"
        textAlign={textAlign}
        fontFamily="'Lato', sans-serif"
        fontWeight="500"
        margin="20px 0"
      />
      <h2>{title}</h2>
    </div>
  );
};

export default TitleWithHead;
