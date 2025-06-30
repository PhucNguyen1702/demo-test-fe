"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import Image from "next/image";
import Link from "next/link";
import { PATH_IMAGE } from "@/constants";
import { useState } from "react";
import "./style.scss";

export default function HeroCarousel() {
  const banners = [
    {
      src: PATH_IMAGE.SECTION_BG,
      href: "/about-us",
      alt: "About Us - Hero Banner",
    },
    {
      src: PATH_IMAGE.SECTION_BG,
      href: "/services",
      alt: "Our Services Banner",
    },
    {
      src: PATH_IMAGE.SECTION_BG,
      href: "/contact",
      alt: "Contact Page Banner",
    },
    {
      src: PATH_IMAGE.SECTION_BG,
      href: "/blog",
      alt: "Blog Hero Image",
    },
    {
      src: PATH_IMAGE.SECTION_BG,
      href: "/careers",
      alt: "Careers Opportunities Banner",
    },
    {
      src: PATH_IMAGE.SECTION_BG,
      href: "/faq",
      alt: "FAQ Banner",
    },
  ];

  const [, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full">
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
        className="w-full h-[110px] sm:h-[180px] md:h-[450px] lg:h-[450px] xl:h-[450px]"
      >
        {banners.map((banner, index) => (
          <SwiperSlide key={index}>
            <Link href={banner.href} className="relative block w-full h-full">
              <Image
                src={banner.src}
                alt={banner.alt}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
