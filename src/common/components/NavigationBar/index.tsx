import AppColor from '@common/styles/variables-static'
import styles from './style.module.scss'
import NavBarLink from './components/NavBarLink'
import { useHover } from '@common/helpers/useHover'
import Typography from '../ui/Typography/Typography'
import { nav_categorys, nav_var_categorys, nav_var_categorys_titles } from './components/PagesNav/content'
import PagesNav from './components/PagesNav'
import { useState, useEffect, useRef } from 'react'

type NavigationBarProps = {
    currentCategoryTitle?: nav_var_categorys_titles
    activePageIndex: number
    newCategory?: nav_categorys;
}
const NavigationBar = ({
    currentCategoryTitle,
    activePageIndex,
    newCategory
}: NavigationBarProps) => {

    const currentCategory: nav_categorys = newCategory ?? nav_var_categorys.find(
        (item) => item.title == currentCategoryTitle
    )

    const [hovered,setHovered] = useState(false);

    const [showDropdown,setShowDropdown] = useState(false);

    const [visible, setVisible] = useState(false);

    const nodeRef = useRef(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
           const clickedElement = event.target as HTMLElement;
           if (clickedElement.closest('.overlay_prevent_close')) return;  //ignore overlay modal and modals children
   
           
            if (nodeRef.current && !nodeRef.current.contains(event.target as Node)) {
                setHovered(false);
                console.log('close');
            } else {
               console.log('not close');
               
            }
        };
   
        document.addEventListener('mousedown', handleOutsideClick);
   
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setVisible(true);
          }, 0);
    }, []);
    
    return (
        <div ref={nodeRef} style={{opacity: visible ? '1' : '0'}}  className={styles.wrapper}>
            <div className={styles.content}>
                <div className='gap_15'>
                    <div  className={styles.category_hover}>
                        <div className={styles.title_hover} onClick={() => {setHovered(prev => !prev)}}>
                            {<currentCategory.activeImage fill='white'/>}
                            <span className={styles.currentTitle}>
                                <Typography textTransform='uppercase' variant='body4' color='white'>{currentCategory.title}</Typography>
                            </span>
                        </div>
                        
                        <PagesNav
                            hovered={hovered}
                        />
                    </div>
                    <div className={styles.vertical_line}></div>
                    <div className='mobile'>
                    <Typography color='white' fontWeight='500' variant='body4' textLineHeight='1'>{currentCategory.links[activePageIndex].title.toUpperCase()}</Typography>
                    </div>
                </div>
                <div onClick={() => [setShowDropdown(prev => !prev)]} className='mobile' style={{flexGrow:'1',height:'100%'}}>

                </div>
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
               <div onClick={() => [setShowDropdown(prev => !prev)]}  className={styles.chevron_down}>
                    
                    {showDropdown
                    ? <AppColor.chevronTop fill='white'/>
                    : <AppColor.chevronBottom fill='white'/>}
               </div>
            </div>
            {showDropdown && <div className='mobile'>
                <div className={styles.absolute_dropdown}>
                <div className={styles.dropdown_grid}>
                    {currentCategory.links.map((item,index) => (
                            <NavBarLink 
                                parentRoute={currentCategory.title}
                                index={index}
                                activeIndex={activePageIndex}
                                title={item.title}
                            />
                        ))}
                </div>
                </div>
                </div>}
        </div>
    )
}

export default NavigationBar
