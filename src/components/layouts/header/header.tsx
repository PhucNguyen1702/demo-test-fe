"use client";
import Image from "next/image";
import Link from "next/link";
import { PATH_IMAGE, PATH_PAGE } from "@/constants";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navLinks = [
    { title: "Home", href: PATH_PAGE.HOME },
    { title: "Items1", href: PATH_PAGE.ITEMS1 },
    { title: "Items2", href: PATH_PAGE.ITEMS2 },
    { title: "Items3", href: PATH_PAGE.ITEMS3 },
    { title: "Items4", href: PATH_PAGE.ITEMS4 },
  ];

  return (
    <header className="flex flex-row justify-between items-center py-5 px-10 bg-black">
      {/* Logo */}
      <Link href={PATH_PAGE.HOME} className="mr-6">
        <Image src={PATH_IMAGE.LOGO} width={72} height={39} alt="Logo" />
      </Link>

      {/* Nav */}
      <nav className="flex-1">
        <ul className="flex flex-row space-x-4">
          {navLinks.map((link, index) => {
            const isActive = pathname === link.href;

            return (
              <li key={index}>
                <Link
                  href={link.href}
                  className={`uppercase px-4 py-2 rounded-full transition-colors 
                ${isActive ? "bg-[#383A42] text-[#FFC700]" : "text-white hover:bg-[#383A42] hover:text-[#FFC700]"}`}
                >
                  {link.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      {/* Auth buttons */}
      <div className="flex flex-row items-center justify-end space-x-4">
        <Link
          href={PATH_PAGE.SIGN_UP}
          className="bg-yellow-400 hover:bg-[#C79B12]  text-black italic font-bold px-6 py-2 rounded-full"
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
    </header>
  );
}
