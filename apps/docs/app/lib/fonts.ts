import { cn } from '@repo/shadcn-ui/lib/utils';
import { GeistMono } from 'geist/font/mono';
// import { GeistSans } from 'geist/font/sans';
import { DM_Sans } from 'next/font/google';

const GeistSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const fonts = cn(
  'touch-manipulation font-sans antialiased',
  GeistSans.variable,
  GeistMono.variable
);
