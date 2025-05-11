import { UsersTable } from '@/components/main/userTable';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container mx-auto py-10 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Users</h1>
        <Link href="/user/users/new">
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" />
            Add User
          </Button>
        </Link>
      </div>

      <UsersTable />
    </div>
  );
}
