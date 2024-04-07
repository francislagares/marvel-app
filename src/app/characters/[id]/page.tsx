'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import { useCharacter } from '@/hooks/useCharacter';
import { useComics } from '@/hooks/useComics';
import { Comics, HeartIcon } from '@/components';
import { useFavoritesContext } from '@/context/FavoritesContext';

import styles from './styles.module.css';

interface CharacterPage {
  params: {
    id: string;
  };
}

const CharacterPage = ({ params }: CharacterPage) => {
  const { id } = params;
  const { isFavorite, addFavorite, removeFavorite } = useFavoritesContext();
  const { data: { results: comics = [] } = {} } = useComics(id);
  const { data: { results: [character] = [] } = {} } = useCharacter(id);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleFavorites = () => {
    if (character) {
      const characterId = character.id ?? 0;

      isFavorite(characterId)
        ? removeFavorite(characterId)
        : addFavorite(character);
    }
  };

  return (
    <>
      {character && (
        <div className={`${styles.wrapper} ${loaded ? styles.slideIn : ''}`}>
          <div className={styles.characterDetails}>
            <section className={styles.characterSummary}>
              <Image
                className={styles.characterImage}
                src={`${character?.thumbnail.path}.${character?.thumbnail.extension}`}
                alt={character.name}
                width={320}
                height={320}
                priority={true}
              />
              <div className={styles.characterInfo}>
                <div className={styles.characterTitle}>
                  <b className={styles.div}>{character.name}</b>
                  <HeartIcon
                    isFavorite={isFavorite(character.id)}
                    onClick={handleFavorites}
                  />
                </div>
                <div className={styles.characterDescription}>
                  {character.description
                    ? character.description
                    : 'There is no description for this character.'}
                </div>
              </div>
            </section>
          </div>
          <Comics comics={comics} />
        </div>
      )}
    </>
  );
};

export default CharacterPage;
