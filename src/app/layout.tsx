import { Roboto_Condensed } from 'next/font/google';

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
        {children}
      </body>
    </html>
  );
}
