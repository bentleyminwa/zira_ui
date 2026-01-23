import { cn } from '@zira-ui/ui';
import * as React from 'react';

interface PreviewProps {
  children: React.ReactNode;
  className?: string;
  code?: string;
}

export function Preview({ children, className, code }: PreviewProps) {
  return (
    <div className='group relative my-4 flex flex-col space-y-2'>
      <div
        className={cn(
          'relative flex min-h-[200px] w-full items-center justify-center rounded-lg border bg-card p-10 transition-colors hover:border-orange-brand/50',
          className,
        )}
      >
        <div className='absolute inset-0 bg-grid-white/[0.02] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]' />
        <div className='z-10'>{children}</div>
      </div>
    </div>
  );
}
