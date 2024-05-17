'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { commercial, headerLinks, services } from '../../../../constants';
import { cn } from '@/lib/utils';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';

const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className='xl:flex-between flex w-full flex-col items-start gap-4 lg:gap-10 xl:flex-row'>
      <li>
        <NavigationMenu>
          <NavigationMenuList>
            {headerLinks.map((link) => {
              const isActive = pathname === link.route;
              return (
                <NavigationMenuItem key={link.id}>
                  <Link href={link.route} legacyBehavior passHref>
                    <NavigationMenuTrigger
                      className={cn(
                        'bg-transparent text-miraclep text-md',
                        isActive && 'bg-muted text-[0f172a]'
                      )}
                    >
                      {link.label}
                    </NavigationMenuTrigger>
                  </Link>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>
      </li>
    </ul>
  );
};

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className='text-sm font-medium leading-none'>{title}</div>
            <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  }
);
ListItem.displayName = 'ListItem';
export default NavItems;
