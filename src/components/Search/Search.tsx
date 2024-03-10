'use client';
import { ChangeEvent, useState } from 'react';
import Image from 'next/image';

import styles from './styles.module.css';

export const Search = () => {
  const [searchItem, setSearchItem] = useState('');

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearchItem(searchTerm);
  };

  return (
    <>
      <div className={styles.searchBox}>
        <Image
          src='/assets/search-button.png'
          alt='Search Button'
          width={12}
          height={12}
        />
        <input
          className={styles.searchInput}
          type='text'
          value={searchItem}
          onChange={handleInputChange}
          placeholder='SEARCH A CHARACTER...'
        />
      </div>
      <div className={styles.resultsCount}>50 RESULTS</div>
    </>
  );
};
