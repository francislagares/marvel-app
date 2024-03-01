import { Metadata } from 'next';

import styles from './styles/page.module.css';

export const metadata: Metadata = {
  title: 'Marvel App | Official API for Marvel Movies, Characters, Comics, TV',
};

export default function Home() {
  return <main className={styles.main}>Hello</main>;
}
