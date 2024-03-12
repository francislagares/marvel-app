'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import { Comics } from '@/components';
import { useCharactersContext } from '@/context/CharactersContext';
import { Character } from '@/models/character';
import { Comic } from '@/models/comic';

import styles from './styles.module.css';

interface CharacterPage {
  params: {
    id: string;
  };
}

const CharacterPage = ({ params }: CharacterPage) => {
  const { id } = params;
  const { fetchCharacterDetails, fetchCharacterComics } =
    useCharactersContext();
  const [character, setCharacter] = useState<Character>();
  const [comics, setComics] = useState<Comic[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const characterData = await fetchCharacterDetails(id);
        setCharacter(characterData);

        const comicsData = await fetchCharacterComics(id);
        setComics(comicsData.results);
      } catch (error) {
        console.error('Error fetching character details or comics:', error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id, fetchCharacterDetails, fetchCharacterComics]);

  return (
    <>
      {character && (
        <>
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
        </>
      )}
    </>
  );
};

export default CharacterPage;
