'use client';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CharacterCard } from '@/components';
import { Character } from '@/models/character';
import { searchCharacters } from '@/services/api';

import styles from './styles.module.css';

const SearchPage = () => {
  const searchParams = useSearchParams();
  const querySearch = searchParams.get('query');
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await searchCharacters(querySearch);
        setCharacters(data.results);
      } catch (error) {
        console.error(error);
      }
    };

    if (querySearch) {
      fetchData();
    }
  }, [querySearch]);

  return (
    <>
      <div
        className={styles.resultsCount}
      >{`${characters.length} RESULTS`}</div>
      <section className={styles.charactersList}>
        {characters?.map((character: Character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </section>
    </>
  );
};

export default SearchPage;
