'use client';
import { CharacterCard } from '@/components';
import { useCharactersContext } from '@/context/CharactersContext';
import { Character } from '@/models/character';

import styles from './styles.module.css';

export const CharactersList = () => {
  const { characters } = useCharactersContext();

  return (
    <section className={styles.charactersList}>
      {characters?.results.map((character: Character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </section>
  );
};
