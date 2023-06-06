import Span from "../../atoms/Span/Span";

import { IOfferDetails } from "./IOfferDetails";

import "./OfferDetails.scss";

const OfferDetails = ({ categoryName }: IOfferDetails) => {
  return (
    <div className="offerDetails">
      <Span text={categoryName} />
    </div>
  );
};

export default OfferDetails;
