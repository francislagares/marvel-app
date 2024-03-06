import { Roboto_Condensed } from 'next/font/google';
import NextTopLoader from 'nextjs-toploader';

import { Header } from './components';

import './styles/globals.css';

const inter = Roboto_Condensed({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <NextTopLoader
          color='#ec1d24'
          height={6}
          showSpinner={false}
          shadow={false}
          zIndex={99}
        />
        {children}
      </body>
    </html>
  );
}
