import ImpressionsByChannel from "./charts/impressions-by-channel";
import LikesByPost from "./charts/likes-by-day";
import FollowersOverTime from "./charts/followers-over-time";
import SharesByChannel from "./charts/shares-by-channel";
import FilterMenu from "@/components/atomic/molecules/filter-menu";

export default async function Page(props) {
  const searchParams = await props.searchParams;
  const filterId = searchParams?.channel || '';

  return (
    <div className="min-h-screen max-w-full font-[family-name:var(--font-barlow)]">
      <div className="grid grid-cols-4 grid-rows-4 gap-5 p-4">
        <ImpressionsByChannel channelId={filterId} className="col-span-2 row-span-2"/>
        <LikesByPost channelId={filterId} className="col-span-2 col-start-3" />
        <FollowersOverTime channelId={filterId} className="col-span-2" />
        <SharesByChannel channelId={filterId} className="col-span-2 row-span-2" />
      </div>
      <FilterMenu />
    </div>
  )
}