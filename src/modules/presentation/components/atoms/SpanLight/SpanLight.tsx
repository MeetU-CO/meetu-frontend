import { ISpanLight } from "./ISpanLight";

import "./SpanLight.scss";

const SpanLight = ({ text }: ISpanLight) => {
  return <span className="spanLight">{text}</span>;
};

export default SpanLight;
