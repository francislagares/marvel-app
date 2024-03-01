import { Favorites, Logo } from '@/app/components/';

import styles from './styles.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Favorites />
    </header>
  );
};
