"use client";

import Image from "next/image";
import { PATH_IMAGE } from "@/constants";
import "./style.scss";
import Link from "next/link";

export default function HotNftAndPromotion() {
  const boxes = [
    {
      title: "HOT NFT",
      image: PATH_IMAGE.NFT_HOT,
      href: "/nft/hot",
      alt: "nft-hot",
    },
    {
      title: "PROMOTION",
      image: PATH_IMAGE.NFT_PROMOTION,
      href: "/nft/promotion",
      alt: "nft-promotion",
    },
  ];

  return (
    <section className="flex flex-wrap gap-6 sm:gap-8">
      {boxes.map((box, idx) => (
        <div key={idx} className="flex flex-col items-start flex-1 gap-4">
          <h2 className="text-yellow-400 mb-1 font-bold italic text-xl leading-none">
            {box.title}
          </h2>
          <Link
            href={box.href}
            className="relative block w-full aspect-square group rounded-2xl overflow-hidden shadow-xl transition-all duration-700"
          >
            <div className="relative w-full  aspect-square rounded-2xl overflow-hidden group shadow-xl transition-all duration-700">
              <Image
                src={box.image}
                alt={box.alt}
                fill
                className="object-fill transition-transform duration-500 ease-in-out group-hover:scale-105"
              />

              <div className="absolute inset-0 shimmer"></div>
              <div className="absolute inset-0 ring-2 ring-[#FFC700]/50 animate-pulse"></div>
            </div>
          </Link>
        </div>
      ))}
    </section>
  );
}
