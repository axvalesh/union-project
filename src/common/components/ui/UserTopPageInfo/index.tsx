
import { userModel } from '@common/models/user';
import styles from './style.module.scss';
import UserAvatar from '../UserAvatar';
import AppColor from '@common/styles/variables-static';

type UserTopPageInfoProps = {
    user: userModel;
    nodeAfter?: React.ReactNode;
}
const UserTopPageInfo = ({user,nodeAfter}:UserTopPageInfoProps) => {

    return (
      <div className={styles.wrapper}>
           <UserAvatar preventMobileNone={true} name={user.name} flag={<AppColor.UkraineFlag/>} role='Freelancer' active={true}/>

           <div style={{display: 'flex',alignItems: 'center', gap:'10px'}}>
                <div className={styles.box}>
                    <AppColor.message fill={AppColor.text} height={'22px'}/>
                </div>
                <div className={styles.box}>
                    <AppColor.hearPlus fill={AppColor.text} height={'22px'}/>
                </div>
                <div className={styles.box}>
                    <AppColor.threePoints fill={AppColor.text} height={'22px'}/>
                </div>
           </div>

           {nodeAfter}
      </div>
    );
};

export default UserTopPageInfo;