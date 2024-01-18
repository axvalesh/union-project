import AppColor from '@common/styles/variables-static'
import styles from './style.module.scss'
import NavBarLink from './components/NavBarLink'
import { useHover } from '@common/helpers/useHover'
import Typography from '../ui/Typography/Typography'
import { nav_categorys, nav_var_categorys, nav_var_categorys_titles } from './components/PagesNav/content'
import PagesNav from './components/PagesNav'

type NavigationBarProps = {
    currentCategoryTitle: nav_var_categorys_titles
    activePageIndex: number
}
const NavigationBar = ({
    currentCategoryTitle,
    activePageIndex,
}: NavigationBarProps) => {

    const currentCategory: nav_categorys = nav_var_categorys.find(
        (item) => item.title == currentCategoryTitle
    ) ?? {
        title: 'Dashboard',
        text: 'Your account center you progress',
        image: AppColor.dashboard,
        index: 0,
        links: [],
    }

    const [hovered, eventHandlers] = useHover({delayInMilliseconds: 2000}); 
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div {...eventHandlers} className={styles.category_hover}>
                    {<currentCategory.image fill='white'/>}
                    <span className={styles.currentTitle}>
                        <Typography textTransform='uppercase' variant='body4' color='white'>{currentCategory.title}</Typography>
                    </span>
                    
                    <PagesNav
                        hovered={hovered}
                    />
                </div>
                <div className={styles.vertical_line}></div>
               <div className={styles.links_wrapper}>
                {currentCategory.links.map((item,index) => (
                        <NavBarLink 
                            parentRoute={currentCategory.title}
                            index={index}
                            activeIndex={activePageIndex}
                            title={item.title}
                        />
                    ))}
               </div>
               <div className={styles.chevron_down}>
                    <AppColor.chevronBottom fill='white'/>
               </div>
            </div>
        </div>
    )
}

export default NavigationBar
