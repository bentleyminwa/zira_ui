import { Navbar } from '@/components/docs/Navbar';
import { Sidebar } from '@/components/docs/Sidebar';
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
          <div className='container mx-auto px-4 md:px-8 flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] lg:grid-cols-[280px_minmax(0,1fr)] md:gap-6 lg:gap-10'>
            <Sidebar />
            <main className='relative py-6 lg:gap-10 lg:py-8'>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
