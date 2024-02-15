
import AppColor from '@common/styles/variables-static';
import Typography from '../../Typography/Typography';
import styles from './style.module.scss';

export type MessageProps = {
    side: 'right' | 'left';
    backgroundColor?: string;
    text: string;
    time: string;
}
const MessageItem = ({backgroundColor,side,text,time}:MessageProps) => {

    const borderStyle = side == 'left' ?
    {
        borderTopLeftRadius: '0px'
    } :
    {
        borderTopRightRadius: '0px'
    }
    return (
      <div className={styles.wrapper_top}>
        {side == 'left' && <AppColor.threePoints />}
          <div style={{alignItems: side == 'left' ? 'start' : 'end'}} className={styles.message_flex}>
            <Typography color={AppColor.transparentBlack} variant='body5'>{time}</Typography>
            <div style={{...borderStyle,backgroundColor: backgroundColor}} className={styles.message_item}>
               <Typography variant='body4'>{text}</Typography>
            </div>
          </div>
          {side == 'right' && <AppColor.threePoints />}
      </div>
    );
};

export default MessageItem;