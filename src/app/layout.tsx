import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from './_components/Header';
import '../../public/styles/icomoon.css';
import './globals.css';

const inter = Inter({
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Manila Water Integrated Report 2024 | Raising The Bar Even Higher',
  description: 'Raising The Bar Even Higher',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
