import Logo from "@common/components/Logo/Logo";
import styles from './style.module.scss'
import MyButton from "@common/components/ui/MyButton/MyButton";
import AppColor from "@common/styles/variables-static";
import mobile_user_svg from '@assets/svg/header_mobile-user.svg';
import { useHover } from "@common/helpers/useHover";
import MenuLinks from "../components/MenuLinks";
import HorizontalLine from "../../ui/Lines/HorizontalLine";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SizeBox from "../../ui/SizeBox";
import Typography from "@common/components/ui/Typography/Typography";
import InputCommon from "../../ui/inputs/InputCommon";
import { categorysText, links } from "../components/MenuLinks/content";
import MyButtonTransparent from "@common/components/ui/MyButton/variants/MyButtonTransparent";

const HeaderNothAuthorized = () => {

  const [hovered, eventHandlers] = useHover({delayInMilliseconds: 2000}); 

  const [visible, setVisible] = useState(false);

  const [showModal,setShowModal] = useState(false);

  useEffect(() => {
      setTimeout(() => {
          setVisible(true);
        }, 0);
  }, []);

  useEffect(() => {
    if(showModal) {
        document.body.style.overflow = "hidden"
    } else {
        document.body.style.overflow = "auto"
    }
  },[showModal])

  const [activeSelection,setActiveSelection] = useState('');

    return (
      <div className={styles.header_fixed}>
        <div className={`${styles.header_modal_fixed} ${showModal && styles.active_modal}`}>
          <div className={styles.scroll_bar}>
            <SizeBox height="100px"/>
            <div className={styles.modal_padding}>
              <div className={styles.white_box}>
                  <SelectDropdown 
                    activeTitle={activeSelection}
                    callback={(item) => {setActiveSelection(item)}}
                    title="Customers"
                  />
                  <SelectDropdown 
                    activeTitle={activeSelection}
                    callback={(item) => {setActiveSelection(item)}}
                    title="Freelancers"
                  />
                  <SelectDropdown 
                    activeTitle={activeSelection}
                    callback={(item) => {setActiveSelection(item)}}
                    title="Sponsors"
                  />
                  <SelectDropdown 
                    activeTitle={activeSelection}
                    callback={(item) => {setActiveSelection(item)}}
                    title="Managers"
                  />  
              </div>
  
              <SizeBox height="50px"/>
  
              {activeSelection != '' &&
              <MobileNavBar />}
          </div>
          </div>
        </div>
        <div style={{opacity: visible ? '1' : '0'}} className={styles.wrapper}>
          <header style={{backgroundColor: showModal ? '#EFEFEF' : 'transparent'}} className={styles.header}>
          <div className={styles.header__container}>
            <div onClick={() => {setShowModal(prev => !prev)}} style={{backgroundColor: showModal ? AppColor.orange : 'transparent'}} className={styles.hamburger__wrapper}>
              <span style={{backgroundColor: showModal ? 'white' : AppColor.orange}} className={styles.hamburger_line}></span>
              <span style={{backgroundColor: showModal ? 'white' : AppColor.orange}} className={styles.hamburger_line}></span>
              <span style={{backgroundColor: showModal ? 'white' : AppColor.orange}} className={styles.hamburger_line}></span>
            </div>
             <div className={styles.header_first_part}>
                <span className={styles.logo}>
                  <Logo />
                </span>
             </div>
            <div className={styles.hamburger__wrapper_user}>
            <img src={mobile_user_svg} alt="" />
  
             </div>
             <div className={styles.header_second_part}>
                <li>
                  <ul {...eventHandlers} >Customers</ul>
                  <ul {...eventHandlers} >Freelancers</ul>
                  <ul {...eventHandlers} >Sponsors</ul>
                  <ul {...eventHandlers} >Managers</ul>
                  
                </li>
                <div {...eventHandlers} className={`${styles.hover_wrapper} ${hovered ? styles.active : styles.disabled}`}>
                  <MenuLinks />
                </div>
             </div>
             <div className={styles.header_third_part}>
               <Link to={'sign-in'}>
                  <MyButtonTransparent onClick={() => {}} fontWeight="500">
                    Sing in
                  </MyButtonTransparent>
               </Link>
               <Link to={'sign-up'}>
                  <MyButton onClick={() => {}} fontWeight="500">
                    Sing up
                  </MyButton>
               </Link>
             </div>
            </div>
  
            
        </header>
        
        </div>
      </div>
    );
};



