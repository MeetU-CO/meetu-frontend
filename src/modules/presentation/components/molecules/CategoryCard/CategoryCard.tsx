import { Link } from "react-router-dom";

import CategoryCardImg from "../../atoms/ImageAbsoulute/ImageAbsolute";
import CategoryCardTitle from "../../atoms/TitleH3Color/TitleH3Color";

import { ICategory } from "./ICategory";

import "./CategoryCard.scss";

const CategoryCard = ({ title, img, categoryColor, cardWidth }: ICategory) => {
  return (
    <Link
      to="/signup"
      className="categoryCard"
      style={{ backgroundColor: categoryColor, width: cardWidth }}
    >
      <CategoryCardImg
        url={img.url}
        width={img.width}
        top={img.top}
        left={img.left}
      />
      <CategoryCardTitle
        title={title.title}
        color={title.color}
        width="90%"
        fontSize="25px"
        justifyContent="flex-end"
        fontFamily="'Poppins', sans-serif"
        fontWeight="500"
        margin="0"
      />
    </Link>
  );
};

export default CategoryCard;
