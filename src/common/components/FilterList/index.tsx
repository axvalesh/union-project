
import { useState } from 'react';
import Typography from '../ui/Typography/Typography';
import styles from './style.module.scss';
import AppColor from '@common/styles/variables-static';
import HorizontalLine from '../ui/Lines/HorizontalLine';
import DynamicPadding from '../ui/DynamicPadding';

type FilterListProps = {
    filters: string[];
    callback?: (item:string) => void;
}
const FilterList = ({filters,callback}:FilterListProps) => {

    const [activeFilter,setActiveFilter] = useState('All');

    function setActive(item:string) {
        if(callback != null) {
            callback(item);
        }
        setActiveFilter(item);
    } 
    return (
      <div>
          <div className={styles.filters_wrapper}>
               {filters.map(filter =>
                   <div className={styles.filter_item} onClick={() => { setActive(filter) }}>
                        <Typography 
                            fontWeight={activeFilter == filter ? '500' : '400'}
                            color={activeFilter == filter ? AppColor.orange : AppColor.text} 
                            variant='body5'>{filter}
                        </Typography>
                   </div>
                )}
          </div>
          <DynamicPadding mobile='15px' desktop='15px' />
          <HorizontalLine />
      </div>
    );
};

export default FilterList;