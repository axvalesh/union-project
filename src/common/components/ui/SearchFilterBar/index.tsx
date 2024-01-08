
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import Typography from '../Typography/Typography';

const SearchFilterBar = () => {

    return (
      <div className={styles.wrapper}>
           <input type="text" placeholder='Search' />

           <div className={styles.filters_wrapper}>
               <div className={styles.flex_item}>
                    <AppColor.filter />
                    <Typography variant='body4' fontWeight='500' color={AppColor.transparentBlack}>Filters</Typography>
               </div>
               <div className={styles.flex_item}>
                    <Typography variant='body4' fontWeight='500' color={AppColor.transparentBlack}>12</Typography>
                    <AppColor.chevronBottom fill={AppColor.transparentBlack}/>
               </div>
           </div>
      </div>
    );
};

export default SearchFilterBar;