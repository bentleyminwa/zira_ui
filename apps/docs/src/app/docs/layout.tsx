import { Sidebar } from '@/components/docs/Sidebar';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='container mx-auto px-4 md:px-8 flex-1 items-start md:grid md:grid-cols-[240px_minmax(0,1fr)] lg:grid-cols-[280px_minmax(0,1fr)] md:gap-6 lg:gap-10'>
      <Sidebar />
      <main className='relative py-6 lg:gap-10 lg:py-8'>{children}</main>
    </div>
  );
}
