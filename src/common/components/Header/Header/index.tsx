import Logo from '@common/components/Logo/Logo'
import AppColor from '@common/styles/variables-static'
import { useHover } from '@common/helpers/useHover'
import MenuLinks from '../components/MenuLinks'

import styles from './style.module.scss'
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange'
import UserAvatar from '../../ui/UserAvatar'
import HorizontalLine from '../../ui/Lines/HorizontalLine'
import DynamicPadding from '../../ui/DynamicPadding'
import { fakeUserConstant } from '@common/models/user'
import { useEffect, useRef, useState } from 'react'
import PopUpBottom from '../../ModalPopUps/PopUpBottom'
import SearchPopUp from './components/SearchPopUp'
import CreatePopUp from './components/CreatePopUp'
import NewsPopUp from './components/NewsPopUp'
import SoundPopUp from './components/SoundPopUp'
import ControllPannel from './components/ControllPannel'

const Header = ({position='fixed'}: {position?: 'fixed' | 'static'}) => {
    const [hovered, setHovered] = useState(false);

    const [hoveredLink,setHoveredLink] = useState(0);

    const [headerVisible, setHeaderVisible] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setHeaderVisible(true);
          }, 0);
    }, []);

    
    return (
       <div>
        {position == 'fixed' && <DynamicPadding desktop='92px' mobile='92px'/> }
            <div  style={{opacity: headerVisible ? '1' : '0',position: position}} className={styles.fixed_header}>
                <div className={styles.wrapper}>
                    <header className={styles.header}>
                        <div className={styles.header__container}>
                            <div className={styles.hamburger__wrapper}>
                                <span
                                    className={styles.hamburger_line}></span>
                                <span
                                    className={styles.hamburger_line}></span>
                                <span
                                    className={styles.hamburger_line}></span>
                            </div>
                            <div className={styles.header_first_part}>
                               <span className={styles.logo}>
                                    <Logo />
                                </span>
                               <div className={styles.button_wrapper}>
                               <PopUpBottom
                                   
                                    showNode={
                                        <div className={styles.transition_item}>
                                            <MyButtonTransparentOrange
                                          fontWeight="500"
                                          padding='10px 14px'
                                          onClick={() => {}}>
                                          <div className={styles.button_content}>
                                              <div className={styles.plus_box}>
                                                  
                                                  <AppColor.plus
                                                      width={'9px'}
                                                      height={'9px'}
                                                      stroke={AppColor.orange}
                                                  />
                                              </div>
                                              CREATE
                                          </div>
                                      </MyButtonTransparentOrange>
                                        </div>
                                    }
                                    popUpNode={<CreatePopUp />}
                                    topPaddingFromNode='27px'
                                />
                                  
                               </div>
                            </div>
                            <div className={styles.hamburger__wrapper_user}>
                              <UserAvatar
                                active={true}
                                name='Artem M.'
                                role='Customer'
                                url={fakeUserConstant.image}
                                preventMobileNone={false}
                              />
                            </div>
                            <div className={styles.header_second_part}>
                                <li>
                                    <ul onClick={() => {setHovered(prev => !prev)}}>
                                        Service{' '}
                                        <AppColor.chevronBottom
                                            width={10}
                                            height={6}
                                            fill={AppColor.text}
                                        />{' '}
                                    </ul>
                                    <ul onClick={() => {setHovered(prev => !prev)}}>
                                        Order{' '}
                                        <AppColor.chevronBottom
                                            width={10}
                                            height={6}
                                            fill={AppColor.text}
                                        />{' '}
                                    </ul>
                                    <ul onClick={() => {setHovered(prev => !prev)}}>
                                        Partnership{' '}
                                        <AppColor.chevronBottom
                                            width={10}
                                            height={6}
                                            fill={AppColor.text}
                                        />{' '}
                                    </ul>
                                    <ul onClick={() => {setHovered(prev => !prev)}}>
                                        Crowdfreelance{' '}
                                        <AppColor.chevronBottom
                                            width={10}
                                            height={6}
                                            fill={AppColor.text}
                                        />{' '}
                                    </ul>
                                    <ul onClick={() => {setHovered(prev => !prev)}}>
                                        Users{' '}
                                        <AppColor.chevronBottom
                                            width={10}
                                            height={6}
                                            fill={AppColor.text}
                                        />{' '}
                                    </ul>
                                    
                                </li>
                                <div
                                    onMouseDown={(event) => {}}
                                    onClick={() => {setHovered(prev => !prev)}}
                                    className={`${styles.hover_wrapper} ${
                                        hovered
                                            ? styles.active
                                            : styles.disabled
                                    }`}>
                                    <MenuLinks hoveredLink={hoveredLink} />
                                </div>
                            </div>
                            <div className={styles.header_third_part}>
                                <PopUpBottom
                                    showBackgroundHover={true}
                                    showNodeHover={<AppColor.searchOrange height={'20px'} />}
                                    showNode={
                                        <AppColor.search height={'20px'} />
                                    }
                                    popUpNode={<SearchPopUp />}
                                    topPaddingFromNode='30px'
                                />
                                <PopUpBottom
                                    showBackgroundHover={true}
                                    showNodeHover={<AppColor.newsOrange height={'20px'} />}
                                    showNode={
                                        <AppColor.news fill={AppColor.text} height={'20px'} />
                                    }
                                    popUpNode={<NewsPopUp />}
                                    topPaddingFromNode='30px'
                                />

                                 <PopUpBottom
                                    showBackgroundHover={true}
                                    showNodeHover={<AppColor.soundOrange height={'20px'} />}
                                    showNode={
                                        <AppColor.sound height={'20px'}/>
                                    }
                                    popUpNode={<SoundPopUp />}
                                    topPaddingFromNode='30px'
                                />
                                
                                
                                <PopUpBottom
                                    showNodeHover={<div style={{opacity: '0.8'}}>
                                        <UserAvatar
                                url={fakeUserConstant.image}
                                  active={true}
                                  name='Artem M.'
                                  role='Customer'
                                />
                                    </div>}
                                    showNode={
                                        <UserAvatar
                                            url={fakeUserConstant.image}
                                            active={true}
                                            name='Artem M.'
                                            role='Customer'
                                        />
                                    }
                                    popUpNode={<ControllPannel />}
                                    topPaddingFromNode='30px'
                                />
                                
                            </div>
                        </div>
                    </header>
                </div>
                <HorizontalLine />
            </div>
       </div>
    )
}




export default Header
