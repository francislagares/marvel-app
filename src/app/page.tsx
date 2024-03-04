import { Metadata } from 'next';

import { CharactersList } from '@/app/components/Characters';

import styles from './styles/page.module.css';

export const metadata: Metadata = {
  title: 'Marvel App | Official API for Marvel Movies, Characters, Comics, TV',
};

export default async function Home() {
  return (
    <main className={styles.main}>
      <CharactersList />
    </main>
  );
}
