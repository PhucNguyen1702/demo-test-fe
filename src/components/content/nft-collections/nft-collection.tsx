"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { PATH_IMAGE } from "@/constants";

export default function NewNftCollections() {
  const nftItems = [
    PATH_IMAGE.NFT1,
    PATH_IMAGE.NFT2,
    PATH_IMAGE.NFT3,
    PATH_IMAGE.NFT4,
    PATH_IMAGE.NFT5,
    PATH_IMAGE.NFT6,
  ];

  return (
    <section
      className="
        w-full max-w-[1600px] min-w-[390px] mx-auto
        px-4 md:px-12 xl:px-[236px]
        min-h-[245px] md:min-h-[300px]
      "
    >
      <div className="flex flex-row items-center justify-between mb-6 relative">
        <h2 className="text-yellow-400 font-bold italic text-xl leading-none">
          NEW NFT COLLECTIONS
        </h2>

        <div className="flex gap-4">
          <button className="custom-swiper-button-prev group transition-all duration-300">
            <div className="rounded-full bg-[#333] flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_15px_#FFC700] group-hover:bg-[#FFC700]/20 transition-all duration-300">
              <Image
                src={PATH_IMAGE.ARROW_LEFT}
                alt="Prev"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
          </button>
          <button className="custom-swiper-button-next group transition-all duration-300">
            <div className="rounded-full bg-[#333] flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_15px_#FFC700] group-hover:bg-[#FFC700]/20 transition-all duration-300">
              <Image
                src={PATH_IMAGE.ARROW_RIGHT}
                alt="Next"
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1000}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        breakpoints={{
          0: { slidesPerView: 3.5, spaceBetween: 8 },
          480: { slidesPerView: 3.5, spaceBetween: 12 },
          768: { slidesPerView: 3.5, spaceBetween: 16 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
          1280: { slidesPerView: 5.5, spaceBetween: 20 },
        }}
      >
        {nftItems.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="
      relative w-full aspect-[3/4] overflow-hidden rounded-xl
      transition-transform duration-500 ease-in-out
      hover:-translate-y-3
      shadow-md hover:shadow-xl
      group
    "
            >
              <Image
                src={src}
                alt={`NFT ${idx + 1}`}
                fill
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              />

              <div className="absolute inset-0 rounded-xl ring-0 group-hover:ring-4 group-hover:ring-[#FFC700] transition-all duration-500 pointer-events-none"></div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
