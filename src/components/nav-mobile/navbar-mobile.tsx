"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { PATH_IMAGE, PATH_PAGE } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MENU_ITEMS = [
  { label: "HOME", href: PATH_PAGE.HOME },
  { label: "ITEMS 1", href: PATH_PAGE.ITEMS1 },
  { label: "ITEMS 2", href: PATH_PAGE.ITEMS2 },
  { label: "ITEMS 3", href: PATH_PAGE.ITEMS3 },
  { label: "ITEMS 4", href: PATH_PAGE.ITEMS4 },
];

export default function NavbarMobile() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Header */}
      <div className="w-full">
        <div className="flex items-center justify-between px-5 pt-5 pb-4 gap-4">
          <div className="flex items-center gap-4">
            <button onClick={() => setOpen(!open)}>
              <Image
                src={open ? PATH_IMAGE.CLOSED : PATH_IMAGE.MENU}
                width={36}
                height={36}
                alt="Toggle Menu"
              />
            </button>
            <Image src={PATH_IMAGE.LOGO} width={72} height={39} alt="Logo" />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <Link
              href={PATH_PAGE.SIGN_UP}
              className="bg-yellow-400 hover:bg-[#C79B12] text-black italic font-bold px-6 py-2 rounded-full"
            >
              SIGN UP
            </Link>
            <Link
              href={PATH_PAGE.LOGIN}
              className="border border-[#FFC700] hover:border-[#FFE8AB] italic text-white font-bold px-6 py-2 rounded-full"
            >
              LOG IN
            </Link>
          </div>
        </div>
      </div>

      {/* Overlay menu */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: open ? "0%" : "100%" }}
        transition={{ duration: 0.3 }}
        className="w-full h-screen bg-[#191919] z-[1001] flex flex-col py-8"
      >
        <nav className="flex flex-col items-center justify-center">
          <ul className="w-full">
            {MENU_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.label} className="mb-4">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block w-full text-center py-3 text-lg font-bold uppercase tracking-wide rounded-full transition
                      ${
                        isActive
                          ? "bg-[#282828] text-[#FFD600]"
                          : "text-[#E5E5E5] hover:bg-[#282828] hover:text-[#FFD600]"
                      }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </motion.div>
    </>
  );
}
