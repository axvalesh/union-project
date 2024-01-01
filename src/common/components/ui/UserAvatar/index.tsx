
import AppColor from '@common/styles/variables-static';
import Typography from '../Typography/Typography';
import styles from './style.module.scss';
import userFake from '@assets/images/user-fake.png';

type UserAvatarProps = {
    url?: string;
    active: boolean;
    name: string;
    role: string;
}


const UserAvatar = ({active,name,role,url}:UserAvatarProps) => {

    return (
      <div className={styles.wrapper}>
           <img width={'38px'} height={'38px'} src={url != null ? url : userFake} alt="" />
           <div className={`${styles.active_status} ${active ? styles.active_true : styles.active_false}`}></div>
           <div className={styles.flex_wrapper}>
                <Typography textLineHeight='100%' variant='body5' fontWeight='500'>
                    {name}
                </Typography>
                <Typography color={AppColor.orange} textLineHeight='100%'>
                    {role}
                </Typography>
           </div>
      </div>
    );
};

export default UserAvatar;