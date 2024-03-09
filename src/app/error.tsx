'use client';

import styles from '@/styles/error.module.css';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const ErrorBoundary = ({ error, reset }: ErrorProps) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()} className={styles.button}>
        Try Again
      </button>
    </div>
  );
};

export default ErrorBoundary;
