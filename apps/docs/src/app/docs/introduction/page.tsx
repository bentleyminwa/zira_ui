export default function IntroductionPage() {
  return (
    <div className='space-y-6'>
      <div className='space-y-2'>
        <h1 className='text-4xl font-bold tracking-tight'>Introduction</h1>
        <p className='text-lg text-muted-foreground'>
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Open Source.
        </p>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold tracking-tight'>
          What is Zira UI?
        </h2>
        <p className='text-base text-muted-foreground leading-7'>
          Zira UI is a collection of re-usable components built using React,
          Tailwind CSS, and Radix UI. It's not a component library in the
          traditional sense—it's a collection of components that you can copy
          and paste into your apps.
        </p>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-semibold tracking-tight'>Philosophy</h2>
        <p className='text-base text-muted-foreground leading-7'>
          The goal is to provide a solid foundation for your design system while
          giving you full control over the code. No complex abstractions, just
          clean, readable, and highly customizable React components.
        </p>
      </div>
    </div>
  );
}
