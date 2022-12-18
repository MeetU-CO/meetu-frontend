import "./TitleH1Big.scss";

interface ITitleH1Big {
  title: string;
  color: string;
  textAlign: "center" | "left" | "right";
}

const TitleH1Big = ({ title, color, textAlign }: ITitleH1Big) => {
  return (
    <h1 className="titleH1Big" style={{ color, textAlign }}>
      {title}
    </h1>
  );
};

export default TitleH1Big;