const subCategoryItems:ChooseCategoryType[] = [
  {
    icon: <AppColor.development fill={AppColor.text}/>,
    title: 'Development'
  },
  {
    icon: <AppColor.desing fill={AppColor.text}/>,
    title: 'Design'
  },
  {
    icon: <AppColor.marketing fill={AppColor.text}/>,
    title: 'Marketing'
  },
  {
    icon: <AppColor.writing fill={AppColor.text}/>,
    title: 'Writing'
  },
  {
    icon: <AppColor.managment fill={AppColor.text}/>,
    title: 'Management'
  },
  {
    icon: <AppColor.consulting fill={AppColor.text}/>,
    title: 'Consulting'
  }
]
export const MobileNavBar = () => {

  const [activeCategory,setActiveCategory] = useState<categorysText>(categorysText.Development); 
  const [activeSubCategory,setActiveSubCategory] = useState('');
  return (
    <div className={styles.active_selection}>
      <div className={styles.active_selection_padding}>
        <ChooseCategory />
      </div>
      <HorizontalLine />
      <div className={styles.active_selection_padding}>
        <InputCommon
          callback={() => {}}
          placeholder="Search"
          padding="10px 15px"
        />

        <SizeBox height="20px"/>

        <div className={styles.sub_grid}>
          {subCategoryItems.map(item =><ChooseSubCategory 
            activeTitle={activeSubCategory}
            callback={(item) => {setActiveSubCategory(item)}}
            details={item}

          />)}
        </div>
        <SizeBox height="20px"/>
      </div>
      <HorizontalLine />
      <SizeBox height="20px"/>

         <div className={styles.active_selection_padding}>
           <div className={styles.links_grid_20}>
             {links[activeCategory].map(item =>
                      <div className={styles.category_link_wrapper}>
                        
                        <Typography textLineHeight='100%' variant='body4' fontWeight='500' color={AppColor.transparentBlack}>
                            {item.title}
                        </Typography>

                        <SizeBox height="20px"/>
                     
                          <div className={styles.links_grid_15}>
                            {item.content.map(item =>
                              <Link to={item.link}>
                                <Typography textLineHeight='100%' variant='body4' fontWeight='400' color={AppColor.text}>
                                    {item.text}
                                </Typography>
                              </Link>  
                            )}
                          </div>
                      </div>  
                    )}
           </div>
         </div>


      <SizeBox height="20px"/>
    </div>
  )
}

type ChooseSubCategoryProps = {
  details: ChooseCategoryType;
  callback:  (item:string) => void;
  activeTitle: string;
}
const ChooseSubCategory = ({activeTitle,callback,details,}:ChooseSubCategoryProps) => {
  function handleClick() {
    if(activeTitle != details.title) {
      callback(details.title);
    }
  }
  return (
    <div onClick={handleClick} className={styles.sub_category} style={{backgroundColor: activeTitle == details.title ? AppColor.white : 'transparent'}}>
        {details.icon}
        <Typography variant="body4" fontWeight={activeTitle == details.title ? '500' : '400'}>
          {details.title}
        </Typography>
    </div>
  )
}

type ChooseCategoryType = {
  title: string;
  icon: React.ReactNode;
}

const categoryItems:ChooseCategoryType[] = [
  {
    icon: <AppColor.cart fill="white"/>,
    title: 'Services'
  },
  {
    icon: <AppColor.ordersWhite fill="white"/>,
    title: 'Orders'
  }
]
const ChooseCategory = () => {

  const [activeCategory,setActiveCategory] = useState<ChooseCategoryType>(categoryItems[0]);

  const [showDropdown,setShowdropdown] = useState(false);

  const borderStyles = {
    borderTopLeftRadius: showDropdown ? '20px' : '20px',
    borderTopRightRadius: showDropdown ? '20px' : '20px',
    borderBottomLeftRadius: showDropdown ? '0px' : '20px',
    borderBottomRightRadius: showDropdown ? '0px' : '20px',
};
  return (
    <div style={{position: 'relative'}}>

      <div onClick={() => {setShowdropdown(prev => !prev)}} style={{...borderStyles}} className={styles.choose_category_item}>
        {activeCategory.icon}
        <Typography variant="body4" fontWeight="500" color='white'>{activeCategory.title}</Typography>
        <div style={{display: 'flex',marginLeft: 'auto'}}>
          {showDropdown
          ? <AppColor.chevronTop width={'12px'} height={'6px'} fill="white"/>
          : <AppColor.chevronBottom width={'12px'} height={'6px'} fill="white"/>}
        </div>
      </div>

      <div style={{opacity: showDropdown ? '1' : '0',pointerEvents: showDropdown ? 'all' : 'none'}} className={styles.choose_category_grid}>
        {categoryItems.map(item => 
          <div style={{padding: '5px 0px'}} onClick={() => {setActiveCategory(item);setShowdropdown(false)}} className="gap_10">
            {item.icon}
            <Typography variant="body4" fontWeight="500" color='white'>{item.title}</Typography>
          </div>  
        )}
      </div>

    </div>
  )
}
type SelectDropdownProps = {
  title: string;
  activeTitle: string;
  callback: (item:string) => void;
}
export const SelectDropdown = ({activeTitle,callback,title}:SelectDropdownProps) => {
  function handleClick() {
    if(activeTitle != title) {
      callback(title);
    }
  }
  return (
    <div onClick={handleClick} className={styles.select_dropdown}>
      <Typography color={activeTitle == title ? AppColor.orange : AppColor.text} fontSizeStatic="1rem" fontWeight="400">
        {title}
      </Typography>
      <AppColor.chevronBottom fill={activeTitle == title ? AppColor.orange : AppColor.text} width={'12px'} height={'6px'}/>
    </div>
  )
}
export default HeaderNothAuthorized;