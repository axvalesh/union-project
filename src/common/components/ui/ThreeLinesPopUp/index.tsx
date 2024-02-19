
import AppColor from '@common/styles/variables-static';
import Typography from '../Typography/Typography';
import styles from './style.module.scss';

const ThreeLinesPopUp = () => {

    return (
     <div style={{position: 'relative'}}>
          <div className={styles.items_grid}>
               <Item icon={<AppColor.share />} title={'Share'} />
               <Item icon={<AppColor.report />} title={'Report'} />
               <Item icon={<AppColor.edit fill={AppColor.text} />} title={'Edit'} />
               <Item icon={<AppColor.playGreen />} title={'Resume'} color={AppColor.green} />
               <Item icon={<AppColor.close fill={AppColor.red} />} color={AppColor.red} title={'Delete'} />
          </div>
          <div className={styles.triangle}></div>
     </div>
    );
};

type ItemProps = {
    title: string;
    icon: React.ReactNode;
    onClick?: () => void;
    color?: string;

}
const Item = ({ title, icon, onClick,color }:ItemProps) => (
    <div className={`${styles.item} cursor`} onClick={onClick}>
        {icon}
        <Typography color={color ?? AppColor.text} variant='body5'>{title}</Typography>
    </div>
);

type ThreeLinesPopUpProps = {
    items: ItemProps[];
    positionRight?: string;
}
export const ThreeLinesPopUpCustom = ({items,positionRight=''}:ThreeLinesPopUpProps) => {

    return (
     <div style={{position: 'relative'}}>
          <div className={styles.items_grid}>
               {items.map((item, index) => <Item key={index} {...item} />)}
          </div>
          <div
          style={positionRight != '' ? {transform: 'translateX(0)', right: positionRight,left: 'auto'} : {}}
          className={styles.triangle}></div>
     </div>
    );
};

export default ThreeLinesPopUp;