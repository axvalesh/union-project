
import Logo from '@common/components/Logo/Logo';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';
import { useHover } from '@common/helpers/useHover';
import AppColor from '@common/styles/variables-static';
import UserAvatar from '../../ui/UserAvatar';
import MenuLinks from '../components/MenuLinks';
import styles from './style.module.scss';
import { fakeUserConstant } from '@common/models/user';
import { useEffect, useState } from 'react';

type HeaderAdminProps = {
    modalMobile: React.ReactNode;
}
const HeaderAdmin = ({modalMobile}:HeaderAdminProps) => {
    const [hovered, eventHandlers] = useHover({
        delayInMilliseconds: 2000,
    })

    const [showModal,setShowModal] = useState(false);

    useEffect(() => {
        if(showModal) {
            document.body.style.overflow = "hidden"
        } else {
            document.body.style.overflow = "auto"
        }
    },[showModal])
    
    return (
        <div className={styles.wrapper}>
            <div className={styles.modal_mobile} style={{right: showModal ? '25%' : '100%'}}>
                <div className={styles.scroll_wrapper}>
                {modalMobile}
                </div>
            </div>
            <div onClick={() => {setShowModal(false)}} className={styles.modal_background} style={{display: showModal ? 'block' : 'none'}}>

            </div>
            <header className={styles.header}>
                <div className={styles.header__container}>
                    <div onClick={() => {setShowModal(prev => !prev)}} className={styles.hamburger__wrapper}>
                        <span
                            className={styles.hamburger_line}></span>
                        <span
                            className={styles.hamburger_line}></span>
                        <span
                            className={styles.hamburger_line}></span>
                    </div>
                    <div className={styles.header_first_part}>
                       <div className='mobile'>
                            <span className={styles.logo}>
                                <Logo color='white' />
                            </span>
                       </div>
                       <div className={styles.button_wrapper}>
                          <MyButtonTransparentOrange
                              fontWeight="500"
                              onClick={() => {}}>
                              <div className={styles.button_content}>
                                  <div className={styles.plus_box}>
                                      
                                      <AppColor.plus
                                          width={9}
                                          height={9}
                                          stroke={AppColor.orange}
                                      />
                                  </div>
                                  CREATE
                              </div>
                          </MyButtonTransparentOrange>
                       </div>
                    </div>
                    <div className={styles.hamburger__wrapper_user}>
                      <UserAvatar
                        active={true}
                        name='Artem M.'
                        role='Customer'
                        url={fakeUserConstant.image}
                      />
                    </div>
                    <div className={styles.remove_items_small_screen}>
                        <div className={styles.header_second_part}>
                            <li>
                                <ul {...eventHandlers}>
                                    Service{' '}
                                    <AppColor.chevronBottom
                                        width={10}
                                        height={6}
                                        fill={AppColor.text}
                                    />{' '}
                                </ul>
                                <ul>
                                    Order{' '}
                                    <AppColor.chevronBottom
                                        width={10}
                                        height={6}
                                        fill={AppColor.text}
                                    />{' '}
                                </ul>
                                <ul>
                                    Partnership{' '}
                                    <AppColor.chevronBottom
                                        width={10}
                                        height={6}
                                        fill={AppColor.text}
                                    />{' '}
                                </ul>
                                <ul>
                                    Crowdfreelance{' '}
                                    <AppColor.chevronBottom
                                        width={10}
                                        height={6}
                                        fill={AppColor.text}
                                    />{' '}
                                </ul>
                                <ul>
                                    Users{' '}
                                    <AppColor.chevronBottom
                                        width={10}
                                        height={6}
                                        fill={AppColor.text}
                                    />{' '}
                                </ul>
                                
                            </li>
                            <div
                                {...eventHandlers}
                                className={`${styles.hover_wrapper} ${
                                    hovered
                                        ? styles.active
                                        : styles.disabled
                                }`}>
                                <MenuLinks />
                            </div>
                        </div>
                    </div>
                    <div className={styles.header_third_part}>
                        <AppColor.search />
                        <AppColor.news fill={AppColor.text} />
                        <AppColor.sound />

                        <UserAvatar
                          active={true}
                          name='Artem M.'
                          role='Customer'
                          url={fakeUserConstant.image}
                        />
                    </div>
                </div>
            </header>
        </div>
    )
};

export default HeaderAdmin;