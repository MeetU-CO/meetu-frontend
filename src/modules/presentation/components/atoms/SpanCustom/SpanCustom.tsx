import "./SpanCustom.scss";

interface ISpanCustom {
  text: string;
  style: React.CSSProperties;
}

const SpanCustom = ({ text, style }: ISpanCustom) => {
  return (
    <p className="spanCustom" style={style}>
      {text}
    </p>
  );
};

export default SpanCustom;
