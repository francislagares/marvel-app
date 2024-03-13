'use client';
import { CharacterCard } from '@/components';
import { useFavoritesContext } from '@/context/FavoritesContext';

import styles from '../styles/styles.module.css';

const FavoritesPage = () => {
  const { favorites } = useFavoritesContext();

  return (
    <section className={styles.charactersList}>
      {favorites.map(favorite => (
        <CharacterCard key={favorite.id} character={favorite} />
      ))}
    </section>
  );
};

export default FavoritesPage;
