import Logo from '@common/components/Logo/Logo';
import styles from './style.module.scss';
import registrationImage from '@assets/images/registration-image.png';
import Typography from '@common/components/ui/Typography/Typography';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';

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
                    <MyButtonTransparentOrange
                    onClick={() => {}}
                    >
                        Sign in
                    </MyButtonTransparentOrange>
                </div>
                <div className={styles.center}>
                    <div className={styles.title}>
                    <Typography variant='titleSmall'>
                    Create your free account
                    </Typography>
                    </div>

                    <div className={styles.border_input}>
                        <label htmlFor="example">Username <span className={styles.red_text}>*</span> </label>
                        <input type="text" id="example" name="example" placeholder="Your Input"/>
                    </div>
                </div>
            </div>
      </div>
    );
};

export default SingUp;