import Logo from "@common/components/Logo/Logo";
import styles from './style.module.scss'
import MyButton from "@common/components/ui/MyButton/MyButton";
import AppColor from "@common/styles/variables-static";
import mobile_user_svg from '@assets/svg/header_mobile-user.svg';

const HeaderNothAuthorized = () => {

    return (
      <header className={styles.header}>
        <div className={styles.header__container}>
          <div className={styles.hamburger__wrapper}>
            <span className={styles.hamburger_line}></span>
            <span className={styles.hamburger_line}></span>
            <span className={styles.hamburger_line}></span>
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
                <ul>Customers</ul>
                <ul>Freelancers</ul>
                <ul>Sponsors</ul>
                <ul>Managers</ul>
              </li>
           </div>
           <div className={styles.header_third_part}>
              <MyButton
                border="1px solid transparent"
                color="transparent"
                textColor={AppColor.text}
                hoverColor="transparent"
                hoverTextColor={AppColor.orange}
                fontWeight="500"
                onClick={() => {}}>
                Sign in
              </MyButton>
              <MyButton onClick={() => {}} fontWeight="500">
                Sing up
              </MyButton>
           </div>
          </div>
      </header>
    );
};

export default HeaderNothAuthorized;