"use client";
import Image from "next/image";
import { PATH_IMAGE } from "@/constants";

export default function HeroItems() {
  const MENU_ITEMS = [
    { label: "FREE TO EARN", icon: PATH_IMAGE.CASH_BACK },
    { label: "RANKING", icon: PATH_IMAGE.SPORT_RACE },
    { label: "VIDEO-NFT", icon: PATH_IMAGE.LIVE },
    { label: "HOW TO BUY", icon: PATH_IMAGE.RACING },
    { label: "NEW NFTS", icon: PATH_IMAGE.LIVE_CASINO, isNew: true },
    { label: "ROADMAPS", icon: PATH_IMAGE.MINI_GAME },
  ];

  return (
    <div className="flex justify-center gap-[126px] bg-[#1F1F1F] py-8">
      {MENU_ITEMS.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center relative cursor-pointer transition-transform duration-300 hover:scale-105 group"
        >
          <div className="relative">
            <Image
              src={item.icon}
              alt={item.label}
              width={48}
              height={48}
              className="w-12 h-12"
            />
            {item.isNew && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-xs px-1 rounded transition-transform transition-shadow duration-300 group-hover:scale-110 group-hover:shadow-md">
                NEW
              </span>
            )}
          </div>
          <span className="mt-2 text-xs text-white group-hover:text-yellow-400 transition-colors duration-300">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
