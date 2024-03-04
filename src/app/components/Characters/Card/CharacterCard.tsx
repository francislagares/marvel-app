import Image from 'next/image';

import { Character } from '@/models/character';

import styles from './styles.module.css';

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
  return (
    <div className={styles.characterCard}>
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
      </div>
    </div>
  );
};
