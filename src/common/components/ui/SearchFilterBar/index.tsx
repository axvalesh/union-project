
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import Typography from '../Typography/Typography';
import InputCommon from '../inputs/InputCommon';

type SearchFilterBarProps = {
     recent?: boolean;
}
const SearchFilterBar = ({recent}:SearchFilterBarProps) => {

    return (
      <div className={styles.wrapper}>
           <InputCommon 
               callback={() => {}}
               placeholder='Search'
           />

           <div className={styles.filters_wrapper}>
               <div className={styles.flex_item}>
                    <AppColor.filter />
                    <Typography variant='body4' fontWeight='500' color={AppColor.transparentBlack}>Filters</Typography>
               </div>
               {recent
               && <div className={styles.flex_item}>
                         <AppColor.recent />
                         <Typography variant='body4' fontWeight='500' color={AppColor.transparentBlack}>Most recent</Typography>
                    </div>
               }
               <div className={styles.flex_item}>
                    <Typography variant='body4' fontWeight='500' color={AppColor.transparentBlack}>12</Typography>
                    <AppColor.chevronBottom fill={AppColor.transparentBlack}/>
               </div>
           </div>
      </div>
    );
};

export default SearchFilterBar;