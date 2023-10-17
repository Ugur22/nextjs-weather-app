import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import { theme } from '../../theme';
import MainAppShell from '@/components/MainAppShell';
import '@mantine/core/styles.css';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Weather app',
  description: 'A weather app using Next.js 13',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript />
        <link rel='shortcut icon' href='https://upload.wikimedia.org/wikipedia/commons/b/bf/Circle-icons-weather.svg' />
        <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no' />
      </head>
      <body className={inter.className}>
        <MantineProvider theme={theme}>
          <MainAppShell>{children}</MainAppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
