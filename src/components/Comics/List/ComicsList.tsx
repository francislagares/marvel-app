import { Comic } from '@/models/comic';
import { ComicCard } from '../Card/ComicCard';

import styles from './styles.module.css';

interface ComicsList {
  comics: Comic[];
}

export const Comics = ({ comics }: ComicsList) => {
  return (
    <div className={styles.comics}>
      <h1 className={styles.comicsTitle}>COMICS</h1>
      <div className={styles.comicsList}>
        {comics?.map(comic => <ComicCard key={comic.id} comic={comic} />)}
      </div>
    </div>
  );
};
