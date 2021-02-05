import LoaderSpinner from 'react-loader-spinner';

import styles from './Loader.module.css';

export default function Loader() {
  return (
    <div className={styles.loader}>
      <LoaderSpinner type="TailSpin" color="#00BFFF" height={40} width={40} />
    </div>
  );
}
