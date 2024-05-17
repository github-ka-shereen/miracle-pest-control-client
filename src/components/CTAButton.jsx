import React from 'react'
import { Button } from './ui/button';

const CTAButton = ({text}) => {
  return (
    <Button
      size='lg'
      className='rounded-none border-2 bg-miraclep text-white hover:bg-miracles hover:border-miraclep'
    >
     {text}
    </Button>
  );
}

export default CTAButton