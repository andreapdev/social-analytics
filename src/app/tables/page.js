import PopulatedChannelsTable from "@/app/tables/populated-tables/channels-table";
import PopulatedPostsTable from "./populated-tables/posts-table";

export default function Page() {
  return (
      <div className="p-2.5">
        <PopulatedChannelsTable />
        <PopulatedPostsTable />
      </div>
  )
}