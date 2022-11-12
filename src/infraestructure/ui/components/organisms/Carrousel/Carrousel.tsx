import React from "react";
import "./Carrousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
//Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface ICarrousel {
  slides: JSX.Element[];
}

const Carrousel = ({ slides }: ICarrousel) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: true }}
      pagination={{
        clickable: true,
      }}
      allowTouchMove={false}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="carrousel"
    >
      {slides.map((i, index) => (
        <SwiperSlide key={index}>{i}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carrousel;
