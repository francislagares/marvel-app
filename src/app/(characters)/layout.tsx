'use client';
import { Suspense } from 'react';
import { usePathname } from 'next/navigation';
import { Search } from '@/components';
import { useCharactersContext } from '@/context/CharactersContext';
import { useFavoritesContext } from '@/context/FavoritesContext';

import styles from './styles/styles.module.css';

export default function CharactersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const { characters } = useCharactersContext();
  const { favorites } = useFavoritesContext();

  const renderHeading = pathname === '/favorites';

  const resultCount = renderHeading ? favorites.length : characters?.count;
  const resultText = resultCount === 1 ? 'RESULT' : 'RESULTS';

  return (
    <Suspense>
      <main className={styles.main}>
        {renderHeading && <h1>FAVORITES</h1>}
        <Search />
        <div className={styles.resultsCount}>
          {resultCount} {resultText}
        </div>
        {children}
      </main>
    </Suspense>
  );
}
