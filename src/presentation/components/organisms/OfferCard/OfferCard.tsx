import "./OfferCard.scss";
import OfferDetails from "../../molecules/OfferDetails/OfferDetails";
import OfferFooter from "../../molecules/OfferFooter/OfferFooter";
import OfferHeader from "../../molecules/OfferHeader/OfferHeader";
import OfferInfo from "../../molecules/OfferInfo/OfferInfo";
import { IOffer } from "./IOffer";
import { Link } from "react-router-dom";

const OfferCard = ({
  imgSrc,
  userName,
  type,
  categoryName,
  title,
  text,
  payment,
}: IOffer) => {
  return (
    <Link to="/login" className="offerCard">
      <OfferHeader imgSrc={imgSrc} userName={userName} type={type} />
      <OfferDetails categoryName={categoryName} />
      <OfferInfo title={title} text={text} />
      <div className="offerCard__divisor-line"></div>
      <OfferFooter payment={payment} />
    </Link>
  );
};

export default OfferCard;
