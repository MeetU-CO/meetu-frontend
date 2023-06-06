import Span from "../../atoms/Span/Span";

import { IOfferFooter } from "./IOfferFooter";

import "./OfferFooter.scss";

const OfferFooter = ({ payment }: IOfferFooter) => {
  return (
    <div className="offerFooter">
      <Span text={payment} />
    </div>
  );
};

export default OfferFooter;
