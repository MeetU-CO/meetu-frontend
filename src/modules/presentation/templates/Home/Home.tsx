import { ICategory } from "../../components/molecules/CategoryCard/ICategory";

import Carrousel from "../../components/organisms/Carrousel/Carrousel";
import CategoriesSection from "../../components/organisms/CategoriesSection/CategoriesSection";
import { IOffer } from "../../components/organisms/OfferCard/IOffer";
import PostsSection from "../../components/organisms/PostsSection/PostsSection";

import "./Home.scss";

interface IHome {
  carrouselSlides: JSX.Element[];
  categories: ICategory[];
  recentPosts: IOffer[];
}

const Home = ({ carrouselSlides, categories, recentPosts }: IHome) => {
  return (
    <div className="home-template">
      <Carrousel slides={carrouselSlides} />
      <CategoriesSection
        sectionTitle={["Categorías"]}
        categories={categories}
      />
      <PostsSection sectionTitle={["Ofertas recientes"]} posts={recentPosts} />
      <PostsSection sectionTitle={["Ofertas destacadas"]} posts={recentPosts} />
    </div>
  );
};

export default Home;
