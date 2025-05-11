'use client';

import { stores } from '@/constant';
import { Codesandbox, PlusCircle } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';
import { ModeToggle } from '../mode-toggle';
import { Button } from '../ui/button';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { SidebarTrigger } from '../ui/sidebar';

export default function Header() {
  return (
    <header className="w-full sticky top-0 z-50 px-4 py-3 border-b border-border/40 backdrop-blur-md bg-background/80">
      <div className="flex items-center justify-between gap-4">
        <SidebarTrigger />

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-lg font-semibold font-montserrat text-muted-foreground">
            Welcome back, <span className="text-primary">User</span>
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <Link href={'/add-products'}>
            <Button size="sm" className="shadow-none">
              <PlusCircle className="h-4 w-4 font-bold" />
              Add Product
            </Button>
          </Link>
          <SelectStore />
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}

const SelectStore = () => {
  const [value, setValue] = useState<string>('totalSkinStore');

  return (
    <Select defaultValue={value} onValueChange={setValue}>
      <SelectTrigger className="w-[190px] shadow-none">
        <SelectValue placeholder="Select a Store" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel className="text-xs text-muted-foreground">
            Stores
          </SelectLabel>
          {stores.map((store) => (
            <SelectItem
              key={store.id}
              value={store.value}
              className="flex gap-2 items-center"
            >
              <Codesandbox className="h-4 w-4 text-muted-foreground" />
              <span>{store.label}</span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
