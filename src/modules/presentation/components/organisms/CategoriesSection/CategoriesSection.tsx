import TitleH2 from "../../atoms/TitleH2/TitleH2";

import CategoryCard from "../../molecules/CategoryCard/CategoryCard";
import { ICategory } from "../../molecules/CategoryCard/ICategory";

import "./CategoriesSection.scss";

interface ICategoriesSection {
  sectionTitle: string;
  categories: ICategory[];
}

const CategoriesSection = ({
  sectionTitle,
  categories,
}: ICategoriesSection) => {
  return (
    <div className="categoriesSection">
      <TitleH2
        title={sectionTitle}
        color={"var(--black-full-color)"}
        textAlign={"center"}
      />
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
