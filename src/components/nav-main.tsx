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
import { items } from '@/constant';
import { cn } from '@/lib/utils';
import { ChevronRight, LayoutDashboard } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from './ui/collapsible';

export function NavMain() {
  const pathName = usePathname();
  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-muted-foreground">
        Menu Items
      </SidebarGroupLabel>
      <SidebarMenu>
        <Link href={'/'}>
          <SidebarMenuButton isActive={pathName === '/'} tooltip="Dashboard">
            <LayoutDashboard className="mr-2 h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium">Dashboard</span>
          </SidebarMenuButton>
        </Link>
        {items.map((item) => {
          const Icon = item.icons;

          return (
            <Collapsible
              open={openItem === item.title}
              onOpenChange={(isOpen) => setOpenItem(isOpen ? item.title : null)}
              key={item.title}
              asChild
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton tooltip={item.title}>
                    {Icon && (
                      <Icon className="mr-2 h-5 w-5 text-muted-foreground" />
                    )}
                    <span className="text-sm font-medium">{item.title}</span>
                    <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent className="pl-4 border-l border-border">
                  <SidebarMenuSub>
                    {item.items?.map((subItem) => {
                      const SubIcon = subItem.icon;
                      const isActive = pathName === subItem.url;

                      return (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton
                            asChild
                            isActive={isActive}
                            className={cn(
                              'group flex items-center gap-2 text-sm transition-colors',
                              isActive
                                ? 'bg-primary text-primary-foreground font-medium'
                                : 'hover:bg-accent hover:text-accent-foreground'
                            )}
                          >
                            <Link
                              href={subItem.url}
                              className="flex items-center gap-2 px-2 py-1.5 rounded-md w-full"
                            >
                              {SubIcon && (
                                <SubIcon
                                  className={cn(
                                    'h-4 w-4 transition-transform group-hover:animate-spin',
                                    isActive && 'animate-spin text-white'
                                  )}
                                />
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
