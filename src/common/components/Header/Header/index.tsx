import Logo from '@common/components/Logo/Logo'
import AppColor from '@common/styles/variables-static'
import { useHover } from '@common/helpers/useHover'
import MenuLinks from '../components/MenuLinks'

import styles from './style.module.scss'
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange'
import UserAvatar from '../../ui/UserAvatar'

const Header = () => {
    const [hovered, eventHandlers] = useHover({
        delayInMilliseconds: 2000,
    })
    return (
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
                      />
                    </div>
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
                    <div className={styles.header_third_part}>
                        <AppColor.search />
                        <AppColor.news fill={AppColor.text} />
                        <AppColor.sound />

                        <UserAvatar
                          active={true}
                          name='Artem M.'
                          role='Customer'
                        />
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header
