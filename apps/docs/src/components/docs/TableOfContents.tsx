'use client';

import { cn } from '@zira-ui/ui';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

interface TocItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const pathname = usePathname();
  const [items, setItems] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const headings = Array.from(document.querySelectorAll('h2, h3'));
    const tocItems = headings.map((heading) => ({
      id: heading.id,
      text: heading.textContent || '',
      level: parseInt(heading.tagName[1]),
    }));
    setItems(tocItems);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-100px 0% -66%' },
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [pathname]);

  if (items.length === 0) return null;

  return (
    <div className='hidden text-sm lg:block'>
      <div className='fixed top-16 h-[calc(100vh-4rem)] overflow-y-auto py-6 px-6 lg:py-8'>
        <p className='mb-4 font-semibold uppercase tracking-wider text-xs text-muted-foreground'>
          On This Page
        </p>
        <div className='flex flex-col gap-2.5'>
          {items.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={cn(
                'transition-colors hover:text-foreground',
                item.level === 3 && 'pl-4',
                activeId === item.id
                  ? 'text-orange-brand font-medium'
                  : 'text-foreground/60',
              )}
            >
              {item.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
