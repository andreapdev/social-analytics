import ImpressionsByChannel from "./charts/impressions-by-channel";
import LikesByPost from "./charts/likes-by-day";
import FollowersOverTime from "./charts/followers-over-time";
import SharesByChannel from "./charts/shares-by-channel";
import FilterMenu from "@/components/atomic/molecules/filter-menu";
import ClicksByDay from "./charts/clicks-by-day";
import CommentsByDay from "./charts/comments-by-day";

export default async function Page(props) {
  const searchParams = await props.searchParams;
  const filterId = searchParams?.channel || '';

  return (
    <div className="min-h-screen font-[family-name:var(--font-barlow)] p-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-auto gap-5">
        <ImpressionsByChannel channelId={filterId} className="p-3 lg:p-10 lg:row-span-2"/>
        <LikesByPost channelId={filterId} className="p-3 lg:p-10" />
        <FollowersOverTime channelId={filterId} className="p-3 lg:p-10" />
        <ClicksByDay channelId={filterId} className="p-3 lg:p-10" />
        <CommentsByDay channelId={filterId} className="p-3 lg:p-10 col-start-1" />
        <SharesByChannel channelId={filterId} className="p-3 lg:p-10 lg:row-span-2 lg:row-start-3 lg:col-start-2" />
      </div>
      <FilterMenu />
    </div>
  )
}