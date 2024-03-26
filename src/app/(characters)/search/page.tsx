'use client';
import { useSearchParams } from 'next/navigation';
import { useCharacterSearch } from '@/hooks/useCharacterSearch';
import { CharacterCard } from '@/components';
import { Character } from '@/models/character';

import styles from '../styles/styles.module.css';

export const dynamic = 'force-dynamic';

const SearchPage = () => {
  const searchParams = useSearchParams();
  const querySearch = searchParams.get('query');
  const { data: characters, isLoading } = useCharacterSearch(querySearch);

  if (isLoading) return 'Loading Top Bar Component';

  return (
    <section className={styles.charactersList}>
      {characters?.results.map((character: Character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </section>
  );
};

export default SearchPage;
