'use client';
import Image from 'next/image';
import Link from 'next/link';

import { useFavoritesContext } from '@/context/FavoritesContext';

import styles from './styles.module.css';

export const Favorites = () => {
  const { favorites } = useFavoritesContext();

  return (
    <div className={styles.favorites}>
      <Link href='/favorites'>
        <Image
          src='/assets/favorites-icon.svg'
          alt='Favorites'
          width={24}
          height={21}
          priority={true}
        />
      </Link>
      <div>{favorites.length}</div>
    </div>
  );
};
