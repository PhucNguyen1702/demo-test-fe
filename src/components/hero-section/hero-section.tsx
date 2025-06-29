"use client";
import { Header } from "../layouts";
import { HeroCarousel } from "./hero-carousel";
import { HeroItems } from "@/components/hero-section/hero-items";
import NavbarMobile from "../nav-mobile/navbar-mobile";

export default function HeroSection() {
  return (
    <section className="relative w-full bg-cover bg-center bg-no-repeat pb-10 sm:pb-16 md:pb-20 lg:pb-24  ">
      <div className="hidden sm:block">
        <Header />
      </div>
      <div className="block sm:hidden">
        <NavbarMobile />
      </div>

      <div className="w-full">
        <HeroCarousel />
      </div>

      <div className="w-full">
        <HeroItems />
      </div>
    </section>
  );
}
