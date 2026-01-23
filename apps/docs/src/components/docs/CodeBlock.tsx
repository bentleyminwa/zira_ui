import { cn } from '@zira-ui/ui';

interface CodeBlockProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeBlock({
  code,
  language = 'tsx',
  className,
}: CodeBlockProps) {
  return (
    <div
      className={cn(
        'relative my-4 rounded-lg bg-zinc-950 p-4 font-fira-code text-sm border border-zinc-800',
        className,
      )}
    >
      <div className='absolute right-4 top-4 text-xs text-zinc-500 uppercase font-bold'>
        {language}
      </div>
      <pre className='overflow-x-auto'>
        <code className='text-zinc-300'>{code}</code>
      </pre>
    </div>
  );
}
