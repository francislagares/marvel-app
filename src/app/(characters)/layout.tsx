import { Search } from '@/components';

import styles from './styles.module.css';

export default function CharactersLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className={styles.main}>
      <Search />
      {children}
    </main>
  );
}
