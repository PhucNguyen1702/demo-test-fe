import { NftCollections } from "@/components/content/nft-collections";
import NftDropsCalendar from "@/components/content/nft-calendar/nft-calendar";
import { NftPromotion } from "@/components/content/nft-promation";

export default async function Content() {
  return (
    <div className="flex flex-col gap-8 ">
      <NftCollections />
      <div className="flex flex-wrap gap-8 px-[236px] py-[40px]">
        <div className="flex-1 min-w-[600px]">
          <NftDropsCalendar />
        </div>
        <div className="flex-1 min-w-[240px]">
          <NftPromotion />
        </div>
      </div>
    </div>
  );
}
