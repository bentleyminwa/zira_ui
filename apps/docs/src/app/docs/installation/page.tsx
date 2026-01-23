import { CodeBlock } from '@/components/docs/CodeBlock';

export default function InstallationPage() {
  return (
    <div className='space-y-6'>
      <div className='space-y-2'>
        <h1 className='text-4xl font-bold tracking-tight'>Installation</h1>
        <p className='text-lg text-muted-foreground'>
          How to install and set up Zira UI in your project.
        </p>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold tracking-tight'>Quick Start</h2>
        <p className='text-base text-muted-foreground leading-7'>
          To get started, you'll need to have a React project set up with
          Tailwind CSS.
        </p>

        <div className='space-y-2'>
          <h3 className='text-xl font-medium'>1. Install dependencies</h3>
          <CodeBlock
            language='bash'
            code='npm install @zira-ui/ui lucide-react clsx tailwind-merge'
          />
        </div>

        <div className='space-y-2'>
          <h3 className='text-xl font-medium'>2. Configure Tailwind</h3>
          <p className='text-sm text-muted-foreground'>
            Add the Zira UI path to your tailwind configuration.
          </p>
          <CodeBlock
            language='javascript'
            code={`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/@zira-ui/ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  // ...
}`}
          />
        </div>
      </div>
    </div>
  );
}
