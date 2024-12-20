"use client"

import { useSearchParams, usePathname, useRouter } from 'next/navigation';
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
    <div className="fixed bottom-5 right-5">
    <MenuRoot onSelect={(e) => {handleFilter(e.value)}}>
      <MenuTrigger asChild>
        <div className="p-1 bg-secondary text-white rounded-full flex flex-col justify-center items-center shadow-lg shadow-slate-900 w-20 h-20">
          <i className="material-symbols-outlined text-3xl">filter_alt</i>
          <div className="text-xs">Filter</div>
        </div>
      </MenuTrigger>

      <MenuContent>
        <MenuItem value="1">
          Show Instagram
        </MenuItem>
        <MenuItem value="2">
          Show X
        </MenuItem>
        <MenuItem value="3">
          Tiktok
        </MenuItem>
        <MenuItem value="4">
          Facebook
        </MenuItem>
        <MenuItem value="5">
          Youtube
        </MenuItem>
        <MenuItem value="6">
          LinkedIn
        </MenuItem>
        <MenuItem value="0">
          Restore
        </MenuItem>
      </MenuContent>
    </MenuRoot>
    </div>
  )
}