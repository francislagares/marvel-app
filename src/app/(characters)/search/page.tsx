'use client';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { CharacterCard } from '@/components';
import { useCharactersContext } from '@/context/CharactersContext';
import { Character } from '@/models/character';

import styles from '../styles/styles.module.css';

const SearchPage = () => {
  const searchParams = useSearchParams();
  const querySearch = searchParams.get('query');
  const { characters, fetchCharacters } = useCharactersContext();

  useEffect(() => {
    if (querySearch) {
      fetchCharacters(querySearch);
    }
  }, [querySearch, fetchCharacters]);

  return (
    <section className={styles.charactersList}>
      {characters?.results.map((character: Character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </section>
  );
};

export default SearchPage;
