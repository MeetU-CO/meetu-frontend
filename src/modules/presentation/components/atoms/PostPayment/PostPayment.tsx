import React from "react";
import { IOfferFooter } from "../../molecules/OfferFooter/IOfferFooter";
import "./PostPayment.scss";

const PostPayment = ({ payment }: IOfferFooter) => {
  return <span className="postPayment">{payment}</span>;
};

export default PostPayment;
