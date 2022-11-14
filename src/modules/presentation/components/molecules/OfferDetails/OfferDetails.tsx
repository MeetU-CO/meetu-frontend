import React from "react";
import "./OfferDetails.scss";
import PostCategory from "../../atoms/PostCategory/PostCategory";
import { IOfferDetails } from "./IOfferDetails";

const OfferDetails = ({ categoryName }: IOfferDetails) => {
  return (
    <div className="offerDetails">
      <PostCategory categoryName={categoryName} />
    </div>
  );
};

export default OfferDetails;
