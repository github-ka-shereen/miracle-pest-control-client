import Image from 'next/image';
import React from 'react';
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi';

const Footer = () => {
  const date = new Date();
  return (
    <footer className='min-w-full bg-miracles text-white'>
      <div className='container mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-10 '>
          <div className='flex justify-center items-center -mt-6'>
            <Image
              width={210}
              height={140}
              alt='Mircle Lawn logo'
              src='/miracle-pest-logo-2.png'
            />
          </div>

          <div className='flex gap-5 lg:text-start text-center flex-col'>
            <p className='text-3xl font-medium'>Location</p>
            <p className='font-light text-lg'>
              13 Munich<br></br>
              Roodepoort, <br></br> Johannesburg
            </p>
          </div>
          <div className='flex lg:text-start text-center gap-5 flex-col'>
            <p className='text-3xl font-medium'>Opening Hours</p>
            <p className='font-light text-lg'>
              Mon-Fri: 8am to 5pm<br></br>
              Saturday: 8am to 5pm
              <br></br> 8am to 5pm
            </p>
          </div>
          <div className='flex gap-5 items-center lg:items-start lg:text-start text-center flex-col'>
            <p className='text-3xl font-medium'>Contact Us</p>
            <p className='font-light text-xl'>
              +27 839 991 839<br></br>
              info@mpce.co.za
            </p>

            <div className='flex -mt-2 gap-2'>
              <div className='group cursor-pointer rounded-full duration-500  hover:bg-[#3b5a9a] flex justify-center transition-all items-center bg-white shadow-lg h-10 w-10'>
                <BiLogoFacebook className='transition-all duration-500 text-xl fill-current text-[#3b5a9a] group-hover:fill-current group-hover:text-white' />
              </div>
              <div className='group cursor-pointer rounded-full duration-500  hover:bg-[#0073b2] flex justify-center transition-all items-center bg-white shadow-lg h-10 w-10'>
                <BiLogoLinkedin className='transition-all duration-500 text-xl fill-current text-[#0073b2] group-hover:fill-current group-hover:text-white' />
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center'>
          <div className='text-center w-[85%] border-t border-t-[#ffffff37] '>
            <p className='mt-8 mb-1 font-light text-lg'>
              <a target='_blank' href='https://aewebsites.co.zw'>
                Designed By: AE Websites
              </a>
            </p>

            <p className='mb-[3rem] font-light text-lg'>
              AE Websites © {date.getFullYear()} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
