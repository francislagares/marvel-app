import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.css';

export const Favorites = () => {
  return (
    <div className={styles.favorites}>
      <Link href='/favorites'>
        <Image
          src='/assets/favorites-icon.svg'
          alt='Favorites'
          width={24}
          height={21}
        />
      </Link>
      <div>3</div>
    </div>
  );
};
