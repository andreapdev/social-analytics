import ImpressionsByChannel from "./charts/impressions-by-channel";
import LikesByDay from "./charts/likes-by-day";
import FollowersOverTime from "./charts/followers-over-time";
import SharesByChannel from "./charts/shares-by-channel";
import FilterMenu from "@/components/atomic/molecules/filter-menu";
import ClicksByDay from "./charts/clicks-by-day";
import CommentsByDay from "./charts/comments-by-day";
import { fetchSocialMediaInfo, getChannelInfo } from "@/app/infrastructure/interactions-repository";

export default async function Page(props) {
  const searchParams = await props.searchParams;
  const filterId = searchParams?.channel || '';
  const posts = await fetchSocialMediaInfo('post', 'GET', filterId);
  const channels = await fetchSocialMediaInfo('channel', 'GET', filterId);

  return (
    <div className="min-h-screen font-[family-name:var(--font-barlow)] p-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-auto gap-5">
        <ImpressionsByChannel posts={posts} channelInfo={getChannelInfo()} className="p-3 lg:p-10 lg:row-span-2"/>
        <LikesByDay posts={posts} channelInfo={getChannelInfo()} className="p-3 lg:p-10" />
        <FollowersOverTime channels={channels} channelInfo={getChannelInfo()} className="p-3 lg:p-10" />
        <ClicksByDay posts={posts} channelInfo={getChannelInfo()} className="p-3 lg:p-10" />
        <CommentsByDay posts={posts} channelInfo={getChannelInfo()} className="p-3 lg:p-10 col-start-1" />
        <SharesByChannel posts={posts} channelInfo={getChannelInfo()} className="p-3 lg:p-10 lg:row-span-2 lg:row-start-3 lg:col-start-2" />
      </div>

      <div className="sticky bottom-5 flex justify-end">
        <FilterMenu />
      </div>
    </div>
  )
}