import Logo from '@common/components/Logo/Logo';
import styles from './style.module.scss';
import registrationImage from '@assets/images/registration-image.png';

const SingIn = () => {

    return (
      <div className={styles.wrapper}>
           <div className={styles.image_part}>
                <Logo color='white'/>
                <img src={registrationImage} alt="" />
           </div>
           <div className={styles.content_part}>
            
            </div>
      </div>
    );
};

export default SingIn;