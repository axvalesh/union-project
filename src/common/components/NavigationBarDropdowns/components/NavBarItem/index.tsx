
import Typography from '@common/components/ui/Typography/Typography';
import styles from './style.module.scss';
import AppColor from '@common/styles/variables-static';
import { NavItemType } from '../..';
import { useHover } from '@common/helpers/useHover';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';


const NavBarItem = ({items,title}:NavItemType) => {
    const [hovered,eventHandlers] = useHover({delayInMilliseconds: 200});
    return (
    <div {...eventHandlers} className={styles.navbar_item}>
        <Typography textLineHeight='1' variant='body4' fontWeight='500' textTransform='uppercase'>{title}</Typography>
        <AppColor.chevronBottom fill='white'width={'12px'} height={'6px'} />

        <div className={styles.absolute_wrapper} style={{display: hovered ? 'block' : 'none'}}>
            <div className={styles.grid_wrapper}>
                {items.map(item =>
                    <div>
                        <Typography variant='body4' fontWeight='500' color={AppColor.transparentBlack}>{item.title}</Typography>
                        <DynamicPadding desktop='20px' mobile='20px'/>
                       <div className={styles.gap_20}>
                            {item.links.map(item =>
                                <Typography color={AppColor.text} variant='body4'>{item}</Typography>    
                            )}
                       </div>
                    </div>    
                )}
            </div>
        </div>
    </div>    
    );
};

export default NavBarItem;