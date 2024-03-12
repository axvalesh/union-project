
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import Typography from '../Typography/Typography';
import InputCommon from '../inputs/InputCommon';
import PopUpBottom from '../../ModalPopUps/PopUpBottom';
import { useRef, useState } from 'react';
import DynamicPadding from '../DynamicPadding';
import MyCheckbox from '../inputs/Checkbox';
import SizeBox from '../SizeBox';
import DoubleRangeSlider from '../DoubleRangeSlider';
import MyButtonBlack from '../MyButton/variants/MyButtonBlack';
import RangeForm from '../RangeForm';
import DropdownNumber from './components/DropdownNumber';
import DropdownRecent from './components/DropdownRecent';
import ButtonChooseList from '../../ButtonChooseList';
import ButtonsSelectList from '../../ButtonsSelectList';
import MyButtonTransparentOrange from '../MyButton/variants/MyButtonTransparentOrange';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import HorizontalLine from '../Lines/HorizontalLine';
import MyButtonTransparent from '../MyButton/variants/MyButtonTransparent';
import MyButtonOrange from '../MyButton/variants/MyButtonOrange';



type SearchFilterBarProps = {
     recent?: boolean;
     date?: string;
     exportIcon?: boolean;
}

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];


const SearchFilterBar = ({recent,date,exportIcon}:SearchFilterBarProps) => {


     const [selectedFilters,setSelectedFilters] = useState<string[]>([]);

     const [categoriesMore,setCategoriesMore] = useState(false);
     const [dateState, setDateState] = useState<Value>();
     const onChange = (newDate) => {
          setDateState(newDate);
        };

     const handleLastWeekClick = () => {
          const today = new Date();
          const lastWeek = new Date(today);
          lastWeek.setDate(today.getDate() - 7);
      
          setDateState([lastWeek,today ]);
        };
        const handleLastTwoWeeks = () => {
          const today = new Date();
          const lastWeek = new Date(today);
          lastWeek.setDate(today.getDate() - 14);
      
          setDateState([lastWeek,today ]);
        };
        const handleLastMonth = () => {
          const today = new Date();
          const lastMonth = new Date(today);
          lastMonth.setMonth(today.getMonth() - 1);

      
          setDateState([lastMonth,today ]);
        };
        const handleLastThreeMonth = () => {
          const today = new Date();
          const lastMonth = new Date(today);
          lastMonth.setMonth(today.getMonth() - 3);
      
          setDateState([lastMonth,today ]);
        };
        const handleLastYear = () => {
          const today = new Date();
          const lastMonth = new Date(today);
          lastMonth.setMonth(today.getMonth() - 12);
      
          setDateState([lastMonth,today ]);
        };
       
        const handleFirstDayOfMonth = () => {
          const today = new Date();
          const firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
        
      
          setDateState([firstDayOfMonth,today ]);
        };
       
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
                                    popUpNode={<div className={styles.calendar_wrapper} style={{display: 'flex'}}>
                                        <div className={styles.date_grid}>
                                             <DateText onClick={handleLastWeekClick} text={'Last 7 days'} />
                                             <DateText onClick={handleLastTwoWeeks} text={'Last 14 days'} />
                                             <DateText onClick={handleLastMonth} text={'Last 30 days'} />
                                             <DateText onClick={handleLastThreeMonth} text={'Last 3 months'} />
                                             <DateText onClick={handleLastYear} text={'Last 12 months'} />
                                             <DateText onClick={handleFirstDayOfMonth} text={'Month to date'} />
                                             <DateText onClick={() => {}} text={'Quarter to date'} />
                                             <DateText onClick={() => {}} text={'All time'} />
                                             <DateText onClick={() => {}} text={'Custom'} />
                                        </div>
                                        <div className={styles.vertical_line}></div>
                                    <div>
                                          <div style={{display: 'flex'}}>
                                             <div  className={styles.calendar_item_wrapper}>
                                                  <Calendar
                                                   
                                                        next2AriaLabel={null}
                                                        prev2AriaLabel={null}
                                                        prev2Label={null}
                                                        next2Label={null}
                                                       onChange={onChange}
                                                       value={dateState}
                                                       selectRange={true}
                                                       locale='en-US'
                                                      
                                                       calendarType='iso8601'
                                                       
                                                       formatShortWeekday={(locale, date) => {
                                                            const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
                                                            return weekdays[date.getDay()];
                                                        }}
                                                  />
                                             </div>
                                             <div className={styles.vertical_line}></div>
                                             <div className={styles.calendar_item_wrapper}>
                                                  <Calendar
                                              
                                                            next2AriaLabel={null}
                                                            prev2AriaLabel={null}
                                                            prev2Label={null}
                                                            next2Label={null}
                                                            onChange={onChange}
                                                            value={dateState}
                                                            selectRange={true}
                                                            locale='en-US'
                                                            
                                                       
                                                            calendarType='iso8601'
                                                            
                                                            formatShortWeekday={(locale, date) => {
                                                                 const weekdays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
                                                                 return weekdays[date.getDay()];
                                                            }}
                                                       />
                                             </div>
                                          </div>
                                          <HorizontalLine />

                                          <div className={styles.full_space}>
                                               <div className='gap_10'>
                                                  <div className='gap_10'>
                                                       <DayPreviwBox text={'10/29/22'} />
                                                       <AppColor.minus fill={AppColor.text} />
                                                       <DayPreviwBox text={'10/29/22'} />
                                                  </div>
     
                                                  <div className='gap_10' style={{marginLeft: 'auto'}}>
                                                       <MyButtonTransparent fontWeight='500' onClick={() => {}} textTransform='uppercase'>
                                                       Cancel
                                                       </MyButtonTransparent>
                                                       <MyButtonOrange fontWeight='500' onClick={() => {}} textTransform='uppercase'>
                                                       Save
                                                       </MyButtonOrange>
                                                  </div>
                                               </div>
                                          </div>
                                    </div>
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
                         <div className={styles.skill_wrapper}>
                                {selectedFilters.map((item) => (
                                    <div className={styles.hover_white}>
                                        <MyButtonTransparentOrange
                                            padding="5px 13px"
                                            onClick={() => {
                                             setSelectedFilters(prev => prev.filter(filter => filter !== item))
                                            }}>
                                            {item}{' '}
                                            <AppColor.close
                                                fill={AppColor.orange}
                                            />
                                        </MyButtonTransparentOrange>
                                    </div>
                                ))}
                            </div>
                         <SizeBox height='15px'/>
                         <Typography variant='body5' fontWeight='500' color={AppColor.transparentTextColor}>
                         Categories
                         </Typography>
                         <DynamicPadding desktop='20px' mobile='15px'/>

                         <InputCommon callback={() => {}}
                              placeholder='Search'/>

                         <DynamicPadding desktop='20px' mobile='15px'/>

                         <div className='grid_15'>
                              <SelectFilterItem
                              callback={(item) => {setSelectedFilters(prev => [...prev,item])}}
                              callbackRemove={(item) => {setSelectedFilters(prev => prev.filter(value => value !== item))}}
                              text='Web Programming' count='26' />
                              <SelectFilterItem
                              callback={(item) => {setSelectedFilters(prev => [...prev,item])}}
                              callbackRemove={(item) => {setSelectedFilters(prev => prev.filter(value => value !== item))}}
                              text='Trading Apps' count='26' />
                              <SelectFilterItem
                              callback={(item) => {setSelectedFilters(prev => [...prev,item])}}
                              callbackRemove={(item) => {setSelectedFilters(prev => prev.filter(value => value !== item))}}
                              text='Windows' count='26' />
                              <SelectFilterItem
                              callback={(item) => {setSelectedFilters(prev => [...prev,item])}}
                              callbackRemove={(item) => {setSelectedFilters(prev => prev.filter(value => value !== item))}}
                              text='Mobile Web' />
                              {!categoriesMore && <div className='cursor' onClick={() => {setCategoriesMore(true)}}>
                             <Typography variant='body5' fontWeight='500' color={AppColor.orange}>+ Show 10 more</Typography>
                             </div>}
                              {categoriesMore && <SelectFilterItem
                              callback={(item) => {setSelectedFilters(prev => [...prev,item])}}
                              callbackRemove={(item) => {setSelectedFilters(prev => prev.filter(value => value !== item))}}
                              text='Web Programming' count='26' />}
                         </div>
                         <SizeBox height='15px'/>
                         
                         <Typography variant='body5' fontWeight='500' color={AppColor.transparentTextColor}>
                         Subscriptions
                         </Typography>
                         <DynamicPadding desktop='20px' mobile='15px'/>
                         <div className='grid_15'>
                              <SelectFilterItem
                              callback={(item) => {setSelectedFilters(prev => [...prev,item])}}
                              callbackRemove={(item) => {setSelectedFilters(prev => prev.filter(value => value !== item))}}
                              text='Start' count='26' />
                              <SelectFilterItem
                              callback={(item) => {setSelectedFilters(prev => [...prev,item])}}
                              callbackRemove={(item) => {setSelectedFilters(prev => prev.filter(value => value !== item))}}
                              text='Pro' count='26' />
                              <SelectFilterItem
                              callback={(item) => {setSelectedFilters(prev => [...prev,item])}}
                              callbackRemove={(item) => {setSelectedFilters(prev => prev.filter(value => value !== item))}}
                              text='Enterprise' count='26' />
                              
                         </div>

                         <SizeBox height='15px'/>
                         
                         <Typography variant='body5' fontWeight='500' color={AppColor.transparentTextColor}>
                         Repeatable
                         </Typography>
                         <DynamicPadding desktop='20px' mobile='15px'/>
                         <div className='grid_15'>
                              <SelectFilterItem
                              callback={(item) => {setSelectedFilters(prev => [...prev,item])}}
                              callbackRemove={(item) => {setSelectedFilters(prev => prev.filter(value => value !== item))}}
                              text='Yes' count='26' />
                              <SelectFilterItem
                              callback={(item) => {setSelectedFilters(prev => [...prev,item])}}
                              callbackRemove={(item) => {setSelectedFilters(prev => prev.filter(value => value !== item))}}
                              text='No' count='26' />
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
                              <SelectFilterItem
                              callback={(item) => {setSelectedFilters(prev => [...prev,item])}}
                              callbackRemove={(item) => {setSelectedFilters(prev => prev.filter(value => value !== item))}}
                              text='Bonuses' count='26' />
                              <SelectFilterItem
                              callback={(item) => {setSelectedFilters(prev => [...prev,item])}}
                              callbackRemove={(item) => {setSelectedFilters(prev => prev.filter(value => value !== item))}}
                              text='Discounts' count='26' />
                              <SelectFilterItem
                              callback={(item) => {setSelectedFilters(prev => [...prev,item])}}
                              callbackRemove={(item) => {setSelectedFilters(prev => prev.filter(value => value !== item))}}
                              text='Gifts' count='26' />
                              
                         </div>
                    </div>}
                    topPaddingFromNode='30px'
               />
                   
               </div>
               {recent
               && <DropdownRecent />
               }
               {exportIcon
               && <div className={styles.flex_item}>
                         <AppColor.exportIcon />
                    </div>
               }
              
              <DropdownNumber />
           </div>
      </div>
    );
};



