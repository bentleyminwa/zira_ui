import { Accessibility, Palette, Zap } from 'lucide-react';

export const features = [
  {
    title: 'Performance First',
    description: 'Minimal bundle size with full tree-shaking support.',
    icon: Zap,
  },
  {
    title: 'Accessible',
    description: 'Built on top of Radix UI primitives for accessibility.',
    icon: Accessibility,
  },
  {
    title: 'Opinionated',
    description: 'Carefully crafted variants and design patterns.',
    icon: Palette,
  },
];

export const navLinks = [
  { label: 'Docs', href: '/docs/introduction' },
  { label: 'Components', href: '/docs/components/button' },
];
