import PageBanner from '@/components/PageBanner';
import Image from 'next/image';

const page = () => {
  return (
    <>
      <PageBanner pageName='our law firm' headerText='About Us' />
      <section className='relative mb-10'>
        <div className='md:wrapper mx-auto'>
          <div className='grid grid-cols-1 place-items-center xl:grid-cols-2 gap-12'>
            <div className='flex flex-col gap-4 text-gray-700 text-start'>
              <h1 className=' text-3xl text-miraclep'>
                About <strong>Us </strong>
              </h1>
              <p className='font-light text-lg md:text-xl lg:text-2xl'>
                Lawn Miracle is a Johannesburg-based company dedicated to
                providing exceptional lawn services tailored to meet your unique
                needs. Our passion for nature and commitment to excellence drive
                us to transform ordinary yards into extraordinary landscapes,
                cultivating gardens with healthy, vibrant plants.
              </p>
              <p className='text-md md:text-xl'>
                Founded with a clear vision, Lawn Miracle strives to enhance the
                beauty of your home while enriching your lifestyle. Our team of
                experienced professionals combines expertise with a focus on
                customer satisfaction, ensuring that every garden receives the
                care it deserves.
                <br />
                <br />
                Specializing in lawn services and gardening, we take pride in
                our craftsmanship and dedication to creating outdoor spaces that
                exceed expectations. From lush green lawns to well-cared-for
                plants, Lawn Miracle is your partner in achieving a beautiful
                and vibrant landscape for your property.
              </p>
            </div>
            <div className='select-none'>
              <Image
                src='/miracle-lawn-logo.png'
                className='object-contain object-center'
                alt='Calderwood, Bryce Hendrie & Partners logo'
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
