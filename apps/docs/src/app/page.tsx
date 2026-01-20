import { Button } from '@zira-ui/ui';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center min-vh-100 p-24 space-y-8'>
      <h1 className='text-4xl font-bold tracking-tight'>
        UI System Components
      </h1>

      <div className='flex flex-wrap gap-4 items-center justify-center p-8 border rounded-lg bg-card'>
        <Button variant='primary'>Primary Button</Button>
        <Button variant='secondary'>Secondary Button</Button>
        <Button variant='outline'>Outline Button</Button>
        <Button variant='destructive'>Destructive Button</Button>
        <Button variant='ghost'>Ghost Button</Button>
        <Button variant='link'>Link Button</Button>
      </div>

      <div className='flex flex-wrap gap-4 items-center justify-center'>
        <Button size='sm'>Small</Button>
        <Button size='default'>Default</Button>
        <Button size='lg'>Large</Button>
      </div>
    </div>
  );
}
