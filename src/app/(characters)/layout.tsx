'use client';
import { usePathname } from 'next/navigation';
import { Search } from '@/components';
import { useCharactersContext } from '@/context/CharactersContext';

import styles from './styles/styles.module.css';

export default function CharactersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const { characters } = useCharactersContext();

  const renderHeading = pathname === '/favorites';

  return (
    <main className={styles.main}>
      {renderHeading && <h1>FAVORITES</h1>}
      <Search />
      <div
        className={styles.resultsCount}
      >{`${characters?.count} RESULTS`}</div>
      {children}
    </main>
  );
}
