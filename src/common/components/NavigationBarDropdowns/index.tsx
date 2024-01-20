
import AppColor from '@common/styles/variables-static';
import DynamicPadding from '../ui/DynamicPadding';
import Typography from '../ui/Typography/Typography';
import styles from './style.module.scss';
import NavBarItem from './components/NavBarItem';

type NavigationBarDropdownsProps = {
    title: string;
    titleIcon: any;
    navItems: NavItemType[]
}

export type NavItemType = {
    title: string;
    items: SubNavItemsType[]
}

type SubNavItemsType = {
    title: string;
    links: string[]; 
}
const NavigationBarDropdowns = ({navItems,title,titleIcon}:NavigationBarDropdownsProps) => {

    return (
      <div className={styles.wrapper}>
           <div className={styles.wrapper_shell}>
               <div className={styles.flex_center}>
                   {titleIcon}
                   <div className={styles.desktop}>
                        <Typography textLineHeight='1' textTransform='uppercase' variant='body4' fontWeight='500' color='white'>{title}</Typography>
                   </div>
               </div>
               <DynamicPadding side='right' desktop='20px' mobile='15px'/>
    
               <div className={styles.vertical_line}></div>
               <DynamicPadding side='right' desktop='20px' mobile='15px'/>
    
               <div className={styles.nav_items_wrapper}>
                    {navItems.map(item =>
                        <NavBarItem items={item.items} title={item.title} />
                    )}
               </div>
    
           </div>
      </div>
    );
};

export default NavigationBarDropdowns;