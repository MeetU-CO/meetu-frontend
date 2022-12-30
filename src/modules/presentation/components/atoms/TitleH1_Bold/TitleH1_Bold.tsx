import "./TitleH1_Bold.scss";

interface ITitleH1_Bold {
  title: string;
  color: string;
  textAlign: "center" | "left" | "right";
}

const TitleH1_Bold = ({ title, color, textAlign }: ITitleH1_Bold) => {
  return (
    <h1 className="titleH1Bold" style={{ color, textAlign }}>
      {title}
    </h1>
  );
};

export default TitleH1_Bold;
