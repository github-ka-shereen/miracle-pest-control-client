import CTAButton from '@/components/CTAButton';
import HeroSlider from '@/components/HeroSlider';
import { HomeParallax } from '@/components/HomeParallax';
import { HomeParallaxContact } from '@/components/HomeParallaxContact';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

import {
  BiLogoWhatsapp,
  BiMoney,
  BiPhoneCall,
  BiSolidStar,
  BiSolidTimeFive,
  BiWrench,
} from 'react-icons/bi';
import { sendEmail } from './api/send-email';

export const metadata = {
  title: 'Termite Control - Miracle Pest Control',
  description:
    'Ensure your home stays safe from termites with Miracle Pest Control. Our Johannesburg-based team provides professional termite control and treatment services to protect your wooden structures from extensive damage. Trust our experienced specialists for comprehensive termite inspections, treatments, and ongoing monitoring. Contact us now for effective termite protection solutions.',
  keywords: [
    'termite control',
    'termite treatment',
    'termite inspection',
    'termite monitoring',
    'Miracle Pest Control',
    'Johannesburg termite control',
    'pest control',
    'wood damage prevention',
    'residential termite control',
    'commercial termite control',
    'eco-friendly termite control',
    'termite infestation',
    'home termite protection',
    'preventative termite measures',
  ],
};

