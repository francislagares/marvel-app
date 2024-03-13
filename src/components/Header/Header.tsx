'use client';
import { useEffect, useState } from 'react';
import { Favorites, Logo } from '@/components';

import styles from './styles.module.css';

export const Header = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <header className={styles.header}>
      <Logo />
      {/* (FIX)
          Hydration failed because the initial ui does not match what was rendered on the server 
          Check the docs for more info => https://nextjs.org/docs/messages/react-hydration-error 
      */}
      {isClient && <Favorites />}
    </header>
  );
};
