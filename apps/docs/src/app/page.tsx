import { Button } from '@zira-ui/ui';
import Link from 'next/link';
import { features } from '../lib/config';

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

        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 pt-16 animate-in fade-in duration-1000 delay-700'>
          {features.map((feature, idx) => (
            <div
              key={idx}
              className='group relative p-6 rounded-2xl border border-white/5 bg-white/2 hover:bg-white/5 transition-all duration-300 hover:border-orange-brand/20 flex flex-col items-center'
            >
              <div className='mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-brand/10 text-orange-brand'>
                <feature.icon className='h-6 w-6' />
              </div>
              <h3 className='font-bold text-lg text-white mb-2'>
                {feature.title}
              </h3>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
