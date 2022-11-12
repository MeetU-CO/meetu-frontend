import "./SmallComplementaryText.scss";

interface ISmallComplementaryText {
  text: string;
  style: React.CSSProperties;
}

const SmallComplementaryText = ({ text, style }: ISmallComplementaryText) => {
  return (
    <p className="smallComplementaryText" style={style}>
      {text}
    </p>
  );
};

export default SmallComplementaryText;
