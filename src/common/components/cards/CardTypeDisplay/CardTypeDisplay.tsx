import { CSSProperties } from 'react';

import styles from './style.module.scss';
import AppColor from '@common/styles/variables-static';

type CardTypeDisplayProps = {
    text: string;
    backgroundColor: string;
    textColor: string;
    textTransform?: CSSProperties['textTransform'];
}
const CardTypeDisplay = ({text,backgroundColor,textColor,textTransform}:CardTypeDisplayProps) => {

    return (
    <div className={styles.total_wrapper}>
        <div style={{display: 'flex',backgroundColor: AppColor.text,borderTopLeftRadius: '5px'}}>
          <div className={styles.round_box}></div>
        <div className={styles.wrapper} style={{backgroundColor: backgroundColor}}>
          <p style={{textTransform: textTransform,color: textColor}} className={styles.text}>{text}</p>
        </div>
        </div>
      <div className={styles.wrapper_triangles}>
        <div className={styles.triable_top}></div>
        <div className={styles.triable_bottom}></div>
      </div>
    </div>
    );
};

export default CardTypeDisplay;