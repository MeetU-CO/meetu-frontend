import { ISpanPoppins } from "./ISpanPoppins";

import "./SpanPoppins.scss";

const SpanPoppins = ({ text }: ISpanPoppins) => {
  return <span className="spanPoppins">{text}</span>;
};

export default SpanPoppins;
