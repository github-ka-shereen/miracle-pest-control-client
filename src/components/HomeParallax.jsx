import { BiPhone } from "react-icons/bi";

export const HomeParallax = () => {
  return (
    <div className='flex items-center gap-2 justify-center h-40 bg-fixed bg-parallax bg-cover'>
      <BiPhone className='w-10 h-10 hidden lg:flex text-white' />
      <div className='flex flex-col items-center'>
        <p className='lg:text-3xl text-xl p-5 text-center text-white'>
          Call Today For A Free Estimate
        </p>
        <p className='lg:text-3xl -mt-2 text-xl text-white'>+27 839 991 839</p>
      </div>
    </div>
  );
};
