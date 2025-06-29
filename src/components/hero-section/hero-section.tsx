import { Header } from "../layouts";
import { HeroCarousel } from "./hero-carousel";
import { HeroItems } from "@/components/hero-section/hero-items";

export default async function HeroSection() {
  return (
    <div className="relative  w-full bg-cover bg-center bg-no-repeat pb-[80px]">
      <Header />
      <HeroCarousel />
      <HeroItems />
    </div>
  );
}
