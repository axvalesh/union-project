
import { useEffect, useState } from 'react';
import DynamicPadding from '../DynamicPadding';
import Typography from '../Typography/Typography';
import styles from './style.module.scss';
import AppColor from '@common/styles/variables-static';
import { useScreenSize } from '@common/helpers/useScreenSize';


type DetailsTableProps = {
  details: DetailsTableItem[];
  page?: number;
  filters?: string[];
  callbackNav: (item:number) => void;
  showUsers?: boolean;
  users?: any[];
}

type DetailsTableItem = {
  title: string;
  child: React.ReactNode;
}
const DetailsTable = ({details,page,filters,callbackNav,showUsers,users}:DetailsTableProps) => {

    const [currentFilter,setCurrentFilter] = useState('All');
    const {width,height} = useScreenSize();

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
                <DynamicPadding mobile='15px' desktop='15px' />
                <div className={styles.vertical_line}></div>
                <DynamicPadding mobile='20px' desktop='30px' />
              <div>
                {
                  width < 768
                  ? <div className={styles.mobile_wrapper_all}>
                     {details.map(item => 
                        <div className={styles.mobile_wrapper}>
                          <div className={styles.mobile_text}>
                            <Typography variant='body4' fontWeight='500'>
                                {item.title} <AppColor.trianleDown fill={item.title != ' ' ? AppColor.text : 'transparent'} />
                            </Typography>
                          </div>
                          <div className={styles.mobile_child}>
                            {item.child}
                          </div>
                        </div>
                      )}
                   </div>
                  : <div className={styles.desktop_wrapper}>
                    <div className={styles.absolute_background}></div>
                      <div className={styles.desktop_items_wrapper}>
                        {details.map(item =>
                          <div>
                           <div className={styles.title_wrapper_desktop}>
                              <Typography variant='body4' fontWeight='500'>
                              {item.title} <AppColor.trianleDown fill={item.title != ' ' ? AppColor.text : 'transparent'} />
                              </Typography>
                           </div>
                            <div className={styles.child_wrapper_desktop}>
                              {item.child}
                            </div>
                          </div>
                        )}
                      </div>
                  </div>
                }
              </div>
              <DynamicPadding mobile='20px' desktop='30px' />
              <div className={styles.vertical_line}></div>
              <DynamicPadding mobile='20px' desktop='20px' />

              {showUsers
              ? 
              <>
                  <div className={styles.users_wrapper}>
                    {...users}
                  </div>
                  <DynamicPadding mobile='20px' desktop='20px' />
                <div className={styles.vertical_line}></div>
                <DynamicPadding mobile='20px' desktop='20px' />
              </>
              : <></>}
              <div className={styles.flex_space}>
                <Typography variant='body4'>
                  11 841 missions
                </Typography>
                <NavBarLine callback={(item) => {callbackNav(item)}} />
              </div>
      </div>
    );
};

const NavBarLine = ({callback}: {callback: (item:number) => void}) => {
  const [currentPage, setCurrentPage] = useState(1);

  const startIdx = Math.max(1, currentPage - 3);

  const endIdx = startIdx + 6;

  const numberBoxes = [];

  useEffect(() => {
    callback(currentPage)
  }, [currentPage])

  for (let i = startIdx; i <= endIdx; i++) {
    numberBoxes.push(
      <div onClick={() => {setCurrentPage(i)}} key={i} className={styles.box} style={{ backgroundColor: i === currentPage ? AppColor.orange : 'transparent' }}>
        <Typography variant='body4' color={i === currentPage ? 'white' : AppColor.text}>{i}</Typography>
      </div>
    );
  }

  function prevFunction() {
    if(currentPage - 7 > 0) {
      setCurrentPage(prev => prev - 7)
    }
  }

  function nextFunction() {
      setCurrentPage(prev => prev + 7)
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