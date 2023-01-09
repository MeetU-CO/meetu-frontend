import { ISpanPoppinsLight } from "./ISpanPoppinsLight";

import "./SpanPoppinsLight.scss";

const SpanPoppinsLight = ({ text }: ISpanPoppinsLight) => {
  return <span className="spanPoppinsLight">{text}</span>;
};

export default SpanPoppinsLight;
