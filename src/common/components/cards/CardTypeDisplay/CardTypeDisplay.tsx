import styles from './style.module.scss';

type possibleText = 'Business'
type CardTypeDisplayProps = {
    text: possibleText;
    backgroundColor: string;
    textColor: string;
}
const CardTypeDisplay = ({text,backgroundColor,textColor}:CardTypeDisplayProps) => {

    return (
    <div className={styles.total_wrapper}>
        <div className={styles.round_box}></div>
      <div className={styles.wrapper} style={{backgroundColor: backgroundColor}}>
        <p style={{color: textColor}} className={styles.text}>{text}</p>
      </div>
      <div className={styles.wrapper_triangles}>
        <div className={styles.triable_top}></div>
        <div className={styles.triable_bottom}></div>
      </div>
    </div>
    );
};

export default CardTypeDisplay;