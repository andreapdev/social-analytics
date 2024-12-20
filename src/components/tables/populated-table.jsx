"use client"

import { HStack, Heading, Stack, Table } from "@chakra-ui/react"
import {
  PaginationItems,
  PaginationNextTrigger,
  PaginationPrevTrigger,
  PaginationRoot,
} from "@/components/chakra-ui/pagination"
import { useState } from "react"

const pageSize = 5
const items = [
  { id: 1, name: "Laptop", category: "Electronics", price: 999.99 },
  { id: 2, name: "Coffee Maker", category: "Home Appliances", price: 49.99 },
  { id: 3, name: "Desk Chair", category: "Furniture", price: 150.0 },
  { id: 4, name: "Smartphone", category: "Electronics", price: 799.99 },
  { id: 5, name: "Headphones", category: "Accessories", price: 199.99 },
  { id: 6, name: "Tablet", category: "Electronics", price: 999.99 },
  { id: 7, name: "Toaster", category: "Home Appliances", price: 49.99 },
  { id: 8, name: "Table", category: "Furniture", price: 150.0 },
  { id: 9, name: "Switch", category: "Electronics", price: 799.99 },
  { id: 10, name: "Smartwatch", category: "Accessories", price: 199.99 },
  { id: 11, name: "Mouse", category: "Accessories", price: 199.99 },
]
const count = items.length;


export default function PopulatedTable() {
  const [page, setPage] = useState(1)

  const startRange = (page - 1) * pageSize
  const endRange = startRange + pageSize

  const visibleItems = items.slice(startRange, endRange)

  return (
    <Stack gap="4">
      <Stack>
      <Heading size="xl">Products</Heading>
       <Table.Root size="sm" variant="outline" striped>
         <Table.Header>
           <Table.Row>
             <Table.ColumnHeader>Product</Table.ColumnHeader>
             <Table.ColumnHeader>Category</Table.ColumnHeader>
             <Table.ColumnHeader textAlign="end">Price</Table.ColumnHeader>
           </Table.Row>
         </Table.Header>
         <Table.Body>
           {visibleItems.map((item) => (
             <Table.Row key={item.id}>
               <Table.Cell>{item.name}</Table.Cell>
               <Table.Cell>{item.category}</Table.Cell>
               <Table.Cell textAlign="end">{item.price}</Table.Cell>
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
  )
}
