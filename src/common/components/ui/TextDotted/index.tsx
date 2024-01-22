
import Typography from '../Typography/Typography';
import styles from './style.module.scss';

type TextDottedProps = {
    text: string;
    endNode?: React.ReactNode;
    textEnd?: string;
}
const TextDotted = ({endNode,text,textEnd}:TextDottedProps) => {

    return (
      <div className={styles.wrapper}>
           <Typography textLineHeight='0.9' variant='body4'>{text}</Typography>
           <div className={styles.dots}></div>
           {textEnd && <Typography textLineHeight='0.9' variant='body4'>{textEnd}</Typography>}
           {endNode}
      </div>
    );
};

export default TextDotted;