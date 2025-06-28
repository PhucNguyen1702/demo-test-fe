"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { PATH_IMAGE } from "@/constants";

export default function NftDropsCalendar() {
  const banners = [
    PATH_IMAGE.NFT_ClANDER,
    PATH_IMAGE.NFT_ClANDER,
    PATH_IMAGE.NFT_ClANDER,
  ];

  return (
    <section>
      <div className="flex items-center justify-between mb-4 relative">
        <h2 className="text-yellow-400 font-bold italic text-xl leading-none">
          NFT DROPS CALENDAR
        </h2>

        <div className="flex gap-4">
          <button className="custom-swiper-button-calender-prev group transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-[#333] flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_15px_#FFC700] group-hover:bg-[#FFC700]/20 transition-all duration-300">
              <Image
                src={PATH_IMAGE.ARROW_LEFT}
                alt="Prev"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
          </button>
          <button className="custom-swiper-button-calender-next group transition-all duration-300">
            <div className="w-10 h-10 rounded-full bg-[#333] flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_15px_#FFC700] group-hover:bg-[#FFC700]/20 transition-all duration-300">
              <Image
                src={PATH_IMAGE.ARROW_RIGHT}
                alt="Next"
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={1000}
        navigation={{
          nextEl: ".custom-swiper-button-calender-next",
          prevEl: ".custom-swiper-button-calender-prev",
        }}
      >
        {banners.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative group overflow-hidden rounded-2xl">
              <Image
                src={src}
                alt={`NFT Drop ${idx + 1}`}
                width={600}
                height={240}
                className="w-full h-auto object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />
              <div className="absolute inset-0 ring-4 ring-[#FFC700] opacity-50 group-hover:animate-pulse"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
