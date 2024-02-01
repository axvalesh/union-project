import AppColor from '@common/styles/variables-static';
import Typography from '../ui/Typography/Typography';
import styles from './Logo.module.scss'

type LogoProps = {
  color?: string;
  text?: string;
}
const Logo = ({color,text}:LogoProps) => {

    return (
      <span className={styles.logo_wrapper}>
        <p style={{color: color,WebkitTextStrokeColor: color}} className={styles.p}>
          UNIANO
        </p>
       <Typography fontWeight='600' fontSizeStatic='12px' color={color ?? AppColor.text} textTransform='uppercase'>
       {text ?? 'WHERE TALENTS UNITE '}
       </Typography>
      </span>
    );
};

export default Logo;