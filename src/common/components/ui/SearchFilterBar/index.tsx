
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import Typography from '../Typography/Typography';
import InputCommon from '../inputs/InputCommon';

type SearchFilterBarProps = {
     recent?: boolean;
     date?: string;
}
const SearchFilterBar = ({recent,date}:SearchFilterBarProps) => {

    return (
      <div className={styles.wrapper}>
           <InputCommon 
               callback={() => {}}
               placeholder='Search'
           />

           <div className={styles.filters_wrapper}>
           {date && <div className={styles.flex_item}>
                         <AppColor.calendar />
                         <Typography textLineHeight='1' textTransform='uppercase' variant='body4' fontWeight='500' color={AppColor.transparentBlack}>{date}</Typography>
                    </div>}
               <div className={styles.flex_item}>
                    <AppColor.filter />
                    <Typography textLineHeight='1' textTransform='uppercase' variant='body4' fontWeight='500' color={AppColor.transparentBlack}>Filters</Typography>
               </div>
               {recent
               && <div className={styles.flex_item}>
                         <AppColor.recent />
                         <Typography textLineHeight='1' textTransform='uppercase' variant='body4' fontWeight='500' color={AppColor.transparentBlack}>Most recent</Typography>
                    </div>
               }
              
               <div className={styles.flex_item}>
                    <Typography textLineHeight='1' textTransform='uppercase' variant='body4' fontWeight='500' color={AppColor.transparentBlack}>12</Typography>
                    <AppColor.chevronBottom fill={AppColor.transparentBlack}/>
               </div>
           </div>
      </div>
    );
};

export default SearchFilterBar;