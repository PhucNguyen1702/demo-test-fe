import { NftCollections } from "@/components/content/nft-collections";
import NftDropsCalendar from "@/components/content/nft-calendar/nft-calendar";
import { NftPromotion } from "@/components/content/nft-promation";

export default async function Content() {
  return (
    <div className="flex flex-col lg:gap-8 sm:gap-0 md:pb-0 sm:pb-0 lg:pb-12 ">
      <NftCollections />

      <div className="flex flex-wrap gap-8 p-[12px] md:px-12 xl:px-[236px] min-h-[296px]">
        <div className="flex-1 basis-0 min-w-[300px] md:min-w-[600px]">
          <NftDropsCalendar />
        </div>
        <div className="flex-1 basis-0 min-w-[300px]">
          <NftPromotion />
        </div>
      </div>
    </div>
  );
}
