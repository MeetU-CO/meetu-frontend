import "./TitleH1.scss";

interface ITitleH1 {
  title: string;
  color: string;
  textAlign: "center" | "left" | "right";
}

const TitleH1 = ({ title, color, textAlign }: ITitleH1) => {
  return (
    <h1 className="titleH1" style={{ color, textAlign }}>
      {title}
    </h1>
  );
};

export default TitleH1;
