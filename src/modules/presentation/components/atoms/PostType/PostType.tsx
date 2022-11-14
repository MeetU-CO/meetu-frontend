import React from "react";
import "./PostType.scss";
import { TTypes } from "./TTypes";

interface IPostType {
  type: TTypes;
}

const PostType = ({ type }: IPostType) => {
  return <div className="postType">{type}</div>;
};

export default PostType;
