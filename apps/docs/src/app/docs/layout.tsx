import { Sidebar } from '@/components/docs/Sidebar';
import { TableOfContents } from '@/components/docs/TableOfContents';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] lg:grid-cols-[240px_minmax(0,1fr)_260px]'>
      <Sidebar />
      <main className='relative py-6 px-4 md:px-8 lg:py-8'>{children}</main>
      <TableOfContents />
    </div>
  );
}
