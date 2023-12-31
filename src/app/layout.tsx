import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import RootHeader from '@/components/header';
import Provider from './Provider';

import './globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={`${inter.className} font-Pretendard`}>
        <Provider>
          <RootHeader />
          {children}
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
