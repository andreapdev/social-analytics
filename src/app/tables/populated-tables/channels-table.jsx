
import { fetchSocialMediaChannels } from "@/app/infrastructure/interactions-repository";
import BaseChannelTable from "@/components/tables/base-channel-table";

async function setTableData() {
  return await fetchSocialMediaChannels();
}


export default async function PopulatedChannelsTable() {
  const items = await setTableData();
  const count = await items.length;

  return (
    <BaseChannelTable items={items} count={count} />
  )
}
