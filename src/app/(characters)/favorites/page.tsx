import styles from '../styles/styles.module.css';

const FavoritesPage = () => {
  return (
    <>
      <div className={styles.resultsCount}>{` RESULTS`}</div>
      <section className={styles.charactersList}>Favorite Characters</section>
    </>
  );
};

export default FavoritesPage;
