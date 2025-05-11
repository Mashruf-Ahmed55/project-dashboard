'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { ChevronLeft, ChevronRight, Edit, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';

// Sample data
const initialStores = [
  {
    id: 1,
    name: 'Patriotic Buys',
    logo: '/placeholder.svg?height=40&width=40',
    address: 'Maplebpo',
    phone: '01737300325',
    email: 'patrioticbuys@maplebpo.com',
  },
  {
    id: 2,
    name: 'TotalSkinStore.com',
    logo: '/placeholder.svg?height=40&width=40',
    address: 'Florida',
    phone: '01737300325',
    email: 'totalskinstore@maplebpo.com',
  },
  {
    id: 3,
    name: 'Cambridge Capital',
    logo: '/placeholder.svg?height=40&width=40',
    address: 'Florida',
    phone: '01674602600',
    email: 'cambridgecapital@maplebpo.com',
  },
  {
    id: 4,
    name: 'AffordableEssentials',
    logo: '/placeholder.svg?height=40&width=40',
    address: 'Florida',
    phone: 'affordableessentials@maplebpo.com',
    email: 'affordableessentials@maplebpo.com',
  },
  {
    id: 5,
    name: 'MRS BARGAIN LLC',
    logo: '/placeholder.svg?height=40&width=40',
    address: 'Florida',
    phone: '01674602600',
    email: 'walmart@maplebpo.com',
  },
];

export function StoreList() {
  const [stores, setStores] = useState(initialStores);
  const [searchTerm, setSearchTerm] = useState('');
  const [entriesPerPage, setEntriesPerPage] = useState('10');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter stores based on search term
  const filteredStores = stores.filter((store) =>
    Object.values(store).some((value) =>
      value.toString().toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Calculate pagination
  const totalPages = Math.ceil(
    filteredStores.length / Number.parseInt(entriesPerPage)
  );
  const startIndex = (currentPage - 1) * Number.parseInt(entriesPerPage);
  const paginatedStores = filteredStores.slice(
    startIndex,
    startIndex + Number.parseInt(entriesPerPage)
  );

  const handleEdit = (id: number) => {
    console.log(`Edit store with id: ${id}`);
    // Implement edit functionality
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this store?')) {
      setStores(stores.filter((store) => store.id !== id));
    }
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-700">Store List</h2>

      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Show</span>
          <Select value={entriesPerPage} onValueChange={setEntriesPerPage}>
            <SelectTrigger className="w-[80px]">
              <SelectValue placeholder="10" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5</SelectItem>
              <SelectItem value="10">10</SelectItem>
              <SelectItem value="25">25</SelectItem>
              <SelectItem value="50">50</SelectItem>
            </SelectContent>
          </Select>
          <span className="text-sm text-gray-500">entries</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500">Search:</span>
          <Input
            type="search"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-[250px]"
          />
        </div>
      </div>

      <div className="rounded-md border overflow-hidden">
        <Table className="shadow-none">
          <TableHeader>
            <TableRow className="bg-gray-100">
              <TableHead className="w-[50px] font-semibold">SL</TableHead>
              <TableHead className="font-semibold">Name</TableHead>
              <TableHead className="font-semibold">Logo</TableHead>
              <TableHead className="font-semibold">Address</TableHead>
              <TableHead className="font-semibold">Phone</TableHead>
              <TableHead className="font-semibold">Email</TableHead>
              <TableHead className="font-semibold text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {paginatedStores.map((store, index) => (
              <TableRow key={store.id} className="hover:bg-gray-50">
                <TableCell className="font-medium">
                  {startIndex + index + 1}
                </TableCell>
                <TableCell>{store.name}</TableCell>
                <TableCell>
                  <Image
                    src={store.logo ? store.logo : '/default-store.png'}
                    alt={`${store.name} logo`}
                    className="w-10 h-10 rounded-md object-cover border p-1"
                    width={40}
                    height={40}
                  />
                </TableCell>
                <TableCell>{store.address}</TableCell>
                <TableCell>{store.phone}</TableCell>
                <TableCell>{store.email}</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 px-2 text-blue-600 border-blue-200 hover:bg-blue-50"
                      onClick={() => handleEdit(store.id)}
                    >
                      <Edit className="h-4 w-4 mr-1" />
                      Edit
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="h-8 px-2 text-red-600 border-red-200 hover:bg-red-50"
                      onClick={() => handleDelete(store.id)}
                    >
                      <Trash2 className="h-4 w-4 mr-1" />
                      Delete
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <div>
          Showing {startIndex + 1} to{' '}
          {Math.min(
            startIndex + Number.parseInt(entriesPerPage),
            filteredStores.length
          )}{' '}
          of {filteredStores.length} entries
        </div>

        <div className="flex items-center gap-1">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="h-8"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="ml-1">Previous</span>
          </Button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? 'default' : 'outline'}
              size="sm"
              onClick={() => setCurrentPage(page)}
              className="h-8 w-8 p-0"
            >
              {page}
            </Button>
          ))}

          <Button
            variant="outline"
            size="sm"
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="h-8"
          >
            <span className="mr-1">Next</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
