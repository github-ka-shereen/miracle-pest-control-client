import { Poppins } from 'next/font/google';
import './globals.css';
import Header from '@/components/layouts/header/Header';
import Footer from '@/components/layouts/footer/Footer';
import { cn } from '@/lib/utils';

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Miracle Pest Control',
  description:
    'Miracle Pest Control is a leading pest management company based in Johannesburg. We specialize in comprehensive pest control solutions for both residential and commercial properties, ensuring your space is safe and pest-free. Our expert team is dedicated to providing efficient, eco-friendly services to meet all your pest control needs. Contact us today for a pest-free tomorrow.',
  keywords: [
    'pest control',
    'Miracle Pest Control',
    'Johannesburg pest control',
    'residential pest control',
    'commercial pest control',
    'pest management',
    'termite control',
    'rodent control',
    'insect control',
    'exterminator services',
    'safe pest removal',
    'pest prevention',
    'home pest control',
    'office pest control',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={cn(`flex flex-col debug-screens`, poppins.className)}>
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
