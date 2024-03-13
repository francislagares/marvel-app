'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { HeartIcon } from '@/components/HeartIcon/HeartIcon';
import { useFavoritesContext } from '@/context/FavoritesContext';
import { Character } from '@/models/character';

import styles from './styles.module.css';

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  const { favorites, addFavorite, removeFavorite, isFavorite } =
    useFavoritesContext();
  const [isFavorited, setIsFavorited] = useState<boolean>(
    isFavorite(character.id),
  );

  useEffect(() => {
    // Update isFavorited when the favorites context changes
    setIsFavorited(isFavorite(character.id));
  }, [favorites, isFavorite, character.id]);

  const handleFavorites = () => {
    isFavorited ? removeFavorite(character.id) : addFavorite(character);

    setIsFavorited(!isFavorite);
  };

  return (
    <div className={styles.characterCard}>
      <Link href={`/characters/${character.id}`}>
        <Image
          className={styles.characterPhotoIcon}
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
          alt={character.name}
          width={188}
          height={245}
          priority={true}
        />
        <div className={styles.characterInfo}>
          <div className={styles.name}>{character.name}</div>
          <HeartIcon
            small={true}
            isFavorite={isFavorited}
            onClick={handleFavorites}
          />
        </div>
      </Link>
    </div>
  );
};
