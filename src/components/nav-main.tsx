'use client';

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import {
  ChevronRight,
  CircleDashed,
  Cog,
  Gift,
  MonitorSmartphone,
  Store,
} from 'lucide-react';
import Link from 'next/link';
import { AiOutlineProduct } from 'react-icons/ai';
import { FaRegUserCircle } from 'react-icons/fa';
import { FaHandHoldingDollar } from 'react-icons/fa6';
import { MdOutlineReport, MdStorefront } from 'react-icons/md';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './ui/collapsible';

const items = [
  {
    title: 'User',
    icons: FaRegUserCircle,
    items: [
      {
        title: 'User List',
        url: '/dashboard/users',
        icon: CircleDashed,
      },
    ],
  },
  {
    title: 'Vendor Management',
    url: '#',
    icons: MdStorefront,
    items: [
      {
        title: 'Vandor List',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Purchase Order',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Purchase List',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Receive History',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Return to Vendor',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Return to Vendor List',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Vendor Payment',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Vendor Payment List',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Vendor Due',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Initial Stock Entry',
        url: '#',
        icon: CircleDashed,
      },
    ],
  },
  {
    title: 'Product Management',
    url: '#',
    icons: AiOutlineProduct,
    items: [
      {
        title: 'High GP',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Fast Moving',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Slow Moving',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Price Update',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Product List',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Product Category',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Print Barcode',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Bulk Upload',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Stock Value',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Current Stock',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Zero Stock',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Central Stock',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Central Zero Stock',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Expired Products',
        url: '#',
        icon: CircleDashed,
      },
    ],
  },
  {
    title: 'POS Management',
    url: '#',
    icons: MonitorSmartphone,
    items: [
      {
        title: 'Sales List',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Wastage Entry',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Wastage List',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Return form Customer',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Return List',
        url: '#',
        icon: CircleDashed,
      },
    ],
  },
  {
    title: 'Report',
    icons: MdOutlineReport,
    items: [
      {
        title: 'My Sales',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Sales Man Sales',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Summery Report',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Invoice Details Report',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Details Report',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Vendor Sale Report',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Purchase Report',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Card Expense',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Central Card Expense',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Vendor Due',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Custormer Due',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Custormer Ledger',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Invoice Due',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'VAT/TAX Report',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'VAT Challan',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Cashbook',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Central Profit Report',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Profit Report',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Promotions',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Central Promotions',
        url: '#',
        icon: CircleDashed,
      },
    ],
  },
  {
    title: 'Expense',
    icons: FaHandHoldingDollar,
    url: '#',
    items: [
      {
        title: 'Expense List',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Expense Entry',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Expense (All Stores)',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Expense Category',
        url: '#',
        icon: CircleDashed,
      },
    ],
  },
  {
    title: 'Gift Card',
    icons: Gift,
    url: '#',
    items: [
      {
        title: 'Git Card List',
        url: '#',
        icon: CircleDashed,
      },
    ],
  },
  {
    title: 'Settings',
    url: '#',
    icons: Cog,
    items: [
      {
        title: 'Warehouse List',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Tax Rules',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Payment Cards',
        url: '#',
        icon: CircleDashed,
      },
      {
        title: 'Unit List',
        url: '#',
        icon: CircleDashed,
      },
    ],
  },
  {
    title: 'Stores',
    icons: Store,
    items: [
      {
        title: 'Store List',
        url: '#',
        icon: CircleDashed,
      },
    ],
  },
];

export function NavMain() {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>Platform</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => {
          const Icon = item.icons;
          return (
            <Collapsible key={item.title} asChild className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.title}>
                    {Icon && <Icon />}
                    <span>{item.title}</span>
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {item.items?.map((subItem) => {
                      const Icon = subItem.icon;
                      return (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild className="group">
                            <Link href={subItem.url}>
                              {Icon && (
                                <Icon className="group-hover:animate-spin" />
                              )}
                              <span>{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      );
                    })}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
}
