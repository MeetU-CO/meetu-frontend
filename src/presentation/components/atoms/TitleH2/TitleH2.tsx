import "./TitleH2.scss";

interface ITitleH2 {
  title: string;
  color: string;
  textAlign: "center" | "left" | "right";
}

const TitleH2 = ({ title, color, textAlign }: ITitleH2) => {
  return (
    <h2 className="titleH2" style={{ color, textAlign }}>
      {title}
    </h2>
  );
};

export default TitleH2;
