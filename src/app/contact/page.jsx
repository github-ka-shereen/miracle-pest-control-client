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

export const metadata = {
  title: 'Contact Us - Get In Touch Today',
  description:
    'Get in touch for a consultation with qualified lawyer, we are ready to assist.',
  keywords:
    'Bulawayo Lawyer, Bulawayo Lawyers, Legal Consultation, Legal Services Bulawayo, Calderwood Contact Information, Bulawayo Law Firm',
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
            <div className='md:flex md:items-center mt-5 gap-5'>
              <Input
                type='text'
                id='name'
                placeholder='Full Name'
                className='mb-5 md:mb-0 rounded-none'
              />
              <Input
                type='email'
                className='rounded-none'
                id='email'
                placeholder='Enter Your Email'
              />
            </div>
            <Input
              className='mt-5 rounded-none'
              type='text'
              id='subject'
              placeholder='Phone Number'
            />
            <Input
              className='mt-5 rounded-none'
              type='text'
              id='subject'
              placeholder='Subject'
            />
            <div className='mt-5'>
              <Select>
                <SelectTrigger className='rounded-none'>
                  <SelectValue placeholder='Select Product/ Service' />
                </SelectTrigger>
                <SelectContent className='rounded-none'>
                  <SelectItem value='Fumigation'>
                    Fumigation Services
                  </SelectItem>
                  <SelectItem value='Pest Control'>Pest Control</SelectItem>
                  <SelectItem value='Termite Control'>
                    Termite Control
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Textarea
              className='mt-5 rounded-none'
              placeholder='Type your message here...'
            />

            <button
              className='py-2 px-6 font-normal tracking-wide 
              border align-middle text-center bg-miracles mt-8
               text-white inline-flex items-center gap-1'
            >
              Send Message
              <BiNavigation width={16} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
