"use client"

import { HStack, Heading, Stack, Table } from "@chakra-ui/react"
import {
  PaginationPageText,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@/components/chakra-ui/pagination"
import { useState } from "react"
import Card from "../atomic/atoms/card"
import { formatDateTime } from "@/utils/format-date"

export default function BaseChannelTable({count, items}) {
  const [page, setPage] = useState(1)
  const pageSize = 10


  const startRange = (page - 1) * pageSize
  const endRange = startRange + pageSize

  const visibleItems = items.slice(startRange, endRange)

  return (
    <Card extraClass="p-3 lg:p-10">
    <Stack gap="4">
      <Stack>
      <Heading size="xl">Follower overview</Heading>
      <Table.ScrollArea borderWidth="0" className="w-screen rounded-md">
       <Table.Root size="md" interactive>
         <Table.Header className="border-secondary border-solid border-b-2">
           <Table.Row>
             <Table.ColumnHeader>ID</Table.ColumnHeader>
             <Table.ColumnHeader>Channel</Table.ColumnHeader>
             <Table.ColumnHeader>Date</Table.ColumnHeader>
             <Table.ColumnHeader>Followers</Table.ColumnHeader>
           </Table.Row>
         </Table.Header>
         <Table.Body>
           {visibleItems.map((item) => (
             <Table.Row key={item.id}>
               <Table.Cell>{item.channelId}</Table.Cell>
               <Table.Cell>{item.channelName}</Table.Cell>
               <Table.Cell>{formatDateTime(item.createdAt)}</Table.Cell>
               <Table.Cell>{item.followerNumber}</Table.Cell>
             </Table.Row>
           ))}
         </Table.Body>
       </Table.Root>
       </Table.ScrollArea>
      </Stack>

      <PaginationRoot
        page={page}
        count={count}
        pageSize={pageSize}
        onPageChange={(e) => setPage(e.page)}
      >
        <HStack>
          <PaginationPrevTrigger />
          <PaginationPageText />
          <PaginationNextTrigger />
        </HStack>
      </PaginationRoot>
    </Stack>
    </Card>
  );
}
