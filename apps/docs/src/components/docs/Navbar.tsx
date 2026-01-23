'use client';

import { navLinks } from '@/lib/config';
import { cn } from '@zira-ui/ui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className='sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60'>
      <div className='container mx-auto px-4 md:px-8 flex h-16 items-center justify-between'>
        <div className='flex items-center gap-8'>
          <Link href='/' className='flex items-center space-x-2'>
            <span className='text-xl font-bold tracking-tight text-orange-brand'>
              Zira UI
            </span>
          </Link>
          <div className='hidden md:flex gap-6 text-sm font-medium'>
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'transition-colors hover:text-orange-brand',
                    isActive ? 'text-orange-brand' : 'text-foreground/60',
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <div className='hidden sm:flex items-center gap-2 pr-4 border-r'>
            <span className='text-xs text-muted-foreground'>v0.1.0</span>
          </div>
        </div>
      </div>
    </nav>
  );
}
