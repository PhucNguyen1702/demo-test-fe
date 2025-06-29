"use client";
import Image from "next/image";
import { PATH_IMAGE } from "@/constants";

const FOOTER_COLUMNS = [
  {
    title: "ABOUT US",
    items: [
      { label: "Careers", href: "#" },
      { label: "Company Details", href: "#" },
      { label: "Terms & Conditions", href: "#" },
      { label: "Help center", href: "#" },
      { label: "Privacy Policy", href: "#" },
      { label: "Affiliate", href: "#" },
    ],
  },
  {
    title: "PRODUCTS",
    items: [
      { label: "NFT Marketplace", href: "#" },
      { label: "Slingshot", href: "#" },
      { label: "Swaps", href: "#" },
      { label: "NFT Launchpad", href: "#" },
      { label: "Runes Platform", href: "#" },
      { label: "Creator Dashboard", href: "#" },
    ],
  },
  {
    title: "RESOURCES",
    items: [
      { label: "Support", href: "#" },
      { label: "API", href: "#" },
      { label: "Feature Requests", href: "#" },
      { label: "Trust & Safety", href: "#" },
      { label: "Sitemap", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#181818] py-10 px-6 md:px-12 xl:px-[236px]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {FOOTER_COLUMNS.map((col) => (
          <div key={col.title}>
            <h4 className="font-bold italic text-white mb-3 uppercase">
              {col.title}
            </h4>
            <ul className="space-y-1 text-[#E5E5E5]">
              {col.items.map((item) => (
                <li key={item.label}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h4 className="font-bold italic text-white mb-3 uppercase">
            Contact Us
          </h4>
          <ul className="space-y-1 text-[#E5E5E5]">
            <li>support@tech.email</li>
            <li>affiliate@tech.com</li>
          </ul>
          <div className="mt-4">
            <button className="flex items-center gap-2 bg-[#232A36] px-5 py-2 rounded-lg shadow hover:bg-[#2c3646] transition">
              <Image
                src={PATH_IMAGE.INSTALL_APP}
                alt="App Icon"
                width={28}
                height={28}
                className="object-contain"
              />
              <span className="text-white font-semibold">Install App</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
