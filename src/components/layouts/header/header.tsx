import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";

import { PATH_IMAGE, PATH_PAGE } from "@/constants";

export default function Header() {
  const navLinks = useMemo(() => {
    return [
      { title: "about", href: PATH_PAGE.ABOUT },
      { title: "games", href: PATH_PAGE.GAMES },
      { title: "partners", href: PATH_PAGE.PARTNERS },
      { title: "contact", href: PATH_PAGE.CONTACT },
    ];
  }, []);

  return (
    <>
      <header className="flex flex-row justify-between items-center pt-[1.25rem] px-[80px]">
        {/* logo */}
        <Link href={PATH_PAGE.HOME}>
          <Image src={PATH_IMAGE.LOGO} width={108} height={64} alt="Logo" />
        </Link>
        {/* nav */}
        <nav>
          <nav>
            <ul className="flex flex-row space-x-[2.3rem]">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    className="capitalize hover:underline font-bold"
                    href={link.href}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </nav>
      </header>
    </>
  );
}
