import { Skeleton } from '@/components/ui/skeleton';
import React from 'react';

const loading = () => {
  return (
    <div className='lg:wrapper lg:container p-5 lg:p-0 flex flex-col space-y-6'>
      <Skeleton className='h-[125px] w-full rounded-xl' />
      <div className='flex flex-col gap-5'>
        <Skeleton className='h-[50px] w-[90%] rounded-xl' />
        <Skeleton className='h-screen flex w-[80%] rounded-xl' />
      </div>
    </div>
  );
};

export default loading;
