import "./TitleH1Bold.scss";

interface ITitleH1Bold {
  title: string;
  color: string;
  textAlign: "center" | "left" | "right";
}

const TitleH1Bold = ({ title, color, textAlign }: ITitleH1Bold) => {
  return (
    <h1 className="titleH1Bold" style={{ color, textAlign }}>
      {title}
    </h1>
  );
};

export default TitleH1Bold;
