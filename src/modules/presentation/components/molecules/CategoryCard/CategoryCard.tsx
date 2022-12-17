import { Link } from "react-router-dom";

import ImageAbsolute from "../../atoms/ImageAbsoulute/ImageAbsolute";
import TitleH3 from "../../atoms/TitleH3/TitleH3";

import { ICategory } from "./ICategory";

import "./CategoryCard.scss";

const CategoryCard = ({ title, img, categoryColor, cardWidth }: ICategory) => {
  return (
    <Link
      to="/signup"
      className="categoryCard"
      style={{ backgroundColor: categoryColor, width: cardWidth }}
    >
      <ImageAbsolute
        url={img.url}
        width={img.width}
        top={img.top}
        left={img.left}
      />
      <TitleH3
        title={title.title}
        color={title.color}
        width="90%"
        fontSize="25px"
        textAlign="right"
        fontFamily="'Poppins', sans-serif"
        fontWeight="500"
        margin="0"
      />
    </Link>
  );
};

export default CategoryCard;
