
import { useState } from 'react';
import Typography from '../ui/Typography/Typography';
import styles from './style.module.scss';
import AppColor from '@common/styles/variables-static';
import HorizontalLine from '../ui/Lines/HorizontalLine';
import DynamicPadding from '../ui/DynamicPadding';

type FilterListProps = {
    category?: string[];
    filters: string[];
    callback?: (item:string) => void;
}
const FilterList = ({filters,callback,category=[]}:FilterListProps) => {

    const [activeFilter,setActiveFilter] = useState('All');
    const [currentCategory,setCurrentCategory] = useState(category[0]);
    function setActive(item:string) {
        if(callback != null) {
            callback(item);
        }
        setActiveFilter(item);
    } 
    return (
        <div>
             <div className={styles.wrapper}>
                 {category.length > 0 &&
                    <div className={styles.flex_center}>
                    <div style={{display: 'flex',alignItems: 'center',gap: '5px',cursor: 'pointer'}}>
                        <Typography variant="body4" fontWeight="500">
                            {currentCategory}
                        </Typography>
                        <AppColor.chevronBottom fill={AppColor.text} />
                    </div>
                    <div className={styles.vertical_lone}></div>
                    </div>
                }
                <div className={styles.filters_wrapper}>
    
                    {filters.map((filter) => (
                        <div
                            className={styles.filter_item}
                            onClick={() => {
                                setActive(filter)
                            }}>
                            <Typography
                                fontWeight={
                                    activeFilter == filter ? '500' : '400'
                                }
                                color={
                                    activeFilter == filter
                                        ? AppColor.orange
                                        : AppColor.text
                                }
                                variant="body4">
                                {filter}
                            </Typography>
                        </div>
                    ))}
                </div>
             </div>
            <DynamicPadding mobile="15px" desktop="15px" />
            <HorizontalLine />
        </div>
    )
};

export const FilterListBig = ({filters,callback,category=[]}:FilterListProps) => {

    const [activeFilter,setActiveFilter] = useState('Related');
    const [currentCategory,setCurrentCategory] = useState(category[0]);
    function setActive(item:string) {
        if(callback != null) {
            callback(item);
        }
        setActiveFilter(item);
    } 
    return (
        <div>
             <div className={styles.wrapper}>
                 {category.length > 0 &&
                    <div className={styles.flex_center}>
                    <div style={{display: 'flex',alignItems: 'center',gap: '5px',cursor: 'pointer'}}>
                        <Typography variant="subtitle">
                            {currentCategory}
                        </Typography>
                        <AppColor.chevronBottom fill={AppColor.text} />
                    </div>
                    <div className={styles.vertical_lone}></div>
                    </div>
                }
                <div className={styles.filters_wrapper}>
    
                    {filters.map((filter) => (
                        <div
                            className={styles.filter_item}
                            onClick={() => {
                                setActive(filter)
                            }}>
                            <Typography
                                fontWeight={
                                    activeFilter == filter ? '500' : '400'
                                }
                                color={
                                    activeFilter == filter
                                        ? AppColor.orange
                                        : AppColor.text
                                }
                                variant="body4">
                                {filter}
                            </Typography>
                        </div>
                    ))}
                </div>
             </div>
            <DynamicPadding mobile="15px" desktop="15px" />
            <HorizontalLine />
        </div>
    )
};

export default FilterList;