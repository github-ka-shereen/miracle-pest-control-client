import TopPart from '@/components/TopPart';
import NavItems from './NavItems';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import MobileMenu from './MobileMenu';

const Header = () => {
  return (
    <>
      <TopPart />
      <nav className='sticky  w-full h-[60px] lg:h-[90px] bg-white top-0 z-20'>
        <div className='flex items-center justify-between'>
          <div className='lg:hidden ml-3'>
            <Image
              width={200}
              height={50}
              alt='Miracle Lawn Company logo'
              src='/miracle-pest-control.png'
            />
          </div>
          <div className='hidden lg:flex xl:hidden ml-3'>
            <Image
              width={300}
              height={50}
              alt='Miracle Lawn Company logo'
              src='/miracle-pest-control.png'
            />
          </div>
          <div className='mr-3'>
            <MobileMenu />
          </div>
        </div>
        <div className='flex items-center justify-between'>
          <div className='hidden xl:flex ml-10'>
            <Image
              width={300}
              height={100}
              alt='Miracle Lawn Company logo'
              src='/miracle-pest-control.png'
            />
          </div>

          <div className='hidden xl:flex gap-2'>
            <NavItems />
          </div>
          <div className='hidden xl:flex pr-20'>
            <Button
              size='lg'
              className='rounded-none border-2 bg-miracles text-white hover:bg-miraclep hover:border-miraclep'
            >
              Get A Quote !
            </Button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
