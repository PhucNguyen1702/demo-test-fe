import { NftCollections } from "@/components/content/nft-collections";
import NftDropsCalendar from "@/components/content/nft-calendar/nft-calendar";
import { NftPromotion } from "@/components/content/nft-promation";

export default function Content() {
  return (
    <div className="flex flex-col gap-3 md:gap-8 lg:gap-12 pb-6 md:pb-8 lg:pb-12 mr-3">
      <NftCollections />

      <div className="flex flex-wrap gap-6 md:gap-8 items-stretch px-4 md:px-12 xl:px-[236px]">
        <div className="flex-1 min-w-[200px] flex flex-col">
          <NftDropsCalendar />
        </div>
        <div className="flex-1 min-w-[200px] flex flex-col">
          <NftPromotion />
        </div>
      </div>
    </div>
  );
}
