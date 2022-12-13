import "./PostsSection.scss";
import SecondTitle from "../../atoms/SecondTitle/SecondTitle";
import OfferCard from "../OfferCard/OfferCard";
import { IOffer } from "../OfferCard/IOffer";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import useWindowDimensions from "../../../../application/hooks/useWindowDimensions";

interface IPostSection {
  sectionTitle: (string | JSX.Element)[];
  posts: IOffer[];
}

const PostsSection = ({ sectionTitle, posts }: IPostSection) => {
  const { width } = useWindowDimensions();

  return (
    <section className="postSection">
      <div className="postSection__sectionTitle">
        <SecondTitle title={sectionTitle} fontSize={"26"} />
      </div>
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
