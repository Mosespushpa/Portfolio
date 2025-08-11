
import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';
import { Providers } from './providers';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Moses Chinnappan',
  description: 'Portfolio of Moses Chinnappan.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen flex flex-col font-sans antialiased',
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <Providers>
          <SiteHeader />
          <main className="flex-grow px-4 sm:px-6 lg:px-8">{children}</main>
          <SiteFooter />
        </Providers>
      </body>
    </html>
  );
}
