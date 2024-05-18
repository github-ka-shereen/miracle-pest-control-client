import React from 'react';
import {
  BiMap,
  BiMessageAlt,
  BiNavigation,
  BiPhone,
  BiTime,
} from 'react-icons/bi';

import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import PageBanner from '@/components/PageBanner';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { HomeParallaxContact } from '@/components/HomeParallaxContact';

export const metadata = {
  title: 'Contact Us - Miracle Pest Control',
  description:
    'Get in touch with Miracle Pest Control in Johannesburg for all your pest management needs. Our expert team is ready to assist you with professional pest control services, including termite control, fumigation, and more. Contact us today to schedule an appointment or to get a free quote.',
  keywords: [
    'contact Miracle Pest Control',
    'pest control contact',
    'Johannesburg pest control',
    'pest management services',
    'termite control contact',
    'fumigation contact',
    'schedule pest control',
    'pest control quote',
    'pest control appointment',
    'professional pest control',
    'residential pest control',
    'commercial pest control',
    'eco-friendly pest control',
  ],
};


const Contact = () => {
  return (
    <>
      <PageBanner pageName='contact' headerText='Contact Information' />

      <div className='container lg:mt-10 xl:px-20 mx-auto'>
        <div className='grid grid-cols-1 gap-10 xl:grid-cols-12 md:grid-cols-2'>
          <div className='xl:col-span-5 lg:col-span-2 flex flex-col xl:flex-col lg:flex-row gap-5'>
            <div className='flex flex-col gap-5'>
              <h2 className='text-miracles text-3xl tracking-[0.02px] font-bold'>
                Our Office
              </h2>
              <div className='flex items-center gap-2'>
                <div className='mt-1'>
                  <BiMap className='text-2xl fill-current text-miracles' />
                </div>
                <p className='text-gray-600 text-md xl:text-lg'>
                  13 Munich Roodepoort, Johannesburg
                </p>
              </div>
              <div className='flex items-center gap-2'>
                <div className='mt-1'>
                  <BiPhone className='text-2xl fill-current text-miracles' />
                </div>
                <p className='text-gray-600 text-md xl:text-lg'>
                  Phone: +27 781 800 671
                </p>
              </div>
              <div className='flex items-center gap-2'>
                <div className='mt-1'>
                  <BiMessageAlt className='text-2xl fill-current text-miracles' />
                </div>
                <p className='text-gray-600 text-md xl:text-lg'>
                  Email: info@mpce.co.za
                </p>
              </div>
            </div>
            <div className='xl:mt-5 flex text-gray-600 flex-col gap-3'>
              <h2 className='text-miracles text-3xl font-bold'>
                Business Hours
              </h2>
              <div className='flex items-center gap-4'>
                <BiTime className='text-2xl text-miracles' />
                <p> Monday - Friday - 8am to 5pm</p>
              </div>
              <div className='flex items-center gap-4'>
                <BiTime className='text-2xl text-miracles' />
                <p> Saturday - 8am to 4pm</p>
              </div>
              <div className='flex items-center gap-4'>
                <BiTime className='text-2xl text-miracles' />
                <p> Sunday - 8am to 4pm</p>
              </div>
            </div>
          </div>

          <div className='lg:col-span-7 mb-16'>
            <h2 className='text-miracles text-3xl font-bold'>Get in Touch</h2>
            <p className='text-gray-600 mt-2'>How may we help you?</p>
           <HomeParallaxContact/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
