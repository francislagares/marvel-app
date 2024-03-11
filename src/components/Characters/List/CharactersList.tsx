import { CharacterCard } from '@/components';
import { Character } from '@/models/character';
import { getCharacters } from '@/services/api';

import styles from './styles.module.css';

export const CharactersList = async () => {
  const characters = await getCharacters();

  return (
    <>
      <div className={styles.resultsCount}>{`${characters.count} RESULTS`}</div>
      <section className={styles.charactersList}>
        {characters?.results.map((character: Character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </section>
    </>
  );
};
