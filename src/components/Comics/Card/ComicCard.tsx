import Image from 'next/image';

import { Comic } from '@/models/comic';
import { extractYearFromString, removeYearFromString } from '@/utils';

import styles from './styles.module.css';

interface ComicProps {
  comic: Comic;
}

type LoaderProps = {
  src: string;
  width: number;
};

export const ComicCard = ({ comic }: ComicProps) => {
  const loaderProp = ({ src, width }: LoaderProps) => {
    return src + '?w=' + width;
  };

  return (
    <div className={styles.comicsContent}>
      <div className={styles.comic}>
        <Image
          className={styles.comicImage}
          alt={comic.title}
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
          width={179}
          height={268}
          priority={true}
          loader={loaderProp}
        />
      </div>
      <div className={styles.comicInfo}>
        <div className={styles.comicTitle}>
          {removeYearFromString(comic.title)}
        </div>
        <div className={styles.comicYear}>
          {extractYearFromString(comic.title)}
        </div>
      </div>
    </div>
  );
};
