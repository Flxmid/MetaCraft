import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MetaCraft.nl - Professionele Webdesign & Ontwikkeling',
  description: 'MetaCraft.nl creëert moderne, professionele websites en vernieuwt bestaande websites. Snel, betrouwbaar en op maat gemaakt.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl">
      <body className={inter.className}>{children}</body>
    </html>
  );
}