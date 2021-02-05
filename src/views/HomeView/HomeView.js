import styles from './HomeView.module.css';
import contacts from '../../contacts1.png';

export default function HomeView() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <span className={styles.primaryText}>
          Welcome to Phonebook App. <br />
        </span>
        <span className={styles.secondaryText}>
          Keep your contacts organized and up to date{' '}
        </span>
      </h1>
      <img src={contacts} alt="logo" width="260" className={styles.logo} />
    </div>
  );
}
