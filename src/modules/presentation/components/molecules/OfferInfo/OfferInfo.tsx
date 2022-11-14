import React from "react";
import "./OfferInfo.scss";
import PostDescription from "../../atoms/PostDescription/PostDescription";
import PostTitle from "../../atoms/PostTitle/PostTitle";
import { IOfferInfo } from "./IOfferInfo";

const OfferInfo = ({ title, text }: IOfferInfo) => {
  return (
    <div className="offerInfo">
      <PostTitle title={title} />
      <PostDescription text={text} />
    </div>
  );
};

export default OfferInfo;
