import { Button } from '@zira-ui/ui';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-h-[calc(100vh-10rem)] py-20 px-4 md:px-8 text-center'>
      <div className='max-w-4xl space-y-8 flex flex-col items-center'>
        <div className='space-y-4'>
          <h1 className='text-5xl md:text-7xl font-extrabold tracking-tight text-white animate-in fade-in slide-in-from-bottom-4 duration-1000'>
            Build faster with <span className='text-orange-brand'>Zira UI</span>
          </h1>
          <p className='text-xl md:text-2xl text-muted-foreground text-balance animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200'>
            A premium, lightweight React UI system designed for high-performance
            developer tools and portfolio-grade applications.
          </p>
        </div>

        <div className='flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-500'>
          <Link href='/docs/installation'>
            <Button
              size='lg'
              className='bg-orange-brand hover:bg-orange-600 px-8 text-lg h-14'
            >
              Get Started
            </Button>
          </Link>
          <Link href='/docs/introduction'>
            <Button
              variant='outline'
              size='lg'
              className='px-8 text-lg h-14 bg-white/5 backdrop-blur-sm'
            >
              Read Docs
            </Button>
          </Link>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-white/10 animate-in fade-in duration-1000 delay-700'>
          <div className='space-y-2'>
            <h3 className='font-bold text-lg text-white'>Performance First</h3>
            <p className='text-sm text-muted-foreground'>
              Minimal bundle size with full tree-shaking support.
            </p>
          </div>
          <div className='space-y-2'>
            <h3 className='font-bold text-lg text-white'>Accessible</h3>
            <p className='text-sm text-muted-foreground'>
              Built on top of Radix UI primitives for best-in-class
              accessibility.
            </p>
          </div>
          <div className='space-y-2'>
            <h3 className='font-bold text-lg text-white'>Opinionated</h3>
            <p className='text-sm text-muted-foreground'>
              Carefully crafted variants and design patterns.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
