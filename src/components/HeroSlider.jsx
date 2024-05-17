'use client';
import { MotionDiv } from '@/lib/FramerMotion';
import Image from 'next/image';
import { heroImages } from '../../constants';
import { useState, useEffect } from 'react';

const HeroSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % heroImages.length;
      setCurrentImageIndex(nextIndex);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentImageIndex]);

  return (
    <>
      {heroImages.map((image, index) => (
        <MotionDiv
          key={image.id}
          initial={{ opacity: 1 }}
          animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            alt='lawn miracle slider image'
            src={image.link}
            fill
            sizes='100vw'
            className='object-cover'
          />
        </MotionDiv>
      ))}
    </>
  );
};

export default HeroSlider;
