import React from "react";
import "./PostTitle.scss";

interface IPostTitle {
  title: string;
}

const PostTitle = ({ title }: IPostTitle) => {
  return <h3 className="postTitle">{title}</h3>;
};

export default PostTitle;
