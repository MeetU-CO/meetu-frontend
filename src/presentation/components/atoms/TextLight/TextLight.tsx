import "./TextLight.scss";

interface ITextLight {
  text: string;
  textAlign: "center" | "left" | "right";
}

const TextLight = ({ text, textAlign }: ITextLight) => {
  return (
    <div className="textLight" style={{ textAlign }}>
      {text}
    </div>
  );
};

export default TextLight;
