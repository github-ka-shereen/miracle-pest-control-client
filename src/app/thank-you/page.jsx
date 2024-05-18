import CTAButton from '@/components/CTAButton';
import PageBanner from '@/components/PageBanner';
import { CircleCheckBig } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Thank You - Miracle Pest Control',
};

const page = () => {
  return (
    <>
      <PageBanner pageName='Success' headerText='Thank You!!!' />
      <section className='lg:wrapper flex items-center justify-center p-5 lg:p-0'>
        <div>
          <CircleCheckBig className='animate-pulse w-36 h-36 text-orange-400' />
        </div>
      </section>
      <section className='lg:wrapper flex flex-col items-center justify-center p-6 md:p-10 lg:p-0 space-y-5 mb-10'>
        <p className='text-4xl font-bold text-center'>
          Your Message was sent successfully!!!
        </p>
        <p className='text-2xl text-center'>
          We will be in touch with you soon.
        </p>
        <div className=''>
          <Link href='/'>
            <CTAButton text={'Go To Home Page'} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default page;
