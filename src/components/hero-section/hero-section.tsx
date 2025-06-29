import { Header } from "../layouts";
import { HeroCarousel } from "./hero-carousel";
import { HeroItems } from "@/components/hero-section/hero-items";
import NavbarMobile from "../nav-mobile/navbar-mobile";

export default async function HeroSection() {
  return (
    <div className="relative  w-full bg-cover bg-center bg-no-repeat pb-[80px]">
      <div className="hidden sm:block">
        <Header />
      </div>
      <div className="block sm:hidden">
        <NavbarMobile />
      </div>
      <HeroCarousel />
      <HeroItems />
    </div>
  );
}
