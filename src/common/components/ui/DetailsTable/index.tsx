
import { useEffect, useState } from 'react';
import DynamicPadding from '../DynamicPadding';
import Typography from '../Typography/Typography';
import styles from './style.module.scss';
import AppColor from '@common/styles/variables-static';
import { useScreenSize } from '@common/helpers/useScreenSize';
import SizeBox from '../SizeBox';
import HorizontalLine from '../Lines/HorizontalLine';


type DetailsTableProps = {
  details: DetailsTableItem[];
  page?: number;
  filters: string[];
  callbackNav: (item:number) => void;
  showUsers?: boolean;
  users?: any[];
  maxWidth?: string;
  dropdownNode?: React.ReactNode;
  removeNavBar?: boolean;
  removeThreeLines?: boolean;
}

type DetailsTableItem = {
  title: string;
  child: React.ReactNode;
  maxWidth?: string;
}
const DetailsTable = ({details,page,filters,callbackNav,showUsers,users,maxWidth,dropdownNode,removeNavBar=false,removeThreeLines=false}:DetailsTableProps) => {

    const [currentFilter,setCurrentFilter] = useState('All');
    const {width,height} = useScreenSize();
    const [showDropdown,setShowDropdown] = useState(false);

    return (
      <div>
            <div className={styles.filter_text_wrapper}>
                  {filters.map((item) => (
                      <div onClick={() => { setCurrentFilter(item)}} className={styles.filter_text}>
                          <Typography
                          textLineHeight='80%'
                              variant="body4"
                              color={
                                  item == currentFilter
                                      ? AppColor.orange
                                      : AppColor.text
                              }
                              fontWeight={
                                  item == currentFilter
                                      ? '500'
                                      : '400'
                              }>
                              {item}
                          </Typography>
                      </div>
                  ))}
                </div>
                {filters.length > 0 && <>
                  <DynamicPadding mobile='15px' desktop='15px' />
                <div className={styles.vertical_line}></div>
                <DynamicPadding mobile='20px' desktop='30px' />
                </>}
              <div>
                {
                  width < 768
                  ? <div className={styles.mobile_wrapper_all}>
                     {details.map((item,index) => 
                        <div className={styles.mobile_wrapper}>
                          <div className={styles.mobile_text}>
                            <Typography variant='body4' fontWeight='500'>
                                {item.title} <AppColor.trianleDown fill={item.title != ' ' ? AppColor.text : 'transparent'} />
                            </Typography>
                          </div>
                          <div className={styles.mobile_child}>
                          {
                                dropdownNode && index == 0 
                                ? <div style={{cursor: 'pointer'}} onClick={() => {setShowDropdown(prev => !prev)}} className={styles.gap_20}>
                                  {
                                    showDropdown
                                    ? <AppColor.chevronTop width={'20px'} fill={AppColor.text}/>
                                    : <AppColor.chevronBottom width={'20px'} fill={AppColor.text}/>
                                  }
                                  {item.child}
                                </div>
                                : item.child
                              }
                          </div>
                          {index == 0 && dropdownNode
                            ? <div>
                              <SizeBox height='15px'/>
                              <HorizontalLine/>
                              <SizeBox height='15px'/>
                              <div style={{display: showDropdown ? 'block' : 'none'}}>{dropdownNode}</div>
                              </div>
                            : <></>}
                        </div>
                      )}
                   </div>
                  : <div className={styles.desktop_wrapper}>
                    <div className={styles.absolute_background}></div>
                      <div className={styles.desktop_items_wrapper}>
                        {details.map((item,index) =>
                          <div className={styles.dessktop_item_shell} style={{maxWidth: item.maxWidth != null ? item.maxWidth : maxWidth,}}>
                           <div className={styles.title_wrapper_desktop}>
                             <div style={{display: 'flex'}}>
                                {dropdownNode && index == 0
                                ? <SizeBox width='40px'/>
                                : <></>
                                }
                                <Typography variant='body4' fontWeight='500'>
                                {item.title} <AppColor.trianleDown fill={item.title != ' ' ? AppColor.text : 'transparent'} />
                                </Typography>
                             </div>
                           </div>
                            <div className={styles.child_wrapper_desktop}>
                              {
                                dropdownNode && index == 0
                                ? <div style={{cursor: 'pointer'}} onClick={() => {setShowDropdown(prev => !prev)}} className={styles.gap_20}>
                                  {
                                    showDropdown
                                    ? <AppColor.chevronTop width={'20px'} fill={AppColor.text}/>
                                    : <AppColor.chevronBottom width={'20px'} fill={AppColor.text}/>
                                  }
                                  {item.child}
                                </div>
                                : item.child
                              }
                            </div>
                          </div>
                          
                        
                        )}
                        {!removeThreeLines && <div className={styles.dessktop_item_shell} style={{maxWidth: maxWidth}}>
                          <div className={styles.title_wrapper_desktop}>
                            <Typography color='transparent'>a</Typography>
                          </div>
                          <div className={styles.child_wrapper_desktop}>
                            <AppColor.threeLines />
                          </div>
                        </div>}
                      </div>
                  </div>
                }
              </div>
              <DynamicPadding mobile='20px' desktop='30px' />
              <div className={styles.vertical_line}></div>

              {showUsers
              ? 
              <>
              <DynamicPadding mobile='20px' desktop='20px' />
                  <div className={styles.users_wrapper}>
                    {...users}
                  </div>
                  <DynamicPadding mobile='20px' desktop='20px' />
                <div className={styles.vertical_line}></div>
                <DynamicPadding mobile='20px' desktop='20px' />
              </>
              : <></>}
               {showDropdown && dropdownNode && width > 768
              ? <div>{dropdownNode}</div>
              : <></>}
              {!removeNavBar && <> <DynamicPadding mobile='20px' desktop='20px' />
              <div className={styles.flex_space}>
                <Typography variant='body4'>
                  11 841 missions
                </Typography>
                <NavBarLine maxCountPage={11841} callback={(item) => {callbackNav(item)}} />
              </div>
              </>
              }
      </div>
    );
};

