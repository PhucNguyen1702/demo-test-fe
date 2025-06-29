"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
import { PATH_IMAGE } from "@/constants";
import { useState } from "react";
import "./style.scss";

export default function HeroCarousel() {
  const banners = [
    PATH_IMAGE.SECTION_BG,
    PATH_IMAGE.SECTION_BG,
    PATH_IMAGE.SECTION_BG,
    PATH_IMAGE.SECTION_BG,
    PATH_IMAGE.SECTION_BG,
    PATH_IMAGE.SECTION_BG,
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        slidesPerView={1}
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        speed={2000}
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="relative w-full h-[450px]"
      >
        {banners.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full overflow-hidden">
              <div
                key={`kenburns-${index}-${
                  index === activeIndex ? Date.now() : ""
                }`}
                className="absolute inset-0 w-full h-full kenburns"
              >
                <Image
                  src={src}
                  alt={`Banner ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
