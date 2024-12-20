
import { fetchSocialMediaPosts } from "@/app/infrastructure/interactions-repository";
import BasePostTable from "@/components/tables/base-post-table";

async function setTableData() {
  return await fetchSocialMediaPosts();
}

export default async function PopulatedPostsTable() {
  const items = await setTableData();
  const count = await items.length;

  return (
    <BasePostTable items={items} count={count} />
  )
}
