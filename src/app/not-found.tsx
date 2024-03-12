import Link from 'next/link';

import styles from '@/styles/error.module.css';

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Something went wrong!</h2>
      <Link className={styles.button} href='/'>
        Back Home
      </Link>
    </div>
  );
};

export default NotFound;
