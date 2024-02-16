
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import Typography from '../Typography/Typography';
import InputCommon from '../inputs/InputCommon';
import PopUpBottom from '../../ModalPopUps/PopUpBottom';
import { useRef, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DynamicPadding from '../DynamicPadding';
import MyCheckbox from '../inputs/Checkbox';
import SizeBox from '../SizeBox';
import DoubleRangeSlider from '../DoubleRangeSlider';
import MyButtonBlack from '../MyButton/variants/MyButtonBlack';
import RangeForm from '../RangeForm';

type SearchFilterBarProps = {
     recent?: boolean;
     date?: string;
     exportIcon?: boolean;
}
const SearchFilterBar = ({recent,date,exportIcon}:SearchFilterBarProps) => {

     const [startDate, setStartDate] = useState(new Date());

     const [categoriesMore,setCategoriesMore] = useState(false);

    return (
      <div className={styles.wrapper}>
           <InputCommon 
               width='290px'
               callback={() => {}}
               placeholder='Search'
           />

           <div className={styles.filters_wrapper}>
           {date && <div className={`${styles.flex_item} cursor`}>
                         <PopUpBottom
                                    showNode={
                                        <div className='gap_10 cursor'>
                                             <AppColor.calendar />
                                             <Typography textLineHeight='1' textTransform='uppercase' variant='body4' fontWeight='500' color={AppColor.transparentBlack}>{date}</Typography>
                                        </div>
                                    }
                                    popUpNode={<div>
                                       <Calendar 
                                        locale='en-US'
                                        calendarType='iso8601'
                                        formatShortWeekday={(locale, date) => {
                                             const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
                                             return weekdays[date.getDay()];
                                         }}

                                         selectRange={true}
                                         
                                       />
                                    </div>}
                                    topPaddingFromNode='30px'
                                />
                    </div>}
               <div className={styles.flex_item}>
               <PopUpBottom
                    showNode={
                    <div className='gap_10 cursor'>
                         <AppColor.filter />
                    <Typography textLineHeight='1' textTransform='uppercase' variant='body4' fontWeight='500' color={AppColor.transparentBlack}>Filters</Typography>
                    </div>
                    }
                    popUpNode={<div className='popup_wrapper'>
                         <Typography variant='body5' fontWeight='500' color={AppColor.transparentTextColor}>
                         Categories
                         </Typography>
                         <DynamicPadding desktop='20px' mobile='15px'/>

                         <InputCommon callback={() => {}}
                              placeholder='Search'/>

                         <DynamicPadding desktop='20px' mobile='15px'/>

                         <div className='grid_15'>
                              <SelectFilterItem text='Web Programming' count='26' />
                              <SelectFilterItem text='Trading Apps' count='26' />
                              <SelectFilterItem text='Windows' count='26' />
                              <SelectFilterItem text='Mobile Web' />
                              {!categoriesMore && <div className='cursor' onClick={() => {setCategoriesMore(true)}}>
                             <Typography variant='body5' fontWeight='500' color={AppColor.orange}>+ Show 10 more</Typography>
                             </div>}
                              {categoriesMore && <SelectFilterItem text='Web Programming' count='26' />}
                         </div>
                         <SizeBox height='15px'/>
                         
                         <Typography variant='body5' fontWeight='500' color={AppColor.transparentTextColor}>
                         Subscriptions
                         </Typography>
                         <DynamicPadding desktop='20px' mobile='15px'/>
                         <div className='grid_15'>
                              <SelectFilterItem text='Start' count='26' />
                              <SelectFilterItem text='Pro' count='26' />
                              <SelectFilterItem text='Enterprise' count='26' />
                              
                         </div>

                         <SizeBox height='15px'/>
                         
                         <Typography variant='body5' fontWeight='500' color={AppColor.transparentTextColor}>
                         Repeatable
                         </Typography>
                         <DynamicPadding desktop='20px' mobile='15px'/>
                         <div className='grid_15'>
                              <SelectFilterItem text='Yes' count='26' />
                              <SelectFilterItem text='No' count='26' />
                         </div>

                         <DynamicPadding desktop='20px' mobile='15px'/>

                         <Typography variant='body5' fontWeight='500' color={AppColor.transparentTextColor}>
                         Limits
                         </Typography>

                         <DynamicPadding desktop='40px' mobile='30px'/>

                         <RangeForm />

                         <DynamicPadding desktop='20px' mobile='15px'/>

                         <Typography variant='body5' fontWeight='500' color={AppColor.transparentTextColor}>
                         Deadline
                         </Typography>

                         <DynamicPadding desktop='40px' mobile='30px'/>

                         <RangeForm />

                         <DynamicPadding desktop='20px' mobile='15px'/>

                         <Typography variant='body5' fontWeight='500' color={AppColor.transparentTextColor}>
                         Reward
                         </Typography>
                         <DynamicPadding desktop='20px' mobile='15px'/>

                         <div className='grid_15'>
                              <SelectFilterItem text='Bonuses' count='26' />
                              <SelectFilterItem text='Discounts' count='26' />
                              <SelectFilterItem text='Gifts' count='26' />
                              
                         </div>
                    </div>}
                    topPaddingFromNode='30px'
               />
                   
               </div>
               {recent
               && <div className={styles.flex_item}>
                         <AppColor.recent />
                         <Typography textLineHeight='1' textTransform='uppercase' variant='body4' fontWeight='500' color={AppColor.transparentBlack}>Most recent</Typography>
                    </div>
               }
               {exportIcon
               && <div className={styles.flex_item}>
                         <AppColor.exportIcon />
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

type SelectFilterItemProps = {
     text: string;
     count?: string;
}
const SelectFilterItem = ({text,count}:SelectFilterItemProps) => {
     return (
          <div className='gap_10'>
               <MyCheckbox width='20px' height='20px'/>
               <Typography variant='body5'>{text}</Typography>
               {count && <div style={{marginLeft: 'auto'}}>
                    <Typography color={AppColor.transparentBlack} variant='body5'>{count}</Typography>
                    </div>}
          </div>
     )
}

export default SearchFilterBar;