import { Navbar } from '@/components/docs/Navbar';
import type { Metadata } from 'next';
import { Fira_Code, Quicksand } from 'next/font/google';
import './globals.css';

const quicksand = Quicksand({
  subsets: ['latin'],
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
});

export const metadata: Metadata = {
  title: 'Zira UI | Premium React Component Library',
  description: 'A lightweight, opinionated, and highly customizable UI system.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className='dark'>
      <body
        className={`${quicksand.className} ${firaCode.variable} antialiased`}
      >
        <div className='relative flex min-h-screen flex-col'>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
