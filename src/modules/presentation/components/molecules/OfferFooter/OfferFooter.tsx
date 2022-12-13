import "./OfferFooter.scss";
import PostPayment from "../../atoms/PostPayment/PostPayment";
import { IOfferFooter } from "./IOfferFooter";

const OfferFooter = ({ payment }: IOfferFooter) => {
  return (
    <div className="offerFooter">
      <PostPayment payment={payment} />
    </div>
  );
};

export default OfferFooter;
