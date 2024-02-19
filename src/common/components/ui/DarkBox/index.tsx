
import Typography from '../Typography/Typography';
import styles from './style.module.scss';

type DarkBoxProps = {
    text: string;
    fonstSize?: string;
    onClick?: () => void;
}
const DarkBox = ({onClick,text,fonstSize}:DarkBoxProps) => {

    return (
      <div onClick={() => {
        if(onClick) {
          onClick()
        }
      }} className={styles.dark_box}>
           <Typography fontSizeStatic={fonstSize} textLineHeight='1' variant='body3' fontWeight='500' color='white'>
            {text}
           </Typography>
      </div>
    );
};

export default DarkBox;