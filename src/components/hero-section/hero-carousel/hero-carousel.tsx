"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { PATH_IMAGE } from "@/constants";
import "./swiper-pagination.scss";

export default function HeroCarousel() {
  const banners = [
    PATH_IMAGE.SECTION_BG,
    PATH_IMAGE.SECTION_BG,
    PATH_IMAGE.SECTION_BG,
    PATH_IMAGE.SECTION_BG,
    PATH_IMAGE.SECTION_BG,
    PATH_IMAGE.SECTION_BG,
  ];

  return (
    <div className="relative">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        className="relative w-full h-[450px]"
      >
        {banners.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={src}
                alt=""
                width={1600}
                height={450}
                className="object-cover w-full h-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
