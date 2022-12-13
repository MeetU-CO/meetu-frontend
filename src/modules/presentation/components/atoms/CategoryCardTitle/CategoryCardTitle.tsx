import "./CategoryCardTitle.scss";
import { ICategoryCardTitle } from "./ICategoryCardTitle";

const CategoryCardTitle = ({
  categoryTitle,
  titleColor,
}: ICategoryCardTitle) => {
  return (
    <h3 className="categoryCard-title" style={{ color: titleColor }}>
      {categoryTitle}
    </h3>
  );
};

export default CategoryCardTitle;
