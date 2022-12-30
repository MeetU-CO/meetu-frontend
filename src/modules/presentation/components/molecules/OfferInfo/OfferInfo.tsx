import TextNormal from "../../atoms/TextNormal/TextNormal";
import TitleH3Compact from "../../atoms/TitleH3Compact/TitleH3Compact";

import { IOfferInfo } from "./IOfferInfo";

import "./OfferInfo.scss";

const OfferInfo = ({ title, text }: IOfferInfo) => {
  return (
    <div className="offerInfo">
      <TitleH3Compact title={title} color={"#000"} textAlign={"center"} />
      <div className="offerInfo__description">
        <TextNormal text={text} textAlign={"left"} />
      </div>
    </div>
  );
};

export default OfferInfo;
