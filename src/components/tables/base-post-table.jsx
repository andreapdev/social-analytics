"use client"

import { HStack, Heading, Stack, Table } from "@chakra-ui/react"
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@/components/chakra-ui/pagination"
import { useState } from "react"
import Card from "../atomic/atoms/card"
import { formatDateTime } from "@/utils/format-date"

export default function BasePostTable({count, items}) {
  const [page, setPage] = useState(1)
  const pageSize = 5


  const startRange = (page - 1) * pageSize
  const endRange = startRange + pageSize

  const visibleItems = items.slice(startRange, endRange)

  return (
    <Card>
    <Stack gap="4">
      <Stack>
      <Heading size="xl">Posts overview</Heading>
       <Table.Root size="sm" variant="outline" striped>
         <Table.Header>
           <Table.Row>
             <Table.ColumnHeader>ID</Table.ColumnHeader>
             <Table.ColumnHeader>Channel</Table.ColumnHeader>
             <Table.ColumnHeader>Date</Table.ColumnHeader>
             <Table.ColumnHeader>Impressions</Table.ColumnHeader>
             <Table.ColumnHeader>Comments</Table.ColumnHeader>
             <Table.ColumnHeader>Likes</Table.ColumnHeader>
             <Table.ColumnHeader>Shares</Table.ColumnHeader>
             <Table.ColumnHeader>Saved</Table.ColumnHeader>
             <Table.ColumnHeader>Follower impact</Table.ColumnHeader>
             <Table.ColumnHeader>Clicks</Table.ColumnHeader>
           </Table.Row>
         </Table.Header>
         <Table.Body>
           {visibleItems.map((item) => (
             <Table.Row key={item.id}>
               <Table.Cell>{item.channelId}</Table.Cell>
               <Table.Cell>{item.channelName}</Table.Cell>
               <Table.Cell>{formatDateTime(item.createdAt)}</Table.Cell>
               <Table.Cell>{item.impressionNumber}</Table.Cell>
               <Table.Cell>{item.commentNumber}</Table.Cell>
               <Table.Cell>{item.likeNumber}</Table.Cell>
               <Table.Cell>{item.shareNumber}</Table.Cell>
               <Table.Cell>{item.saveNumber}</Table.Cell>
               <Table.Cell>{item.followerImpact}</Table.Cell>
               <Table.Cell>{item.clickNumber}</Table.Cell>
             </Table.Row>
           ))}
         </Table.Body>
       </Table.Root>
      </Stack>

      <PaginationRoot
        page={page}
        count={count}
        pageSize={pageSize}
        onPageChange={(e) => setPage(e.page)}
      >
        <HStack>
          <PaginationPrevTrigger />
          <PaginationItems />
          <PaginationNextTrigger />
        </HStack>
      </PaginationRoot>
    </Stack>
    </Card>
  );
}