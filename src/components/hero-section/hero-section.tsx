import { PATH_IMAGE } from "@/constants";
import { Header } from "../layouts";

export default async function HeroSection() {
  return (
    <div
      style={{
        backgroundImage: `url(${PATH_IMAGE.SECTION_BG})`,
      }}
      className="relative h-screen w-full bg-cover bg-center bg-no-repeat"
    >
      <Header />
    </div>
  );
}
