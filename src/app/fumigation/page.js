import CTAButton from '@/components/CTAButton';
import PageBanner from '@/components/PageBanner';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Fumigation Services - Miracle Pest Control',
  description:
    'Miracle Pest Control offers professional fumigation services in Johannesburg to eradicate unwanted pests in residential, commercial, and industrial spaces. Our experienced team uses effective, odorless fumigants to ensure complete pest removal without leaving hazardous residues. Contact us today for reliable fumigation solutions tailored to your specific needs.',
  keywords: [
    'fumigation services',
    'Miracle Pest Control',
    'Johannesburg fumigation',
    'pest control',
    'residential fumigation',
    'commercial fumigation',
    'industrial fumigation',
    'effective fumigation',
    'safe fumigation',
    'fumigant gas',
    'pest extermination',
    'insect fumigation',
    'rodent fumigation',
    'shipping container fumigation',
    'building fumigation',
    'pest removal',
    'proactive pest control',
  ],
};


const page = () => {
  return (
    <>
      <PageBanner pageName='Our Services' headerText='Fumigation Services' />
      <section className='lg:wrapper p-5 lg:p-0'>
        <div>
          <Image
            src='/assets/images/our-services/fumigation.jpg'
            width={1200}
            height={470}
            alt='paving'
          />
        </div>
      </section>
      <section className='lg:wrapper p-6 md:p-10 lg:p-0 space-y-5 mb-10'>
        <p className='md:text-2xl text:xl'>
          Fumigation Is An Effective Solution To Eradicate Any Unwanted Pests.
          This Extermination Method Will Handle Any Pests In Residential Homes,
          Shipping Containers, Transportation Vessels, And Also Commercial
          Buildings. With That Said, Fumigation Services Are Considered
          Essential When Dealing With A Large Area Infested With Insects Or
          Rodents.
        </p>
        <h2 className='text-3xl font-bold'>WHAT IS FUMIGATION</h2>
        <p className='md:text-2xl text:xl'>
          The Majority Of The Population Often Misunderstands The Word
          Fumigation. Effective Fumigation Is The Introduction Of A Fumigant As
          A Gas. Ultimately, This Fumigant Gas Eradicates All Pests In A
          Specific Enclosed Area. In General, These Gasses Are Odorless And
          Therefore Do Not Leave Behind Any Hazardous Material Once The Process
          Is Complete.
        </p>

        <p className='md:text-2xl text:xl'>
          Additionally, Each Situation And Scenario Is Unique. Therefore, Part
          Of Our Process Is To Determine Which Pest Removal Solution Will Work
          For Any Given Situation. Generally, The Process Consists Of A Variety
          Of Different Chemicals Aimed At Removing Unwanted Pests. As A Result,
          It Is A Quick And Easy Solution To Deal With Pests Within A
          Residential Home Or Commercial Building.
        </p>

        <p className='md:text-2xl text:xl'>
          The Extermination Process Is Also Ideal For Penetrating Walls Within A
          Building Or Structure. Ultimately, The Gasses Penetrate To The Centre
          Of Tightly Packed Commodities. Some Of Those Commodities Are Tobacco
          In Hogsheads (Large Storage Barrels), Bales, Cases, Or Grain In Large
          Silos Or Bulk Bins.
        </p>
        <h2 className='text-3xl font-bold'>{`WE'RE HERE FOR WHAT BUGS YOU`}</h2>
        <p className='md:text-2xl text:xl'>
          We Are Licensed To Deal With Any Fumigation Matter. We Also Have More
          Than A Decade Of Experience Dealing With Residential Homes, Commercial
          Buildings, And Shipping Containers’ Fumigation Needs. For Us, It’s
          Important To Help You Get Control Of Your Pest Problems. Not Only Do
          We Take Care Of Any Unwanted Pests, But We Also Guide Our Clients
          Through A Proactive Preventative Solution.
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
