import { CodeBlock } from '@/components/docs/CodeBlock';
import { Preview } from '@/components/docs/Preview';
import { TableOfContents } from '@/components/docs/TableOfContents';
import { Button } from '@zira-ui/ui';

export default function ButtonPage() {
  return (
    <div className='flex flex-col lg:grid lg:grid-cols-[1fr,200px] lg:gap-10'>
      <div className='space-y-10 pb-16'>
        {/* Header */}
        <div className='space-y-4'>
          <h1
            id='introduction'
            className='text-4xl font-extrabold tracking-tight text-white lg:text-5xl'
          >
            Button
          </h1>
          <p className='text-xl text-muted-foreground text-balance'>
            A versatile button component for user interaction, supporting
            multiple variants, sizes, and states.
          </p>
        </div>

        {/* Usage */}
        <section className='space-y-6'>
          <h2
            id='usage'
            className='text-3xl font-bold tracking-tight border-b pb-2'
          >
            Usage
          </h2>
          <Preview>
            <Button>Click me</Button>
          </Preview>
          <CodeBlock
            code={`import { Button } from '@zira-ui/ui';\n\n<Button>Click me</Button>`}
          />
        </section>

        {/* Variants */}
        <section className='space-y-6'>
          <h2
            id='variants'
            className='text-3xl font-bold tracking-tight border-b pb-2'
          >
            Variants
          </h2>
          <p className='text-muted-foreground'>
            Our button comes with several distinct visual styles to fit
            different contexts.
          </p>
          <Preview className='gap-4 flex-wrap'>
            <Button variant='primary'>Primary</Button>
            <Button variant='secondary'>Secondary</Button>
            <Button variant='outline'>Outline</Button>
            <Button variant='destructive'>Destructive</Button>
            <Button variant='ghost'>Ghost</Button>
            <Button variant='link'>Link</Button>
          </Preview>
          <CodeBlock
            code={`<Button variant="primary">Primary</Button>\n<Button variant="secondary">Secondary</Button>\n<Button variant="outline">Outline</Button>\n<Button variant="destructive">Destructive</Button>\n<Button variant="ghost">Ghost</Button>\n<Button variant="link">Link</Button>`}
          />
        </section>

        {/* Sizes */}
        <section className='space-y-6'>
          <h2
            id='sizes'
            className='text-3xl font-bold tracking-tight border-b pb-2'
          >
            Sizes
          </h2>
          <p className='text-muted-foreground'>
            Choose from three standard sizes or an icon-only mode.
          </p>
          <Preview className='gap-4 items-end flex-wrap'>
            <Button size='sm'>Small</Button>
            <Button size='default'>Default</Button>
            <Button size='lg'>Large</Button>
          </Preview>
          <CodeBlock
            code={`<Button size="sm">Small</Button>\n<Button size="default">Default</Button>\n<Button size="lg">Large</Button>`}
          />
        </section>

        {/* States */}
        <section className='space-y-6'>
          <h2
            id='states'
            className='text-3xl font-bold tracking-tight border-b pb-2'
          >
            States
          </h2>
          <p className='text-muted-foreground'>
            Buttons also support disabled states and can be easily extended for
            loading indicators.
          </p>
          <Preview className='gap-4'>
            <Button disabled>Disabled</Button>
            <Button variant='outline' disabled>
              Disabled Outline
            </Button>
          </Preview>
          <CodeBlock
            code={`<Button disabled>Disabled</Button>\n<Button variant="outline" disabled>Disabled Outline</Button>`}
          />
        </section>

        {/* API Reference */}
        <section className='space-y-6'>
          <h2
            id='api-reference'
            className='text-3xl font-bold tracking-tight border-b pb-2'
          >
            API Reference
          </h2>
          <div className='overflow-x-auto rounded-lg border bg-zinc-950/50'>
            <table className='w-full text-left text-sm'>
              <thead>
                <tr className='border-b bg-zinc-900/50 transition-colors'>
                  <th className='h-10 px-4 font-medium text-white'>Prop</th>
                  <th className='h-10 px-4 font-medium text-white'>Type</th>
                  <th className='h-10 px-4 font-medium text-white'>Default</th>
                  <th className='h-10 px-4 font-medium text-white'>
                    Description
                  </th>
                </tr>
              </thead>
              <tbody className='[&_tr:last-child]:border-0 text-zinc-400'>
                <tr className='border-b transition-colors hover:bg-zinc-900/50'>
                  <td className='p-4 font-mono text-white'>variant</td>
                  <td className='p-4 font-mono'>
                    primary | secondary | outline | destructive | ghost | link
                  </td>
                  <td className='p-4 font-mono'>primary</td>
                  <td className='p-4'>The visual style of the button.</td>
                </tr>
                <tr className='border-b transition-colors hover:bg-zinc-900/50'>
                  <td className='p-4 font-mono text-white'>size</td>
                  <td className='p-4 font-mono'>default | sm | lg | icon</td>
                  <td className='p-4 font-mono'>default</td>
                  <td className='p-4'>The size of the button.</td>
                </tr>
                <tr className='border-b transition-colors hover:bg-zinc-900/50'>
                  <td className='p-4 font-mono text-white'>asChild</td>
                  <td className='p-4 font-mono'>boolean</td>
                  <td className='p-4 font-mono'>false</td>
                  <td className='p-4'>
                    Whether to render the button as its child element (useful
                    for Next.js Links).
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>

      {/* TOC */}
      <div className='hidden lg:block'>
        <TableOfContents />
      </div>
    </div>
  );
}
