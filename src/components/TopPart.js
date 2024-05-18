import {
  BiEnvelopeOpen,
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
  BiSolidPhone,
} from 'react-icons/bi';

const TopPart = () => {
  return (
    <div className='hidden h-[50px] bg-miracles lg:block w-full'>
      <div className='grid grid-cols-3 px-10 py-2 items-center text-white cursor-pointer'>
        <div className='flex text-lg space-x-6'>
          <div className='flex items-center  hover:-translate-y-1 transition duration-300'>
            <BiSolidPhone className='w-6 h-6' />
            <p>+27781800671</p>
          </div>
          <div className='flex items-center  gap-1 hover:-translate-y-1 transition duration-300'>
            <BiEnvelopeOpen className='w-6 h-6 ' />
            <p>info@mpce.co.za</p>
          </div>
          <div className='flex items-center '>
            <BiLogoInstagramAlt className='w-8 h-8 hover:-translate-y-1 transition duration-300' />
          </div>
          <div className='flex items-center  hover:-translate-y-1 transition duration-300'>
            <BiLogoFacebookCircle className='w-8 h-8' />
          </div>
          <div className='flex items-center hover:-translate-y-1 transition duration-300'>
            <BiLogoLinkedinSquare className='w-8 h-8' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopPart;
