import Logo from '../Logo/Logo';
import Typography from '../ui/Typography/Typography';
import styles from './style.module.scss';
import copyrightIcon from '@assets/svg/copyright-icon.svg';

import instagram from '@assets/svg/instagram.svg';
import twitter from '@assets/svg/twitter.svg';
import facebook from '@assets/svg/facebook.svg';
import telegram from '@assets/svg/telegram.svg';

const Footer = () => {

    return (
      <footer className={styles.wrapper}>
        <div className={styles.margin_wrapper}>
           <div className={styles.wrapper_content}>
            <div className={styles.first}>
                <span className={styles.logo}>
                <Logo color='white'/>
                </span>
                <span className={styles.copyright_desktop}>
                <Copyright />
                </span>
            </div>
            <div className={styles.links_mobile}>
                <ul className={styles.list}>
                        <li>
                            <a href="#">
                                <img src={instagram} alt="instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={twitter} alt="twitter" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={facebook} alt="facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src={telegram} alt="telegram" />
                            </a>
                        </li>
                    </ul>
                </div>
           <div className={styles.text_links_wrapper}>
           <div className={styles.second}>
                <p className={styles.title}>Company</p>
                <ul className={styles.list}>
                    <li>
                        <a href="#">About us</a>
                    </li>
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#">Terms and Conditions</a>
                    </li>
                    <li>
                        <a href="#">Releases</a>
                    </li>
                </ul>
           </div>
           <div className={styles.third}>
                <p className={styles.title}>Useful</p>
                <ul className={styles.list}>
                    <li>
                        <a href="#">Community</a>
                    </li>
                    <li><a href="#">Managers</a></li>
                    <li><a href="#">General Help</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
           </div>
           </div>
           <div className={styles.second}>
                <p className={styles.title}>Company</p>
                <ul className={styles.list}>
                    <li>
                        <a href="#">About us</a>
                    </li>
                    <li>
                        <a href="#">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#">Terms and Conditions</a>
                    </li>
                    <li>
                        <a href="#">Releases</a>
                    </li>
                </ul>
           </div>
           <div className={styles.third}>
                <p className={styles.title}>Useful</p>
                <ul className={styles.list}>
                    <li>
                        <a href="#">Community</a>
                    </li>
                    <li><a href="#">Managers</a></li>
                    <li><a href="#">General Help</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
           </div>
           <div className={styles.fourth}>
                <p className={styles.title}>Social</p>
                <ul className={styles.list}>
                    <li>
                        <a href="#">
                            <img src={instagram} alt="instagram" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={twitter} alt="twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={facebook} alt="facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <img src={telegram} alt="telegram" />
                        </a>
                    </li>
                </ul>
           </div>
           <div className={styles.copyright_mobile}>
           <Copyright />
           </div>
           </div>
        </div>
      </footer>
    );
};

const Copyright = () => {
    return (
        <div className={styles.copiright_wrapper}>
            <img src={copyrightIcon} width={13} height={13} alt="copyright" />
            <p>
            2023 Uniano. All rights reserved  
            </p>
        </div>
    )
}
export default Footer;