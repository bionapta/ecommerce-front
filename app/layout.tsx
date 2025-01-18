import type { Metadata } from 'next';
import { Urbanist } from 'next/font/google';
import './globals.css';
import Footer from '../components/footer';
import Navbar from '@/components/navbar';
import ModalProvider from '@/providers/modal-provider';

const font = Urbanist({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'E-Commerce Web',
  description: 'E-Commerce Web',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
