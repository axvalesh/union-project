import Logo from '@common/components/Logo/Logo';
import styles from './style.module.scss';
import registrationImage from '@assets/images/registration-image.png';
import Typography from '@common/components/ui/Typography/Typography';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';
import InputBorderText from '@common/components/ui/inputs/InputBorderText/index';

import { ReactComponent as DisplayIcon} from '@assets/svg/display-icon.svg';
import AppColor from '@common/styles/variables-static';
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';
import SizeBox from '@common/components/ui/SizeBox/index';
import googleLogo from '@assets/svg/google-logo.svg';
import facebookLogo from '@assets/svg/facebook-logo.svg';

const SingUp = () => {

    return (
      <div className={styles.wrapper}>
           <div className={styles.image_part}>
                <div className={styles.logo}>
                    <Logo color='white'/>
                </div>
                <div className={styles.image}>
                    <img src={registrationImage} alt="" />
                </div>
           </div>
           <div className={styles.content_part}>
                <div className={styles.first_flex}>
                    <Typography variant='body4'>
                        Already have an account?
                    </Typography>
                    <SizeBox width='19px'/>
                    <MyButtonTransparentOrange
                    onClick={() => {}}
                    >
                        Sign in
                    </MyButtonTransparentOrange>
                </div>
                <div className={styles.center}>
                    <div className={styles.title}>
                    <Typography textTransform='uppercase' variant='titleSmall'>
                    Create your free account
                    </Typography>
                    </div>

                    <InputBorderText 
                    borderText='Username'
                    placeholderText=''
                    labelIcon={<AppColor.displayIcon />}
                    />

                    <InputBorderText 
                    borderText='Email'
                    placeholderText=''
                    labelIcon={<AppColor.atSing />}
                    />

                    <MyButtonOrange
                    width='100%'
                    padding='15px 0px'
                    onClick={() => {}}
                    >
                        Sign up
                    </MyButtonOrange>
                    <div className={styles.or_block}>
                    <div className={styles.grey_line}></div>
                    <Typography variant='body7'>
                        or
                    </Typography>
                    <div className={styles.grey_line}></div>
                </div>
                <Typography variant='body5'>
                Sign up with Social
                </Typography>
                <div className={styles.links}>
                    <img src={googleLogo} alt="google" />
                    <img src={facebookLogo} alt="facebook" />
                </div>
                <Typography variant='body5'>
                    By clicking button above, you agree to our <a className={styles.orange} href='#'>terms and conditions</a> and <a className={styles.orange}>privacy policies</a>
                </Typography>
                </div>
            </div>
      </div>
    );
};

export default SingUp;