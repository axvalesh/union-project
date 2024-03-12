
import Typography, { fontWeight } from '../Typography/Typography';
import styles from './style.module.scss';

type DarkBoxProps = {
    text: string;
    fonstSize?: string;
    onClick?: () => void;
    fontWeight?: fontWeight;
}
const DarkBox = ({onClick,text,fonstSize,fontWeight}:DarkBoxProps) => {

    return (
      <div onClick={() => {
        if(onClick) {
          onClick()
        }
      }} className={styles.dark_box}>
           <Typography fontSizeStatic={fonstSize} textLineHeight='1' variant='body4' fontWeight={fontWeight ?? '500'} color='white'>
            {text}
           </Typography>
      </div>
    );
};

export default DarkBox;