
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import styles from './style.module.scss';
import Typography from '@common/components/ui/Typography/Typography';
import AppColor from '@common/styles/variables-static';
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index';
import DetailsTableVerification from '@common/components/ui/DetailsTable/variants/DetailsTableVerification/index';
import { fakeUserConstant } from '@common/models/user';

const AdminVerification = () => {

    return (
      <div className='admin_wrapper'>
           <DynamicPadding />

           <div className={styles.top_part}>
                <Typography variant='titleBig' fontWeight='600' textTransform='uppercase'>Verification</Typography>
                <Typography variant='body4' fontWeight='500' color={AppColor.transparentBlack}  textTransform='uppercase'>Verification settings</Typography>
           </div>

           <DynamicPadding />

           <SearchFilterBar date='10/29/22 - 11/29/22' exportIcon={true} />

           <DynamicPadding />

           <DetailsTableVerification 
                information={[
                    {
                        date: 'Feb 26, 2021 16:32 ',
                        status: 'Request',
                        user: fakeUserConstant
                    }
                ]}
           />

           <DynamicPadding />
      </div>
    );
};

export default AdminVerification;