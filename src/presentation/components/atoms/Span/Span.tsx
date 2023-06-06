import { ISpan } from "./ISpan";

import "./Span.scss";

const Span = ({ text }: ISpan) => {
  return <span className="span">{text}</span>;
};

export default Span;
