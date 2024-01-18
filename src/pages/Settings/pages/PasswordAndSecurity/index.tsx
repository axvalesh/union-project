
import Header from '@common/components/Header/Header/index';
import styles from './style.module.scss';
import NavigationBar from '@common/components/NavigationBar/index';
import PageDetails from '@common/components/ui/PageDetails/index';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import AppColor from '@common/styles/variables-static';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import SettingsCardSecurity, { SettingsCardSecurityprops } from './components/SettingsCardSecurity';
import AskedQuestion from '@common/components/AskedQuestions/index';
import Footer from '@common/components/Footer/Footer';

const PasswordAndSecurity = () => {

    return (
        <div>
            <Header />
            <NavigationBar
                activePageIndex={1}
                currentCategoryTitle="Settings"
            />
            <div className={styles.wrapper}>
                <PageDetails
                    historyNode=
                    {
                        <NavigationItem
                            image={<AppColor.home />}
                            textList={['Settings']} 
                        />
                    } 
                    pageTitle='password & security'
                />
         
             <DynamicPadding />

            <div className={styles.cards_wrapper}>
                <SettingsCardSecurity
                    icon={<AppColor.phone />}
                    title='Phone Number'
                    text='You didn’t provide a phone number yet'
                    buttonText='Add a number'
                    isSolved={false}
                    onClick={() => {}}
                />
                <SettingsCardSecurity
                    icon={<AppColor.gmail />}
                    title='Email'
                    text='w********@g***.com This email is linked to your account'
                    buttonText='Change email'
                    isSolved={false}
                    onClick={() => {}}
                />
                <SettingsCardSecurity
                    icon={<AppColor.key />}
                    title='Change Password'
                    text='Improve your security with a strong password'
                    buttonText='Change password'
                    isSolved={false}
                    onClick={() => {}}
                />
                <SettingsCardSecurity
                    icon={<AppColor.twoFactorAuth />}
                    title='Two-Factor Authentication'
                    text='Add an extra layer of security to your  account'
                    buttonText='Enable 2FA'
                    isSolved={false}
                    onClick={() => {}}
                />
                <SettingsCardSecurity
                    icon={<AppColor.searchEarth />}
                    title='Search Engines'
                    text='Allow or forbid search engines to index my profile'
                    buttonText='Allow to index'
                    isSolved={true}
                    solveText='Allow to index'
                    onClick={() => {}}
                />
                <SettingsCardSecurity
                    icon={<AppColor.hideEye width={'38px'} height={'38px'} />}
                    title='Blocked List'
                    text='Add or remove users to blocked list and hide content from your view '
                    buttonText='Browse blocked list'
                    isSolved={false}
                    onClick={() => {}}
                />
            </div>
            <AskedQuestion/>
        </div>
           <Footer/>
      </div>
    );
};

export default PasswordAndSecurity;