const Home = () => {
  // sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
  // const loading = false;

  return (
    <>
      <section className='relative'>
        <div className='h-[60vh] lg:h-[80vh]'>
          <HeroSlider />
          <div className='absolute inset-0 flex flex-col text-center items-center justify-center'>
            <p className='text-miracles p-2 mb-3 sm:text-lg text-xl font-semibold'>
              {`Ants, Cockroaches, Rats, Mice, Voles and Moles Don't Stand A
              Chance`}
            </p>
            <h1 className='text-white md:text-6xl text-2xl  font-medium'>
              Miracle Pest Control Experts
            </h1>
            <h2 className='text-white md:text-3xl text-lg font-normal'>
              Fumigation And Pest Control Experts
            </h2>
            {/* <div className='flex items-center md:p-6 p-3 justify-center mt-8 hover:-translate-y-2 transition duration-300 rounded-lg bg-white h-16 w-42 sm:h-24 sm:w-60'>
              <Image
                src='/assets/images/svg/google-logo.svg'
                width={55}
                height={55}
                alt='google rating'
              />
              <div className=''>
                <p className='font-bold text-start text-lg'>Google Rating</p>
                <div className='flex items-center gap-1'>
                  <p className='font-bold text-lg'>4.8</p>
                  <BiSolidStar className='text-miracles w-5 h-5' />
                  <BiSolidStar className='text-miracles w-5 h-5' />
                  <BiSolidStar className='text-miracles w-5 h-5' />
                  <BiSolidStar className='text-miracles w-5 h-5' />
                  <BiSolidStar className='text-miracles w-5 h-5' />
                </div>
              </div>
            </div> */}
            <div className='flex space-x-2 cursor-pointer'>
              <div className='flex items-center p-2 justify-center mt-8 hover:-translate-y-2 transition duration-300 rounded-none bg-miraclep h-14 w-14'>
                <BiLogoWhatsapp className='w-20 h-20 text-white' />
              </div>
              <div className='flex items-center p-2 justify-center mt-8 hover:-translate-y-2 transition duration-300 rounded-none bg-white h-14 w-14'>
                <BiPhoneCall className='w-20 h-20 text-miracles' />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='lg:wrapper mt-5 lg:mt-0 p-4'>
        <div className='flex items-center justify-center h-10 w-full bg-miracles'>
          <p className='text-lg text-white font-semibold'>Solutions We Offer</p>
        </div>
        <div className='flex flex-col items-center justify-center md:grid md:grid-cols-3 md:justify-items-center'>
          <div className='mt-10 relative'>
            <Image
              src='/assets/images/services/ant.jpg'
              height={460}
              width={360}
              alt='Ant pest control'
            />
            <div className='absolute top-3/4 left-0 w-full h-full flex justify-center'>
              <Button
                type='submit'
                size='lg'
                className='rounded-none border-2 bg-miracles text-white hover:bg-miraclep hover:border-miracles'
              >
                <Link href='/pest-control'>Ants Control</Link>
              </Button>
            </div>
          </div>
          <div className='mt-10 relative'>
            <Image
              src='/assets/images/services/cockroach.jpg'
              height={460}
              width={360}
              alt='Cockroach pest control'
            />
            <div className='absolute top-3/4 left-0 w-full h-full flex justify-center'>
              <Button
                size='lg'
                className='rounded-none border-2 bg-miracles text-white hover:bg-miraclep hover:border-miracles'
              >
                <Link href='/pest-control'>Cockroach Control</Link>
              </Button>
            </div>
          </div>
          <div className='mt-10 relative'>
            <Image
              src='/assets/images/services/rodent.jpg'
              height={460}
              width={360}
              alt='Rodent pest control'
            />
            <div className='absolute top-3/4 left-0 w-full h-full flex justify-center'>
              <Button
                size='lg'
                className='rounded-none border-2 bg-miracles text-white hover:bg-miraclep hover:border-miracles'
              >
                <Link href='/pest-control'>Rodent Control</Link>
              </Button>
            </div>
          </div>
          <div className='mt-10 relative'>
            <Image
              src='/assets/images/services/bed-bugs.jpg'
              height={460}
              width={360}
              alt='Bedbugs pest control'
            />
            <div className='absolute top-3/4 left-0 w-full h-full flex justify-center'>
              <Button
                size='lg'
                className='rounded-none border-2 bg-miracles  hover:bg-miraclep text-white hover:border-miracles'
              >
                <Link href='/pest-control'>Bedbugs Control</Link>
              </Button>
            </div>
          </div>
          <div className='mt-10 relative'>
            <Image
              src='/assets/images/services/termite.jpg'
              height={460}
              width={360}
              alt='Termite pest control'
            />
            <div className='absolute top-3/4 left-0 w-full h-full flex justify-center'>
              <Button
                size='lg'
                className='rounded-none border-2 bg-miracles text-white hover:bg-miraclep hover:border-miracles'
              >
                <Link href='/termite-control'>Termite Control</Link>
              </Button>
            </div>
          </div>
          <div className='mt-10 relative'>
            <Image
              src='/assets/images/services/house-fly.jpg'
              height={460}
              width={360}
              alt='Fly pest control'
            />
            <div className='absolute top-3/4 left-0 w-full h-full flex justify-center'>
              <Button
                size='lg'
                className='rounded-none border-2 bg-miracles text-white hover:bg-miraclep  hover:border-miracles'
              >
                <Link href='/pest-control'>Fly Control</Link>
              </Button>
            </div>
          </div>
          <div className='mt-10 relative'>
            <Image
              src='/assets/images/services/wasp.jpg'
              height={460}
              width={360}
              alt='Wasp pest control'
            />
            <div className='absolute top-3/4 left-0 w-full h-full flex justify-center'>
              <Button
                size='lg'
                className='rounded-none border-2 bg-miracles  hover:bg-miraclep hover:border-miracles'
              >
                <Link href='/pest-control'> Wasp Control</Link>
              </Button>
            </div>
          </div>
          <div className='mt-10 relative'>
            <Image
              src='/assets/images/services/silver-fish.jpg'
              height={460}
              width={360}
              alt='SilverFish pest control'
            />
            <div className='absolute top-3/4 left-0 w-full h-full flex justify-center'>
              <Button
                size='lg'
                className='rounded-none border-2 bg-miracles text-white hover:bg-miraclep hover:border-miracles'
              >
                <Link href='/pest-control'> SilverFish Control</Link>
              </Button>
            </div>
          </div>
          <div className='mt-10 relative'>
            <Image
              src='/assets/images/services/bird.jpg'
              height={460}
              width={360}
              alt='Bird control'
            />
            <div className='absolute top-3/4 left-0 w-full h-full flex justify-center'>
              <Button
                size='lg'
                className='rounded-none border-2 bg-miracles text-white hover:bg-miraclep  hover:border-miracles'
              >
                <Link href='/pest-control'>Bird Control</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className='lg:wrapper mt-5 lg:mt-0 p-4'>
        <div className='flex flex-col items-center justify-center p-5 lg:p-0 lg:grid lg:grid-cols-3 md:justify-items-center'>
          <div className='flex flex-col gap-5 items-center'>
            <p className='border-[1.5px] border-miracles text-center text-miraclep text-lg font-bold w-[90%] shadow-lg shadow-miracles'>
              Who Is Miracle Pest Control?
            </p>
            <Image
              src='/assets/images/guarantee.png'
              height={200}
              width={400}
              alt='100% guarantee'
            />
          </div>
          <div className='col-span-2 text-lg flex flex-col space-y-10 items-center'>
            <p>
              We are a South African Pest Control Company dedicated to providing
              the highest-quality service in pest management solutions for both
              residential and commercial properties throughout the Gauteng area.
              Specializing in pest extermination, prevention, and ongoing
              maintenance, we offer expert solutions tailored to your specific
              needs. With a professional team committed to excellence, LawnKing
              Pest Control ensures the highest standard of service and
              reliability. Get in touch with us for pest control services that
              exceed expectations and ensure a pest-free environment!
            </p>
            <p className='italic font-bold'>
              The Right Equipment, The Right Credentials, The Right Company For
              You!
            </p>
            <CTAButton text={'Get An Estimate'} />
          </div>
        </div>
      </section>
      <section className='mt-20'>
        <HomeParallax />
      </section>
      <section className='lg:wrapper p-5 flex flex-col items-center justify-center space-y-4'>
        <p className='font-bold text-miracles text-center text-2xl lg:text-4xl'>
          Why Choose Miracle Pest Control Gardens?
        </p>
        <p className='text-xl text-center'>
          We offer uncompromised excellence on our work.
        </p>
        <div className='mt-10 relative'>
          <Image
            src='/assets/images/bg/miracle-pest-banner-1.jpg'
            height={600}
            width={1200}
          />
          <div className='absolute xl:hidden text-white text-md md:text-4xl text-center md:top-[35%] top-1/4 left-[10%] mr-9'>
            Upfront Pricing, No Hidden Cost And 24/7 Service
          </div>
          <div className='hidden xl:flex  absolute w-1/4 text-white top-16 left-10 h-full justify-start'>
            <div className='space-y-5 flex flex-col items-center text-center'>
              <BiMoney className='h-10 w-10 text-miracles' />
              <p className='text-miracles font-semibold text-xl'>
                Upfront Pricing
              </p>
              <p>
                Our Pricing is transparent; no hidden costs. We offer the best
                prices in town!
              </p>
            </div>
          </div>
          <div className='hidden xl:flex absolute w-1/4 text-white top-16 right-10 h-full justify-end'>
            <div className='space-y-5 flex flex-col items-center text-center'>
              <BiSolidTimeFive className='h-10 w-10 text-miracles' />
              <p className='text-miracles font-semibold text-xl'>
                24/7 Service
              </p>
              <p>
                We are available around the clock to attend to all your
                emergency needs.
              </p>
            </div>
          </div>
          <div className='hidden xl:flex absolute w-full text-white top-16 h-full  justify-center'>
            <div className='space-y-5 flex flex-col items-center text-center'>
              <BiWrench className='h-10 w-10 text-miracles' />
              <p className='text-miracles font-semibold text-xl'>
                Qualified Experts
              </p>
              <p className='w-1/2'>
                Our staff has over 16 years of industry experence so your home
                is in safe hands.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-20'>
        <div className='flex gap-2 justify-center max-h-[150vh] p-4 bg-fixed bg-parallax bg-cover'>
          <div className='flex flex-col justify-center p-5 xl:p-10 mt-10 mb-10 xl:w-1/2 w-full bg-miracles'>
            <p className='text-white font-bold text-4xl'>Contact Us</p>
            <div className='mt-3 text-black w-full space-y-5 z-10'>
              <HomeParallaxContact />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
