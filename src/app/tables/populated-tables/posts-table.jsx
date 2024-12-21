
import { fetchSocialMediaPosts } from "@/app/infrastructure/interactions-repository";
import BasePostTable from "@/components/tables/base-post-table";

async function setTableData(filterId) {
  return await fetchSocialMediaPosts(filterId);
}

export default async function PopulatedPostsTable({filterId}) {
  const items = await setTableData(filterId);
  const count = await items.length;

  return (
    <BasePostTable items={items} count={count} />
  )
}
