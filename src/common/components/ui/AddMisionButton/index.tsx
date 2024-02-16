
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';

const AddMissionButton = () => {

    return (
        <div className={styles.orange_plus}>
            <AppColor.plus width={20} height={20} stroke='white' />
         </div>
    );
};

export default AddMissionButton;