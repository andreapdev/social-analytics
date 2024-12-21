
import { fetchSocialMediaChannels } from "@/app/infrastructure/interactions-repository";
import BaseChannelTable from "@/components/tables/base-channel-table";

async function setTableData(filterId) {
  return await fetchSocialMediaChannels(filterId);
}

export default async function PopulatedChannelsTable({filterId}) {
  const items = await setTableData(filterId);
  const count = await items.length;

  return (
    <BaseChannelTable items={items} count={count} />
  )
}
