'use client';

import { cn } from '@zira-ui/ui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavItem {
  name: string;
  href?: string;
  type?: 'separator';
  disabled?: boolean;
}

const navigation: NavItem[] = [
  { type: 'separator', name: 'Getting Started' },
  { name: 'Introduction', href: '/docs/introduction' },
  { name: 'Installation', href: '/docs/installation' },
  { type: 'separator', name: 'Components' },
  { name: 'Button', href: '/docs/components/button' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className='fixed top-16 z-30 hidden h-[calc(100vh-4rem)] w-full shrink-0 border-r bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 md:sticky md:block'>
      <div className='h-full overflow-y-auto py-6 px-6 lg:py-8'>
        <div className='flex flex-col gap-2'>
          {navigation.map((item, idx) => {
            if (item.type === 'separator') {
              return (
                <div
                  key={idx}
                  className='mt-4 mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground'
                >
                  {item.name}
                </div>
              );
            }
            return (
              <Link
                key={idx}
                href={item.disabled || !item.href ? '#' : item.href}
                className={cn(
                  'block px-2 py-1.5 text-sm rounded-md transition-all hover:bg-muted/50',
                  pathname === item.href
                    ? 'bg-orange-brand/10 text-orange-brand font-medium border-l-2 border-orange-brand rounded-l-none'
                    : 'text-foreground/60',
                  item.disabled && 'opacity-50 cursor-not-allowed grayscale',
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
