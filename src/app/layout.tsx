import { Metadata } from 'next';
import { Roboto_Condensed } from 'next/font/google';

import { Header } from '@/components';
import { FavoritesProvider } from '@/context/FavoritesContext';
import { ReactQueryProvider } from '@/providers/ReactQueryProvider';

import '@/styles/globals.css';

const inter = Roboto_Condensed({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Marvel App | Official API for Marvel Movies, Characters, Comics, TV',
  icons: {
    icon: '/assets/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ReactQueryProvider>
          <FavoritesProvider>
            <Header />
            {children}
          </FavoritesProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
