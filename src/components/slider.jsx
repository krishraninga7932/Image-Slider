import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import banner1 from "../assets/images/banner1.jpeg";
import banner2 from "../assets/images/banner2.jpeg";
import banner3 from "../assets/images/banner3.jpeg";
import banner4 from "../assets/images/banner4.jpeg";
import banner5 from "../assets/images/banner5.jpeg";

const Slider = () => {
  // image array
  const images = [
    {
      id: 1,
      image: banner1,
    },
    {
      id: 2,
      image: banner2,
    },
    {
      id: 3,
      image: banner3,
    },
    {
      id: 4,
      image: banner4,
    },
    {
      id: 5,
      image: banner5,
    },
  ];

  return (
    <>
      <Header />
      <section>
        {/* swiping the images */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true, }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="w-full xl:h-[600px]"
        >
          {images.map((img) => (
            <SwiperSlide key={img.id}>
              <img
                src={img.image}
                alt=""
                className="w-full xl:h-[600px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <Footer />
    </>
  );
};

export default Slider;
