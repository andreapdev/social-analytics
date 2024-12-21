import PopulatedChannelsTable from "@/app/tables/populated-tables/channels-table";
import PopulatedPostsTable from "./populated-tables/posts-table";
import FilterMenu from "@/components/atomic/molecules/filter-menu";

export default async function Page(props) {
  const searchParams = await props.searchParams;
  const filterId = searchParams?.channel || '';

  return (
    <div className="p-2.5">
      <PopulatedChannelsTable filterId={filterId}/>
      <PopulatedPostsTable filterId={filterId} />
      <FilterMenu />
    </div>
  )
}