"use client"

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { getChannelInfo } from '@/app/infrastructure/interactions-repository';
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "@/components/chakra-ui/menu"

export default function FilterMenu() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  function handleFilter(value) {
    const params = new URLSearchParams(searchParams);
    if (value>0) {
      params.set('channel', value);
    } else {
      params.delete('channel');
    }
    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div>
    <MenuRoot onSelect={(e) => {handleFilter(e.value)}}>
      <MenuTrigger asChild>
        <div className="p-1 bg-primary text-secondary rounded-full flex flex-col justify-center items-center shadow-lg shadow-slate-900 w-16 h-16 cursor-pointer">
          <i className="material-symbols-outlined text-3xl">filter_alt</i>
          <div className="text-xs">Filter</div>
        </div>
      </MenuTrigger>

      <MenuContent>
        {Object.entries(getChannelInfo()).map(([id, { name }]) => (
          <MenuItem key={id} value={id}>
            {name}
          </MenuItem>
        ))}
        <MenuItem value="0">
          Restore
        </MenuItem>
      </MenuContent>
    </MenuRoot>
    </div>
  )
}