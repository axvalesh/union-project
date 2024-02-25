
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';
import styles from './style.module.scss';
import { useEffect, useState } from 'react';
import Typography from '@common/components/ui/Typography/Typography';
import AppColor from '@common/styles/variables-static';
import Roadmap from './components/Roadmap';
import { ActivityItem } from '@common/components/ui/Dropdown/DropdownNodes/variants/DropdownNodeActivity/index';
import { fakeUserConstant } from '@common/models/user';
import SavedItem from './components/SavedItem';
import TemplateItem from './components/TemplateItem';


const topFilters = [
    'Roadmap','Activity', 'Saved & Notes','Templates'
]
const NewsPopUp = () => {

    const [filterTop,setFilterTop] = useState('Roadmap');
    const [activeFilterBottom,setActiveFilterBottom] = useState('All');

    useEffect(() => {
        setActiveFilterBottom('All')
    },[filterTop])
    return (
      <div className={styles.news_wrapper}>
            <div className={styles.top_filter}>
                {topFilters.map(item => 
                   <div style={{borderBottom: `2px solid ${item == filterTop ? AppColor.orange : AppColor.transparent}`}} className={`${styles.filter_item} cursor`} onClick={() => {setFilterTop(item)}}>
                     <Typography variant='body4' fontWeight={item == filterTop ? '500' : '400'}
                        color={item == filterTop ? AppColor.orange : AppColor.text}>{item}</Typography>    
                   </div>
                )}
            </div>
  
            <div className={styles.mid_grid}>
                <MapItem activeSelection={filterTop} />                  
            </div> 
         
            <div>
                <MapItemBottom activeBottomSelect={activeFilterBottom} callbackBottom={(item) => {setActiveFilterBottom(item)}} activeSelection={filterTop} /> 
            </div>
      </div>
    );
};

type MapItemProps = {
    activeSelection: string;
    callbackBottom?: (item: string) => void;
    activeBottomSelect?: string;
}
const MapItem = ({activeSelection}:MapItemProps) => {
    const mapItems = {
        'Roadmap': [
            <Roadmap 
                text='You can upload or update your profile picture in Settings - Profile'
                title='Upload your profile picture'
                completed={false}
            />,
            <Roadmap 
                text='You can upload or update your profile picture in Settings - Profile'
                title='Upload your profile picture'
                completed={true}
                steps=' 1 of 12 completed'
            />,
            <Roadmap 
                text='You can upload or update your profile picture in Settings - Profile'
                title='Upload your profile picture'
                completed={true}
                steps=' 1 of 12 completed'
            />
        ],
        'Activity': [
            <ActivityItem
                filter='Service'
                image={<AppColor.freelancer />}
                percent={97}
                present='16 Oct - Present'
                price='100'
                tag={['Logo Design']}
                title='Logo by sample in vector in maximum quality '
            />,
            <ActivityItem
                filter='Service'
                image={<AppColor.freelancer />}
                percent={97}
                present='16 Oct - Present'
                price='100'
                tag={['Logo Design']}
                title='Logo by sample in vector in maximum quality '
            />,
            <ActivityItem
                filter='Service'
                image={<AppColor.freelancer />}
                percent={97}
                present='16 Oct - Present'
                price='100'
                tag={['Logo Design']}
                title='Logo by sample in vector in maximum quality '
            />
        ],
        'Saved & Notes': [
            <SavedItem text='Odio purus ac ac sem vitae pulvinar viverra lacus, lectus. Cure pa lactus.' />,
            <SavedItem />,
            <SavedItem />,
        ],
        'Templates': [
            <TemplateItem />,
            <TemplateItem />,
            <TemplateItem />,
        ],
    }
    const selectedItems = mapItems[activeSelection] || []; // Handle the case where activeSelection is not found

    return (
        <>
            {...selectedItems}
        </>
    );
}

const MapItemBottom = ({activeSelection,activeBottomSelect,callbackBottom}:MapItemProps) => {
    const mapItems:Record<string, string[]> = {
        'Roadmap': [
            'All', 'Guide', 'Mission'
        ],
        'Activity': [
            'All', 'Service', 'Order', 'Sponsorship'
        ],
        'Saved & Notes': [
           'All', 'User', 'Service'
        ],
        'Templates': [
            'All', 'Recent', 'Saved'
        ],
    }
    const selectedItems = mapItems[activeSelection] || []; // Handle the case where activeSelection is not found

    return (
        <div className={styles.bottom_part}>
            <div className={styles.bottom_part_padding}>
                <div className={styles.bottom_buttons}>
                    {selectedItems.map(item =>
                        <div className='cursor' onClick={() => {callbackBottom(item)}}>
                            <Typography color={item == activeBottomSelect ? AppColor.orange : AppColor.text}
                            fontWeight={item == activeBottomSelect ? '500' : '400'}
                            variant='body4'>{item}</Typography>
                        </div>)}
                </div>
               <div className='gap_20'>
                        {activeSelection == 'Saved & Notes' && <Typography variant='body4' fontWeight='500' textTransform='uppercase' color={AppColor.transparentBlack}>No list</Typography>}
                        {activeSelection == 'Templates' && <Typography variant='body4' fontWeight='500' textTransform='uppercase' color={AppColor.transparentBlack}>Orders</Typography>}
                   <div className='gap_5'>
                        <Typography variant='body4' fontWeight='500' color={AppColor.transparentBlack}>
                            3
                        </Typography>
                        <AppColor.chevronBottom fill={AppColor.transparentBlack}/>
                    </div>
               </div>
            </div>
        </div>
    );
}

export default NewsPopUp;