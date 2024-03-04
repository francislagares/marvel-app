import { CharacterCard } from '@/app/components/Characters';
import { Character } from '@/models/character';
import { getCharacters } from '@/services/api';

import styles from './styles.module.css';

export const CharactersList = async () => {
  const characters = await getCharacters();

  if (!characters) {
    throw new Error(
      'There was a problem with loading the characters. Please try again later.',
    );
  }

  return (
    <section className={styles.charactersList}>
      {characters?.results.map((character: Character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </section>
  );
};
