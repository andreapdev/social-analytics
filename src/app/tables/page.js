import PopulatedChannelsTable from "@/app/tables/populated-tables/channels-table";
import PopulatedPostsTable from "./populated-tables/posts-table";
import FilterMenu from "@/components/atomic/molecules/filter-menu";
import CreateForm from "@/components/atomic/organisms/create-form";
import { fetchSocialMediaInfo } from "@/app/infrastructure/interactions-repository";


export default async function Page(props) {
  const searchParams = await props.searchParams;
  const filterId = searchParams?.channel || '';
  const posts = await fetchSocialMediaInfo('post', 'GET', filterId);
  const channels = await fetchSocialMediaInfo('channel', 'GET', filterId);

  return (
    <div className="p-5 flex flex-col gap-5">
      <PopulatedChannelsTable channels={channels}/>
      <PopulatedPostsTable posts={posts} />
      <FilterMenu />
      <CreateForm />
    </div>
  )
}