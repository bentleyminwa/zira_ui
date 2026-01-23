import Link from 'next/link';

export function Navbar() {
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
            <Link
              href='/docs/introduction'
              className='transition-colors hover:text-orange-brand'
            >
              Docs
            </Link>
            <Link
              href='/components'
              className='transition-colors hover:text-orange-brand text-foreground/60'
            >
              Components
            </Link>
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
