
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import styles from './style.module.scss';
import Typography from '@common/components/ui/Typography/Typography';
import SwitchButton from '@common/components/ui/SwitchButton/index';
import AppColor from '@common/styles/variables-static';
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index';
import DetailsUsers from '@common/components/ui/DetailsTable/variants/DetailsUsers/index';
import { fakeUserConstant } from '@common/models/user';

const AdminList = () => {

    return (
      <div className='admin_wrapper'>
           <DynamicPadding />
           <div className='center_mobile_text'>
                <Typography variant='titleBig' textTransform='uppercase' fontWeight='600'>Users list</Typography>
           </div>
           <DynamicPadding />
           <div className={styles.top_part_wrapper}>
                <div className='gap_10'>
                    <Typography variant='body4'>Registration</Typography>
                    <SwitchButton width='44px' height='24px' />
                </div>
                <div className={styles.settings_role_grid}>
                    <Typography variant='body4' textTransform='uppercase' fontWeight='500' color={AppColor.transparentBlack}>Freelancer settings</Typography>
                    <Typography variant='body4' textTransform='uppercase' fontWeight='500' color={AppColor.transparentBlack}>Manager settings</Typography>
                    <Typography variant='body4' textTransform='uppercase' fontWeight='500' color={AppColor.transparentBlack}>moderator settings</Typography>
                    <Typography variant='body4' textTransform='uppercase' fontWeight='500' color={AppColor.transparentBlack}>Arbitrator settings</Typography>
                </div>
           </div>
            <DynamicPadding />

           <SearchFilterBar date='10/29/22 - 11/29/22' exportIcon={true} />

           <DynamicPadding />

           <DetailsUsers 
            information={[
                {
                    memberSince: 'Feb 26, 2021 16:32 ',
                    roles: 'Customer, Freelancer, Manager, Sponsor',
                    status: 'Active', 
                    user: fakeUserConstant,
                }
            ]}
           />

           <DynamicPadding />
      </div>
    );
};

export default AdminList;