"use client";

import Image from "next/image";
import { PATH_IMAGE } from "@/constants";
import "./style.scss";

export default function HotNftAndPromotion() {
  const boxes = [
    {
      title: "HOT NFT",
      image: PATH_IMAGE.NFT_HOT,
    },
    {
      title: "PROMOTION",
      image: PATH_IMAGE.NFT_PROMOTION,
    },
  ];

  return (
    <section className="flex gap-8">
      {boxes.map((box, idx) => (
        <div key={idx} className="flex flex-col gap-4">
          <h2 className="text-yellow-400 mb-4 font-bold italic text-xl leading-none">
            {box.title}
          </h2>

          <div className="relative w-[240px] aspect-square rounded-2xl overflow-hidden group shadow-xl transition-all duration-700">
            <Image
              src={box.image}
              alt={box.title}
              width={240}
              height={240}
              className="object-cover w-full h-full group-hover:scale-105"
            />

            <div className="absolute inset-0 rounded-2xl shimmer"></div>

            <div className="absolute inset-0 rounded-2xl ring-2 ring-[#FFC700]/50 animate-pulse"></div>
          </div>
        </div>
      ))}
    </section>
  );
}
