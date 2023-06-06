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
      <div className="categoryCard__titleContainer">
        <TitleH3
          title={title.title}
          color={title.color}
          textAlign={title.textAlign}
        />
      </div>
    </Link>
  );
};

export default CategoryCard;
