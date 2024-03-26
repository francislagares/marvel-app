'use client';
import { useCharacters } from '@/hooks/useCharacters';
import { CharacterCard } from '@/components';
import { Character } from '@/models/character';

import styles from './styles.module.css';

export const CharactersList = () => {
  const { data: characters, isLoading } = useCharacters();

  if (isLoading) return 'Wait while we are fetching content...';

  return (
    <section className={styles.charactersList} role='grid'>
      {characters?.results.map((character: Character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </section>
  );
};