const DayPreviwBox = ({text}) => {
     return (
          <div className={styles.day_preview_box}>
               <Typography variant='body4'>{text}</Typography>
          </div>
     )
}
const DateText = ({text,onClick}) => {
     return (
          <div onClick={onClick} className={styles.date_text_hover}>
               <Typography textLineHeight='1' variant='body5'>{text}</Typography>
          </div>
     )
}


export const FilterTags = () => {
     const [selectedFilters,setSelectedFilters] = useState<string[]>([]);

     const [startDate, setStartDate] = useState(new Date());

     const [categoriesMore,setCategoriesMore] = useState(false);
     return (
          <div className={styles.flex_filters}>
                    <Typography variant='body5' fontWeight='500' color={AppColor.transparentBlack}>
                    Reset all 
                    </Typography>
                    <div className='gap_10'>
                         <PopUpBottom
                         showNode={
                         <div className='gap_10 cursor'>
                              <AppColor.filter />
                              <Typography textLineHeight='1' textTransform='uppercase' variant='body4' fontWeight='500' color={AppColor.transparentBlack}>Filters</Typography>
                         </div>
                         }
                         popUpNode={<div className='popup_wrapper'>
                              <div className={styles.skill_wrapper}>
                                     {selectedFilters.map((item) => (
                                         <div className={styles.hover_white}>
                                             <MyButtonTransparentOrange
                                                 padding="5px 13px"
                                                 onClick={() => {
                                                  setSelectedFilters(prev => prev.filter(filter => filter !== item))
                                                 }}>
                                                 {item}{' '}
                                                 <AppColor.close
                                                     fill={AppColor.orange}
                                                 />
                                             </MyButtonTransparentOrange>
                                         </div>
                                     ))}
                                 </div>
                              <SizeBox height='15px'/>
                              <Typography variant='body5' fontWeight='500' color={AppColor.transparentTextColor}>
                              Categories
                              </Typography>
                              <DynamicPadding desktop='20px' mobile='15px'/>
     
                              <InputCommon callback={() => {}}
                                   placeholder='Search'/>
     
                              <DynamicPadding desktop='20px' mobile='15px'/>
     
                              <div className='grid_15'>
                                   <SelectFilterItem
                                   callback={(item) => {setSelectedFilters(prev => [...prev,item])}}
                                   callbackRemove={(item) => {setSelectedFilters(prev => prev.filter(value => value !== item))}}
                                   text='Web Programming' count='26' />
                                   <SelectFilterItem
                                   callback={(item) => {setSelectedFilters(prev => [...prev,item])}}
                                   callbackRemove={(item) => {setSelectedFilters(prev => prev.filter(value => value !== item))}}
                                   text='Trading Apps' count='26' />
                                   <SelectFilterItem
                                   callback={(item) => {setSelectedFilters(prev => [...prev,item])}}
                                   callbackRemove={(item) => {setSelectedFilters(prev => prev.filter(value => value !== item))}}
                                   text='Windows' count='26' />
                                   <SelectFilterItem
                                   callback={(item) => {setSelectedFilters(prev => [...prev,item])}}
                                   callbackRemove={(item) => {setSelectedFilters(prev => prev.filter(value => value !== item))}}
                                   text='Mobile Web' />
                                   {!categoriesMore && <div className='cursor' onClick={() => {setCategoriesMore(true)}}>
                                  <Typography variant='body5' fontWeight='500' color={AppColor.orange}>+ Show 10 more</Typography>
                                  </div>}
                                   {categoriesMore && <SelectFilterItem
                                   callback={(item) => {setSelectedFilters(prev => [...prev,item])}}
                                   callbackRemove={(item) => {setSelectedFilters(prev => prev.filter(value => value !== item))}}
                                   text='Web Programming' count='26' />}
                              </div>
                              <SizeBox height='15px'/>
                              
                              <Typography variant='body5' fontWeight='500' color={AppColor.transparentTextColor}>
                              Subscriptions
                              </Typography>
                              <DynamicPadding desktop='20px' mobile='15px'/>
                              <div className='grid_15'>
                                   <SelectFilterItem
                                   callback={(item) => {setSelectedFilters(prev => [...prev,item])}}
                                   callbackRemove={(item) => {setSelectedFilters(prev => prev.filter(value => value !== item))}}
                                   text='Start' count='26' />
                                   <SelectFilterItem
                                   callback={(item) => {setSelectedFilters(prev => [...prev,item])}}
                                   callbackRemove={(item) => {setSelectedFilters(prev => prev.filter(value => value !== item))}}
                                   text='Pro' count='26' />
                                   <SelectFilterItem
                                   callback={(item) => {setSelectedFilters(prev => [...prev,item])}}
                                   callbackRemove={(item) => {setSelectedFilters(prev => prev.filter(value => value !== item))}}
                                   text='Enterprise' count='26' />
                                   
                              </div>
     
                              <SizeBox height='15px'/>
                              
                              <Typography variant='body5' fontWeight='500' color={AppColor.transparentTextColor}>
                              Repeatable
                              </Typography>
                              <DynamicPadding desktop='20px' mobile='15px'/>
                              <div className='grid_15'>
                                   <SelectFilterItem
                                   callback={(item) => {setSelectedFilters(prev => [...prev,item])}}
                                   callbackRemove={(item) => {setSelectedFilters(prev => prev.filter(value => value !== item))}}
                                   text='Yes' count='26' />
                                   <SelectFilterItem
                                   callback={(item) => {setSelectedFilters(prev => [...prev,item])}}
                                   callbackRemove={(item) => {setSelectedFilters(prev => prev.filter(value => value !== item))}}
                                   text='No' count='26' />
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
                                   <SelectFilterItem
                                   callback={(item) => {setSelectedFilters(prev => [...prev,item])}}
                                   callbackRemove={(item) => {setSelectedFilters(prev => prev.filter(value => value !== item))}}
                                   text='Bonuses' count='26' />
                                   <SelectFilterItem
                                   callback={(item) => {setSelectedFilters(prev => [...prev,item])}}
                                   callbackRemove={(item) => {setSelectedFilters(prev => prev.filter(value => value !== item))}}
                                   text='Discounts' count='26' />
                                   <SelectFilterItem
                                   callback={(item) => {setSelectedFilters(prev => [...prev,item])}}
                                   callbackRemove={(item) => {setSelectedFilters(prev => prev.filter(value => value !== item))}}
                                   text='Gifts' count='26' />
                                   
                              </div>
                         </div>}
                         topPaddingFromNode='30px'
                    />
                    <DropdownRecent />
                    </div>
          </div>
     )
}

type SelectFilterItemProps = {
     text: string;
     count?: string;
     callback: (item:string) => void;
     callbackRemove: (item: string) => void;
     initState?: boolean;
}
export const SelectFilterItem = ({initState,text,count,callback,callbackRemove}:SelectFilterItemProps) => {
     
     const [isSelected,setIsSelected] = useState(false);

     return (
          <div className='gap_10'>
               <MyCheckbox width='20px' basicValue={initState ?? false} height='20px' callback={(item) => {
                    if(item && !isSelected) {
                         console.log('callabck');
                         
                         setIsSelected(item)
                         callback(text);
                    } else {
                         setIsSelected(item);
                         callbackRemove(text);
                    }
                    
                    }}/>
               <Typography variant='body5'>{text}</Typography>
               {count && <div style={{marginLeft: 'auto'}}>
                    <Typography color={AppColor.transparentBlack} variant='body5'>{count}</Typography>
                    </div>}
          </div>
     )
}

export default SearchFilterBar;