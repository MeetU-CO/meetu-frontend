import React from "react";
import "./OfferHeader.scss";
import PostType from "../../atoms/PostType/PostType";
import PostUserIcon from "../../atoms/PostUserIcon/PostUserIcon";
import PostUserName from "../../atoms/PostUserName/PostUserName";
import { IOfferHeader } from "./IOfferHeader";

const OfferHeader = ({ imgSrc, userName, type }: IOfferHeader) => {
  return (
    <div className="offerHeader">
      <div className="offerHeader__leftInfo">
        <PostUserIcon imgSrc={imgSrc} />
      </div>
      <div className="offerHeader__rightInfo">
        <PostUserName userName={userName} />
        <PostType type={type} />
      </div>
    </div>
  );
};

export default OfferHeader;
