
import { useState } from 'react';
import styles from './style.module.scss';
import Typography from '@common/components/ui/Typography/Typography';
import AppColor from '@common/styles/variables-static';

type ChooseVariantProps ={
    items: string[];
    callback: (item:string) => void;
}
const ChooseVariant = ({callback,items}:ChooseVariantProps) => {

    const [activeItem,setActiveItem] = useState(items[0]);

    function handleChoose(item:string) {
        callback(item);
        setActiveItem(item);
    }
    return (
      <div>
           <div className={styles.desktop}>
                <div className={styles.desktop_wrapper}>
                    {items.map(item =>
                    <div onClick={() => {handleChoose(item)}}> 
                        <ItemsDesktop activeTitle={activeItem} title={item} />    
                    </div>
                    )}
                </div>
           </div>
           <div className={styles.mobile}>
                <div>
                    <Typography>{activeItem}</Typography> <AppColor.chevronBottom fill={AppColor.orange} />
                </div>
           </div>
      </div>
    );
};

type ItemsDesktopProps = {
    activeTitle:string;
    title:string;
}
const ItemsDesktop = ({activeTitle,title}:ItemsDesktopProps) => {
    return (
        <div style={{border: activeTitle == title ?`1px solid ${AppColor.orange}` : '1px solid transparent'}} className={styles.item_desktop}>
            <Typography textTransform='uppercase' variant='body4' fontWeight='500' color={activeTitle == title ? AppColor.orange : AppColor.text}>{title}</Typography>
        </div>
    )
}

export default ChooseVariant;