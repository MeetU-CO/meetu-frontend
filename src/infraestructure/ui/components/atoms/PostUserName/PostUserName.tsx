import React from "react";
import "./PostUserName.scss";

interface IPostUserName {
  userName: string;
}

const PostUserName = ({ userName }: IPostUserName) => {
  return <h4 className="postUserName">{userName}</h4>;
};

export default PostUserName;
