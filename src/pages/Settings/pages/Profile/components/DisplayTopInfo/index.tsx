import { userModel } from "@common/models/user";
import styles from './style.module.scss';
import AppColor from "@common/styles/variables-static";
import Typography from "@common/components/ui/Typography/Typography";
import MyButtonBlack from "@common/components/ui/MyButton/variants/MyButtonBlack";

type DisplayTopInfoProps = {
    user: userModel;
}
const DisplayTopInfo = ({user}:DisplayTopInfoProps) => {
    return (
        <div className={styles.top_item_wrapper}>
            <div className={styles.top_wrapper_first_content}>
                {
                    user.image != null
                    ? <img src={user.image} width={'124px'} height={'124px'} alt="" />
                    : <AppColor.freelancer width={'124px'} height={'124px'} />
                }
            </div>
            <div className={styles.top_wrapper_second_content}>
                <div className={styles.top_item_flex}>
                    <Typography textLineHeight='1' variant='body3' fontWeight='500'>{user.name} <AppColor.edit fill={AppColor.text}/></Typography>
                </div>
                <div className={styles.top_item_flex}>
                    <MyButtonBlack onClick={() => {}}>Update Profile Picture</MyButtonBlack> <AppColor.close fill={AppColor.red} />
                </div>
                <div className={styles.top_item_flex}>
                    <Typography textLineHeight='1' variant='body4'>Must be JPEG, PNG, or GIF and cannot exceed 10MB.</Typography>
                </div>
            </div>
        </div>
    )
}

export default DisplayTopInfo;