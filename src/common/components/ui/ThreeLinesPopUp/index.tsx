
import AppColor from '@common/styles/variables-static';
import Typography from '../Typography/Typography';
import styles from './style.module.scss';
import { useState } from 'react';

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
    <div style={{whiteSpace: 'nowrap'}} className={`${styles.item} cursor`} onClick={onClick}>
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

type ButtonDropdownSelectProps = {
    text: string;
    variants: string[];
}
export const ButtonDropdownSelect = ({text,variants}:ButtonDropdownSelectProps) => {

    const [openDropdown,setOpenDropdown] = useState(false);
    const [activeSelection,setActiveSelection] = useState(variants[0]);

    return (
     <div style={{position: 'relative'}}>
        <div onClick={() => {setOpenDropdown(prev => !prev)}} style={{backgroundColor: openDropdown ? AppColor.orange : 'white'}} className={`${styles.button_active} cursor`}>
            <Typography textTransform='uppercase' variant='body4' fontWeight='500' color={openDropdown ? 'white' : AppColor.orange}>{activeSelection}</Typography>
            {
                openDropdown
                ? <AppColor.chevronTop fill={'white'} width={'16px'} height={'8px'} />
                : <AppColor.chevronBottom fill={AppColor.orange} width={'16px'} height={'8px'} />
            }
        </div>
    
         <div style={{display: openDropdown ? 'block' : 'none'}} className={styles.absolute_item}>
             <div style={{position: 'relative'}}>
                  <div className={styles.items_grid}>
                       {variants.map(item => 
                       <div onClick={() => {setActiveSelection(item);setOpenDropdown(false)}} className={`${styles.dropdown_item} cursor`}>
                           <Typography variant='body4' fontWeight='500' textTransform='uppercase'>
                                {item}
                           </Typography>
                       </div>)
                       }
                  </div>
                  <div
                  className={styles.triangle}></div>
             </div>
         </div>
     </div>
    );
};

export default ThreeLinesPopUp;