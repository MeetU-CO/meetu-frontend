import React from "react";
import "./CategoryCardImg.scss";
import { ICategoryCardImg } from "./ICategoryCardImg";

const CategoryCardImg = ({ categoryImgUrl }: ICategoryCardImg) => {
  return <img src={categoryImgUrl} alt="" srcSet="" className="categoryCard-img" />;
};

export default CategoryCardImg;
