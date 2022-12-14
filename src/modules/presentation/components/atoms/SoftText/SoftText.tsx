import "./SoftText.scss";

interface ISoftText {
  text: string;
}

const SoftText = ({ text }: ISoftText) => {
  return <p className="softText">{text}</p>;
};

export default SoftText;
