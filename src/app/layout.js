// import { Roboto } from 'next/font/google';
import './globals.css';
import Header from '@/components/layouts/header/Header';
import Footer from '@/components/layouts/footer/Footer';

// const roboto = Roboto({
//   weight: ['100', '300', '400', '500', '700'],
//   subsets: ['latin'],
//   display: 'swap',
// });

export const metadata = {
  title: 'Lawn Miracle',
  description:
    'Miracle Lawn is a Johannesburg-based landscaping company dedicated to crafting beautiful outdoor landscapes and gardens. From landscaping and garden cleanup to irrigation and pest control, we provide top-notch services tailored to meet your unique needs. Contact us today to transform your yard into an oasis of natural beauty.',
  keywords: [
    'lawn miracle',
    'landscaping',
    'gardening',
    'Johannesburg',
    'outdoor spaces',
    'yard transformation',
    'landscape design',
    'garden cleanup',
    'irrigation',
    'pest control',
    'tree felling',
    'painting',
    'paving',
    'landscape maintenance',
    'landscape services',
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`flex flex-col debug-screens`}>
        <Header />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
