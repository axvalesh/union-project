import Typography from '../ui/Typography/Typography';
import styles from './Logo.module.scss'

type LogoProps = {
  color?: string;
}
const Logo = ({color}:LogoProps) => {

    return (
      <span className={styles.logo_wrapper}>
        <p style={{color: color,WebkitTextStrokeColor: color}} className={styles.p}>
          UNIANO
        </p>
        <h2 style={{color: color}} className={styles.h2}>
          WHERE TALENTS UNITE 
        </h2>
      </span>
    );
};

export default Logo;