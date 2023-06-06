import ImageIconCircle from "../../atoms/ImageIconCircle/ImageIconCircle";
import SpanLight from "../../atoms/SpanLight/SpanLight";
import TitleH4 from "../../atoms/TitleH4/TitleH4";

import { IOfferHeader } from "./IOfferHeader";

import "./OfferHeader.scss";

const OfferHeader = ({ imgSrc, userName, type }: IOfferHeader) => {
  return (
    <div className="offerHeader">
      <div className="offerHeader__leftInfo">
        <ImageIconCircle imgSrc={imgSrc} />
      </div>
      <div className="offerHeader__rightInfo">
        <TitleH4 title={userName} color={"#000"} textAlign={"left"} />
        <SpanLight text={type} />
      </div>
    </div>
  );
};

export default OfferHeader;
