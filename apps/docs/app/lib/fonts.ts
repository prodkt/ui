import { cn } from '@repo/shadcn-ui/lib/utils';
// import { GeistMono } from 'geist/font/mono';
// import { GeistSans } from 'geist/font/sans';
import { DM_Sans } from 'next/font/google';
import { IBM_Plex_Mono } from 'next/font/google';

const GeistSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const GeistMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600', '700'],
});

const DMSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

const IBMPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '600', '700'],
});

export const fonts = cn(
  'touch-manipulation font-sans antialiased',
  GeistSans.variable,
  GeistMono.variable,
  IBMPlexMono.variable,
  DMSans.variable
);
