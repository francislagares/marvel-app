import Image from 'next/image';
import Link from 'next/link';

import { Character } from '@/models/character';

import styles from './styles.module.css';

interface CharacterCardProps {
  character: Character;
}

export const CharacterCard = ({ character }: CharacterCardProps) => {
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
        </div>
      </Link>
    </div>
  );
};
