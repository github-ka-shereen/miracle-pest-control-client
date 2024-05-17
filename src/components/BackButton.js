'use client'
import React from 'react';
import { Button } from './ui/button';
import { BiArrowBack } from 'react-icons/bi';
import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();
  return (
    <Button
      onClick={router.back}
      size='lg'
      className='rounded-full transition hover:bg-[#3a749b] bg-[#0e629a]'
    >
      Go Back <BiArrowBack width={16} />
    </Button>
  );
};

export default BackButton;
