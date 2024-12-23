
import BasePostTable from "@/components/tables/base-post-table";

export default async function PopulatedPostsTable({posts}) {
  const count = await posts.length;

  return (
    <BasePostTable items={posts} count={count} />
  )
}
