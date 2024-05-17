'use client';
import { Separator } from '@/components/ui/separator';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { headerLinks } from '../../../../constants';
import { cn } from '@/lib/utils';

const MobileMenu = () => {
  const pathname = usePathname();
  return (
    <nav className='xl:hidden'>
      <Sheet>
        <SheetTrigger className='align-middle'>
          <Image
            src='/menu.svg'
            alt='tablet and mobile menu icon'
            width={40}
            height={40}
            className='cursor-pointer md:hidden'
          />
          <Image
            src='/menu.svg'
            alt='tablet and mobile menu icon'
            width={60}
            height={60}
            className='cursor-pointer hidden md:block'
          />
        </SheetTrigger>
        <SheetContent className='flex flex-col gap-6 bg-gray-100'>
          <Image
            width={200}
            height={50}
            alt='Miracle Lawn Company logo'
            src='/miracle-pest-control.png'
          />
          <Separator className=' bg-blue-200' />

          <ul className='flex w-full flex-col items-start gap-3'>
            {headerLinks.map((link) => {
              const isActive = pathname === link.route;

              return (
                <li
                  className='group relative p-medium-16 whitespace-nowrap'
                  key={link.id}
                >
                  <Link href={link.route}>
                    <p
                      className={cn(
                        `group-hover:text-[#0e629a] py-reverse
               text-xl font-medium text-gray-600 uppercase`,
                        isActive && `text-miraclep`
                      )}
                    >
                      <SheetPrimitive.Close>{link.label}</SheetPrimitive.Close>
                    </p>
                  </Link>

                  <div className={`${isActive && 'underline'} `} />
                </li>
              );
            })}
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileMenu;
