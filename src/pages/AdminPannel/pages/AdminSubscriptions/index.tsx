
import SwitchButton from '@common/components/ui/SwitchButton/index';
import Typography from '@common/components/ui/Typography/Typography';
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import DetailsCrowdfreelanceAdmin from '@common/components/ui/DetailsTable/variants/DetailsCrowdfreelanceAdmin/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index';
import SizeBox from '@common/components/ui/SizeBox/index';
import { fakeUserConstant } from '@common/models/user';
import { useState } from 'react';
import DetailsTableSubscriptionsAdmin from '@common/components/ui/DetailsTable/variants/DetailsTableSubscriptionsAdmin/index';

const AdminSubscriptions = () => {
    return (    
      <div className={styles.wrapper}>

           <div className={styles.mobile_padding}>
            <DynamicPadding />
    
               <div className={styles.top_title_part}>
                   <div className='center_mobile_text'>
                    <Typography variant='titleBig' fontWeight='600' textTransform='uppercase'>Subscriptions</Typography>
                   </div>
        
                   <DynamicPadding />
        
                   <div className={styles.top_part}>
                        <div className={styles.buttons_top}>
                            <div className='gap_10'>
                                <Typography variant='body4'>Create</Typography>
                                <SwitchButton startValue={true} width='44px' height='24px'/>
                            </div>
                            <div className='gap_10'>
                                <Typography variant='body4'>Active</Typography>
                                <SwitchButton startValue={true} width='44px' height='24px'/>
                            </div>
                        </div>
        
                        <Typography variant='body4' fontWeight='500' textTransform='uppercase' color={AppColor.transparentBlack}>Sponsorships settings</Typography>
                   </div>
               </div>
    
               <DynamicPadding />
    
               <SearchFilterBar date='10/29/22 - 11/29/22' exportIcon={true} />
    
               <DynamicPadding />

               <DetailsTableSubscriptionsAdmin
                    information={[
                        {
                            user: fakeUserConstant,
                            date: 'Feb 26, 2021 16:32 ',
                            plan: 'Start',
                            price: 'Free',
                            subscriptions: '552'
                        }
                    ]}
               />
                <DynamicPadding />
           </div>
      </div>
    );
};

type TopItemProps = {
    icon: React.ReactNode;
    title: string;
    activeSelect: string;
    callbackSelect: (item:string) => void;
}
const TopItem = ({icon,title,activeSelect,callbackSelect}:TopItemProps) => {
    const isActive = activeSelect == title;
    return (
        <div onClick={() => {if(!isActive) {callbackSelect(title)}}} className='gap_10'>
            {icon}
            <Typography variant='body4' fontWeight={isActive ? '500' : '400'}>{title}</Typography>
        </div>
    )
}

export default AdminSubscriptions;