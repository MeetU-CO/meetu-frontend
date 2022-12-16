import { Link } from "react-router-dom";

import CategoryCardTitle from "../../atoms/CategoryCardTitle/CategoryCardTitle";
import CategoryCardImg from "../../atoms/ImageAbsoulute/ImageAbsolute";

import { ICategory } from "./ICategory";

import "./CategoryCard.scss";

const CategoryCard = ({
  categoryTitle,
  imgUrl,
  width,
  top,
  left,
  categoryColor,
  titleColor,
  cardWidth,
}: ICategory) => {
  return (
    <Link
      to="/signup"
      className="categoryCard"
      style={{ backgroundColor: categoryColor, width: cardWidth }}
    >
      <CategoryCardImg imgUrl={imgUrl} width={width} top={top} left={left} />
      <CategoryCardTitle
        categoryTitle={categoryTitle}
        titleColor={titleColor}
      />
    </Link>
  );
};

export default CategoryCard;
