import ImpressionsByChannel from "./charts/impressions-by-channel";
import LikesByPost from "./charts/likes-by-post";
import FollowersOverTime from "./charts/followers-over-time";
import SharesByChannel from "./charts/shares-by-channel";

export default function Page() {
  return (
    <div className="min-h-screen max-w-full font-[family-name:var(--font-barlow)]">
      <div className="grid grid-cols-4 grid-rows-4 gap-5 p-4">
        <ImpressionsByChannel className="col-span-2 row-span-2"/>
        <LikesByPost channelId={1} className="col-span-2 col-start-3" />
        <LikesByPost channelId={2} className="col-span-2 col-start-3 row-start-2" />
        <FollowersOverTime channelId={1} className="col-span-2 col-start-1 row-start-3" />
        <FollowersOverTime channelId={4} className="col-span-2 col-start-1 row-start-4" />
        <SharesByChannel className="col-span-2 row-span-2 col-start-3 row-start-3" />
      </div>
    </div>
  )
}