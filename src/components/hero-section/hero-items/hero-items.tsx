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
    <div
      className="
        flex justify-between items-center
        bg-[#1F1F1F] py-6 px-4 md:px-12 xl:px-[236px]
        w-full max-w-[1600px] min-w-[300px] mx-auto
      "
    >
      {MENU_ITEMS.map((item, index) => (
        <div
          key={index}
          className="
            flex flex-col items-center flex-1
            cursor-pointer transition-transform duration-300 hover:scale-105 group
            min-w-0
          "
        >
          <div
            className="
              relative
              w-[clamp(32px,8vw,64px)]
              h-[clamp(32px,8vw,64px)]
            "
          >
            <Image
              src={item.icon}
              alt={item.label}
              fill
              className="object-contain"
            />
            {item.isNew && (
              <span className="absolute -top-2 -right-3 bg-red-600 text-white text-[10px] md:text-xs px-1 rounded">
                NEW
              </span>
            )}
          </div>
          <span
            className="
  mt-1
  text-[10px] sm:text-xs md:text-sm xl:text-base
  text-center text-white
  group-hover:text-yellow-400
  transition-colors duration-300
  break-words
  max-w-[80px] sm:max-w-[90px] md:max-w-[100px] xl:max-w-[120px]
"
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}
