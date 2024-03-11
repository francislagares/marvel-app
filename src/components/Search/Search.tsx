'use client';
import { KeyboardEventHandler, useState } from 'react';
import Image from 'next/image';

import { useRouter } from 'next/navigation';

import styles from './styles.module.css';

export const Search = () => {
  const router = useRouter();
  const [querySearch, setQuerySearch] = useState('');

  const handleInputChange: KeyboardEventHandler<HTMLInputElement> = event => {
    if (event.key === 'Enter' && querySearch.trim() !== '') {
      setQuerySearch('');
      return router.push(`/search?query=${querySearch}`);
    }
  };

  return (
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
        value={querySearch}
        onChange={e => setQuerySearch(e.target.value)}
        onKeyDown={handleInputChange}
        placeholder='SEARCH A CHARACTER...'
      />
    </div>
  );
};
