import Typography from '../Typography/Typography';
import styles from './Logo.module.scss'

const Logo = () => {

    return (
      <span className={styles.logo_wrapper}>
        <p className={styles.p}>
          UNIANO
        </p>
        <h2 className={styles.h2}>
          WHERE TALENTS UNITE 
        </h2>
      </span>
    );
};

export default Logo;