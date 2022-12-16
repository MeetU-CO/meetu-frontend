import SecondTitle from "../../atoms/SecondTitle/SecondTitle";

import CategoryCard from "../../molecules/CategoryCard/CategoryCard";
import { ICategory } from "../../molecules/CategoryCard/ICategory";

import "./CategoriesSection.scss";

interface ICategoriesSection {
  sectionTitle: (string | JSX.Element)[];
  categories: ICategory[];
}

const CategoriesSection = ({
  sectionTitle,
  categories,
}: ICategoriesSection) => {
  return (
    <div className="categoriesSection">
      <SecondTitle title={sectionTitle} fontSize={"26"} />
      <div className="categoriesSection__grid-container">
        {categories.map((i, index) => (
          <CategoryCard
            img={i.img}
            title={i.title}
            categoryColor={i.categoryColor}
            cardWidth={i.cardWidth}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoriesSection;
