import Link from 'next/link';
import { BiChevronRight } from 'react-icons/bi';

const PageBanner = ({ pageName, headerText }) => {
  return (
    <div className='flex items-center justify-center mb-5  flex-col bg-[#fcefd4]'>
      <div className='flex uppercase items-center mt-10 mb-5'>
        <Link className='hover:text-primary text-lg' href='/'>
          Home
        </Link>
        <BiChevronRight className='text-3xl' />
        <p className='font-light text-lg'>{pageName}</p>
      </div>
      <div className='mb-10 px-2'>
        <h2 className='text-miracles text-4xl text-center md:text-[50px]'>
          {headerText}
        </h2>
      </div>
    </div>
  );
};

export default PageBanner;