export const NavBarLine = ({callback,maxCountPage}: {callback: (item:number) => void,maxCountPage:number}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIdx = Math.max(1, currentPage - 3);

  const endIdx = startIdx + 6;

  const numberBoxes = [];

  useEffect(() => {
    callback(currentPage)
  }, [currentPage])

  for (let i = startIdx; i <= endIdx; i++) {
    numberBoxes.push(
        <div
            onClick={() => {
                if(i <= maxCountPage) {
                  setCurrentPage(i)
                }
            }}
            key={i}
            className={styles.box}
            style={{
                backgroundColor:
                    i === currentPage
                        ? AppColor.orange
                        : 'transparent',
                  opacity: i < maxCountPage+1 ? 1 : 0.3
            }}>
            <Typography
                variant="body4"
                color={i === currentPage ? 'white' : AppColor.text}>
                {i}
            </Typography>
        </div>
    )
  }

  function prevFunction() {
    if(currentPage - 7 > 0) {
      setCurrentPage(prev => prev - 7)
    }
  }

  function nextFunction() {
    if(currentPage + 7 <= maxCountPage) {
      setCurrentPage(prev => prev + 7)
    }
  }


  return (
    <div className={styles.navbar_wrapper}>
      <div onClick={prevFunction}  className={styles.flex_navbar}>
        <AppColor.doubleChevronLeft />
  
        <Typography variant='body4' textTransform='uppercase' textLineHeight='100%'>PREV</Typography>
      </div>

      {numberBoxes}

     <div onClick={nextFunction} className={styles.flex_navbar}>
        <Typography variant='body4' textTransform='uppercase' textLineHeight='100%'>NEXT</Typography>
  
        <AppColor.doubleChevronRight />
     </div>
    </div>
  )
}

export default DetailsTable;