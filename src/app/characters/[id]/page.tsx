import Image from 'next/image';

import { detailCharacter } from '@/services/api';

import styles from './styles.module.css';

interface CharacterPage {
  params: {
    id: string;
  };
}

const CharacterPage = async ({ params }: CharacterPage) => {
  const { id } = params;
  const character = await detailCharacter(id);
  const { thumbnail, name, description } = character.results[0];

  return (
    <>
      <div className={styles.characterDetails}>
        <section className={styles.characterSummary}>
          <Image
            className={styles.characterImage}
            src={`${thumbnail.path}.${thumbnail.extension}`}
            alt={name}
            width={320}
            height={320}
            priority={true}
          />
          <div className={styles.characterInfo}>
            <div className={styles.characterTitle}>
              <b className={styles.div}>{name}</b>
            </div>
            <div className={styles.characterDescription}>{description}</div>
          </div>
        </section>
      </div>
      {/* <div>
        <section className={styles.comics}>
          <Comics comics={comics} />
        </section>
      </div> */}
    </>
  );
};

export default CharacterPage;
