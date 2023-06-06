import { IOfferDetails } from "../../molecules/OfferDetails/IOfferDetails";
import { IOfferFooter } from "../../molecules/OfferFooter/IOfferFooter";
import { IOfferHeader } from "../../molecules/OfferHeader/IOfferHeader";
import { IOfferInfo } from "../../molecules/OfferInfo/IOfferInfo";

export interface IOffer extends IOfferHeader, IOfferDetails, IOfferInfo, IOfferFooter {}
