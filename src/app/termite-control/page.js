import CTAButton from '@/components/CTAButton';
import PageBanner from '@/components/PageBanner';

import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Termite Control - Miracle Pest Control',
  description:
    "Protect your home with Miracle Pest Control's professional termite control services. Our expert team in Johannesburg provides comprehensive termite inspections, treatments, and monitoring to ensure your property remains termite-free. Contact us today to safeguard your home from termite damage.",
  keywords: [
    'termite control',
    'Miracle Pest Control',
    'Johannesburg termite control',
    'termite treatment',
    'termite inspection',
    'termite prevention',
    'termite damage repair',
    'professional termite services',
    'residential termite control',
    'commercial termite control',
    'termite monitoring',
    'pest control Johannesburg',
    'eco-friendly termite control',
    'termite extermination',
    'protect home from termites',
  ],
};


const page = () => {
  return (
    <>
      <PageBanner pageName='Our Services' headerText='Termite Control' />
      <section className='lg:wrapper p-5 lg:p-0'>
        <div>
          <Image
            src='/assets/images/our-services/termite-control.jpg'
            width={1200}
            height={470}
            alt='sports turf'
          />
        </div>
      </section>
      <section className='lg:wrapper p-6 md:p-10 lg:p-0 space-y-5 mb-10'>
        <p className='md:text-2xl text:xl'>
          {`When You Need Professional Termite Control And Termite Treatment,
          Accend Solutions Is Here To Help. In Short, No Other Pest Causes Quite
          As Much Damage As Termites Do. In North America, Termite Infestations
          Are Known To Cause Big Problems Like Damaging The Entire Structure Of
          Your Home. In Outh Africa, The Effects Are Not Very Different
          Especially With Wooden Floors, Wooden Skirtings And Roof Trusses.
          Termites Eat Through Your Wooden Floors, Furniture, Window Frames,
          Doors, And Anywhere Else In Your Home Where There’s Wood. Once
          Termites Have Gotten Into Your Home, They’re Very Difficult To Get Rid
          Of. Preventative Measures Are Recommended In Controlling Termites And
          Keeping Them Out Of Your Home.`}
        </p>

        <p className='md:text-2xl text:xl'>
          {`Once You’ve Discovered You Have A Termite Infestation, It Is Very
          Important To Call Termite Control Specialists Immediately. Our
          Qualified Team At Accend Solutions Will Get Rid Of Termites In Your
          Home, As Well As Setting Up Preventative Steps To Ensure You Don’t
          Face Another Termite Infestation. We Offer Complete Termite Treatment
          Options.`}
        </p>
        <h2 className='text-3xl font-bold'>Our Termite Control Process</h2>
        <p className='md:text-2xl text:xl'>
          <b>1. Termite Inspection</b> <br />
          On your initial service, we will hunt high and low for termites,
          documenting our findings in a comprehensive inspection. <br />
          <b>2. Termite Treatment</b> <br />
          {`  We will treat the interior and exterior of your home, targeting the
          termites you see and the ones you don’t. Outside, we’ll establish an
          effective perimeter around your property. `}
          <br />
          <b>3. Termite Monitoring</b> <br />
          During ongoing service treatments, we will come back to treat outside
          your home, fortifying the perimeter to keep you protected. Our custom
          termite treatments adapt with the seasons to address seasonal termite
          activity in your area. This way, you are protected all year long.
        </p>

        <div className=''>
          <Link href='/contact'>
            <CTAButton text={'Get In Touch'} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default page;
