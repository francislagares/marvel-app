'use client';
import { CharactersList } from '@/components/Characters';
import { Search } from '@/components';

import styles from '@/styles/page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Search />
      <CharactersList />
    </main>
  );
}
