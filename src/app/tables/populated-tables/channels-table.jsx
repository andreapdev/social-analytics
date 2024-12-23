import BaseChannelTable from "@/components/tables/base-channel-table";

export default async function PopulatedChannelsTable({channels}) {
  const count = await channels.length;

  return (
    <BaseChannelTable items={channels} count={count} />
  )
}
