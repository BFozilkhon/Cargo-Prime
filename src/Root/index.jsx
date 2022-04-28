import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./style.css";

// import required modules
import { Mousewheel, Pagination } from "swiper";
import Navbar from "../Components/Navbar";
import Opener from "../Components/Opener";
import Story from "../Components/Story";
import Services from "../Components/Services";
import Reason from "../Components/Reason";
import Result from "../Components/Result";
import Sponsor from "../Components/Sponsor";
import Think from "../Components/Think";
import Map from "../Components/Map";
import Qoute from "../Components/Quote";

export const Root = () => {
  return (
    <div>
      <Navbar />
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Opener />
        </SwiperSlide>
        <SwiperSlide>
          <Story />
        </SwiperSlide>
        <SwiperSlide>
          <Services />
        </SwiperSlide>
        <SwiperSlide>
          <Reason />
        </SwiperSlide>
        <SwiperSlide>
          <Result />
        </SwiperSlide>
        <SwiperSlide>
          <Sponsor />
        </SwiperSlide>
        <SwiperSlide>
          <Think />
        </SwiperSlide>
        <SwiperSlide>
          <Qoute />
        </SwiperSlide>
        <SwiperSlide>
          <Map />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Root;
