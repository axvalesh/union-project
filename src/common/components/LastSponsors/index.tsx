
import AppColor from '@common/styles/variables-static';
import Typography from '../ui/Typography/Typography';
import styles from './style.module.scss';
import InfoBox from '../ui/InfoBox';
import SliderByRef from '../ui/SliderByRef';
import UserAvatar from '../ui/UserAvatar';
import { fakeUserConstant } from '@common/models/user';

const LastSponsors = () => {

    return (
      <div className={styles.sponsors_wrapper}>
           <div className='gap_10'>
               <Typography variant='body4' color={AppColor.transparentBlack} fontWeight='500'>
               Last sponsors
               </Typography>
               <InfoBox />
           </div>
           <div style={{width: '100%'}}>
               <SliderByRef
                    nodes={[
                        SliderItemCurrent,
                        SliderItemCurrent,
                        SliderItemCurrent,
                        SliderItemCurrent,
                        SliderItemCurrent,
                        SliderItemCurrent,
                        SliderItemCurrent,
                        
                    ]}
               />
           </div>
      </div>
    );
};

const SliderItemCurrent =<div> <UserAvatar noWrap={true} preventMobileNone={true} active={true} name='Artem M.' role='$4 305' flag={<AppColor.UkraineFlag/>} url={fakeUserConstant.image}/></div>

export default LastSponsors;