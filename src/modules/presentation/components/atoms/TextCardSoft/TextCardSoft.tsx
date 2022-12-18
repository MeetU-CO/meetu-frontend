import "./TextCardSoft.scss";

interface ITextCardSoft {
  text: string;
}

const TextCardSoft = ({ text }: ITextCardSoft) => {
  return <div className="textCardSoft">{text}</div>;
};

export default TextCardSoft;
