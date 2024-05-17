import CTAButton from '@/components/CTAButton';
import PageBanner from '@/components/PageBanner';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Pest Control - Miracle Pest Control',
  description:
    'Welcome to Miracle Pest Control, your premier solution for pest management in Johannesburg. We specialize in the extermination, removal, and control of a wide range of pests, ensuring a pest-free environment for both residential and commercial properties. Our experienced team uses safe and effective methods to protect your home or business from pests like cockroaches, mosquitoes, rats, termites, and more. Contact us today for reliable pest control services.',
  keywords: [
    'pest control',
    'Miracle Pest Control',
    'Johannesburg pest control',
    'residential pest control',
    'commercial pest control',
    'eco-friendly pest control',
    'extermination services',
    'pest removal',
    'cockroach control',
    'mosquito control',
    'rat control',
    'termite control',
    'flea control',
    'bee relocation',
    'fumigation services',
    'safe pest control',
    'effective pest management',
    'home pest protection',
    'business pest control',
  ],
};

const page = () => {
  return (
    <>
      <PageBanner pageName='Our Services' headerText='Pest Control' />
      <section className='lg:wrapper p-5 lg:p-0'>
        <div>
          <Image
            src='/assets/images/our-services/pest-control-mouse.jpg'
            width={1200}
            height={470}
            alt='pet on artificial pet turf'
          />
        </div>
      </section>
      <section className='lg:wrapper p-6 md:p-10 lg:p-0 space-y-5 mb-10'>
        <p className='md:text-2xl text:xl'>
          Welcome to Miracle Pest Control, your premier solution for pest
          management needs. Our specialized team is dedicated to the
          extermination, removal, and control of a wide range of pests, ensuring
          a pest-free environment for both residential and commercial
          properties.
        </p>

        <p className='md:text-2xl text:xl'>
          At Miracle Pest Control, we tackle pests of all kinds, including
          cockroaches, mosquitoes, fleas, rats, bats, flies, lice, termites,
          dust mites, fish moths, ants, ticks, bed bugs, mice, spiders,
          centipedes, scorpions, and many more. Additionally, we specialize in
          the safe relocation of bees, prioritizing both effective pest
          management and environmental preservation.
        </p>

        <p className='md:text-2xl text:xl'>
          Our reputation as a trusted Pest Control and Fumigation Services
          provider in Gauteng is built on years of experience, dedication, and
          proven results. Clients continue to choose our services because of our
          commitment to safety, efficiency, and reliability.
        </p>

        <p className='md:text-2xl text:xl'>
          What sets us apart is our use of safe yet highly effective pest
          control methods. We prioritize the safety of your family, pets, and
          the environment while delivering exceptional results. Moreover, our
          after-sales services and guaranteed workmanship ensure that your
          satisfaction remains our top priority, even after the job is done.
        </p>

        <p className='md:text-2xl text:xl'>
          Experience the Miracle Pest Control difference today and say goodbye
          to pests for good. Contact us for personalized pest control solutions
          tailored to your specific needs.
        </p>

        <div className=''>
          <Link href="/contact">
            <CTAButton text={'Get In Touch'} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default page;
