import { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import TitleH2 from "../../atoms/TitleH2/TitleH2";

import useWindowDimensions from "../../../hooks/useWindowDimensions";
import { IOffer } from "../OfferCard/IOffer";
import OfferCard from "../OfferCard/OfferCard";
import "./PostsSection.scss";

interface IPostSection {
  sectionTitle: string;
  posts: IOffer[];
}

const PostsSection = ({ sectionTitle, posts }: IPostSection) => {
  const { width } = useWindowDimensions();

  return (
    <section className="postSection">
      <TitleH2
        title={sectionTitle}
        color={"var(--black-full-color)"}
        textAlign={"center"}
      />
      <Swiper
        slidesPerView={1}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          900: {
            slidesPerView: 2,
          },
          1250: {
            slidesPerView: 3,
          },
          1700: {
            slidesPerView: 4,
            slidesPerGroup: 2,
          },
        }}
        navigation={width <= 1000 ? false : true}
        modules={[Pagination, Navigation]}
        className="postSection__post-carrousel"
      >
        {posts.map((i, index) => (
          <SwiperSlide key={index}>
            <OfferCard
              imgSrc={i.imgSrc}
              userName={i.userName}
              type={"Presencial"}
              categoryName={i.categoryName}
              title={i.title}
              text={i.text}
              payment={i.payment}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PostsSection;
