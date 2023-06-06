import "./TextNormal.scss";

interface ITextNormal {
  text: string;
  textAlign: "center" | "left" | "right";
}

const TextNormal = ({ text, textAlign }: ITextNormal) => {
  return (
    <div className="textNormal" style={{ textAlign }}>
      {text}
    </div>
  );
};

export default TextNormal;
