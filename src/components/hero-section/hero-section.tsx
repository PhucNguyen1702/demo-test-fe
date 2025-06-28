import { Header } from "../layouts";
import Image from "next/image";
import { PATH_IMAGE } from "@/constants";

export default async function HeroSection() {
  return (
    <div className="relative h-screen w-full bg-cover bg-center bg-no-repeat">
      <Header />
      <Image
        src={PATH_IMAGE.SECTION_BG}
        alt="section"
        width={1600}
        height={450}
      />
    </div>
  );
}
