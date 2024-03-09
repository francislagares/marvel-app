import { Favorites, Logo } from '@/components';

import styles from './styles.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Favorites />
    </header>
  );
};
