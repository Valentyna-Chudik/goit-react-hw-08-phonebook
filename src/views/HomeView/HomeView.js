import styles from './HomeView.module.css';

export default function HomeView() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Welcome to Phonebook App{' '}
        <span role="img" aria-label="Иконка приветствия">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
}
