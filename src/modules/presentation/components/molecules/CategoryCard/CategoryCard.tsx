import { Link } from "react-router-dom";

import CategoryCardImg from "../../atoms/CategoryCardImg/CategoryCardImg";
import CategoryCardTitle from "../../atoms/CategoryCardTitle/CategoryCardTitle";

import { ICategory } from "./ICategory";

import "./CategoryCard.scss";

const CategoryCard = ({
  categoryTitle,
  categoryImgUrl,
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
      <CategoryCardImg categoryImgUrl={categoryImgUrl} />
      <CategoryCardTitle
        categoryTitle={categoryTitle}
        titleColor={titleColor}
      />
    </Link>
  );
};

export default CategoryCard;
