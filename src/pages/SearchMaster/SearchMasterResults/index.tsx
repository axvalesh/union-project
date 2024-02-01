
import HeaderSearch from '@common/components/Header/HeaderSearch/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import Typography from '@common/components/ui/Typography/Typography';
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import { useId, useState } from 'react';
import CardStatisticTest from '@common/components/cards/CardStatistics/variants/CardStatisticTest';

const SearchMasterResults = () => {
    const [selectedFilter,setSelectedFilter] = useState('');
    const [cards,setCards] = useState([1,2,3,4]);
    const mobileFilterItems:SelectItemProps[] = [
        {
          title: 'Website Development',
          text: 'Wordpress, Wix, other',
          icon: <AppColor.development />,
          callback: (item) => { setSelectedFilter(item) },
        },
        {
          title: 'Web Design',
          text: 'Figma, Photoshop, other',
          icon: <AppColor.desing />,
          callback: (item) => { setSelectedFilter(item) },
        },
        {
          title: 'Logo Design',
          text: 'Minimalist, Vintage, other',
          icon: <AppColor.development />,
          callback: (item) => { setSelectedFilter(item) },
        },
        {
          title: 'Content Writing',
          text: 'Website content, blog posts',
          icon: <AppColor.development />,
          callback: (item) => { setSelectedFilter(item) },
        },
        {
          title: 'IT Support',
          text: 'Domain, hosting, other',
          icon: <AppColor.development />,
          callback: (item) => { setSelectedFilter(item) },
        },
      ];
    return (
        <div>   
        <HeaderSearch 
         allItemsProgress={['Category', 'Requirements', 'Skills', 'Budget & Delivery ', 'Results']}
         currentItemProgress='Results'
        />

       <div className={styles.wrapper}>
            <DynamicPadding />
            <div className={styles.text_flex}>
                 <Typography variant='titleBig' textTransform='uppercase'>Results</Typography>
                 <div className={styles.template_icon}>
                 <AppColor.template />
                 </div>
            </div>
 
            <DynamicPadding desktop='25px' mobile='20px'/>
            <div style={{textAlign: 'center'}} className='justify_center'>
             <Typography variant='body4' color={AppColor.transparentBlack}>Explore tailored suggestions of comprehensive solutions</Typography></div>
             <DynamicPadding />

        <div className='mobile justify_center'>
                <MobileFilter 
                    items={mobileFilterItems}
                />
        </div>
        <div className='desktop'>
            <div className={`${styles.selection_items_wrapper}`}>
                <SelectItem
                    title='Website Development'
                    text='Wordpress, Wix, other'
                    callback={(item) => {setSelectedFilter(item)}}
                    icon={<AppColor.development />}
                    activeTitle={selectedFilter}
                />
                <SelectItem
                    title='Web Design'
                    text='Figma, Photoshop, other'
                    callback={(item) => {setSelectedFilter(item)}}
                    icon={<AppColor.desing />}
                    activeTitle={selectedFilter}
                />
                <SelectItem
                    title='Logo Design'
                    text='Minimalist, Vintage, other'
                    callback={(item) => {setSelectedFilter(item)}}
                    icon={<AppColor.development />}
                    activeTitle={selectedFilter}
                />
                <SelectItem
                    title='Content Writing'
                    text='Website content, blog posts'
                    callback={(item) => {setSelectedFilter(item)}}
                    icon={<AppColor.development />}
                    activeTitle={selectedFilter}
                />
                <SelectItem
                    title='IT Support'
                    text='Domain, hosting, other'
                    callback={(item) => {setSelectedFilter(item)}}
                    icon={<AppColor.development />}
                    activeTitle={selectedFilter}
                />
            </div>
        </div>

        <DynamicPadding />

        <div className='gap_10'>
            <Typography variant='body3' textLineHeight='1' fontWeight='500'>Services</Typography>
            <div className={styles.black_box}>
                <Typography fontWeight='500' color='white' textLineHeight='1' variant='body3'>8</Typography>
            </div>

            <div style={{marginLeft: 'auto'}}>
                <Typography variant='body5' textLineHeight='1' color={AppColor.transparentBlack}>All Services</Typography>
            </div>
        </div>

        <DynamicPadding desktop='30px' mobile='20px'/>

        <div className={styles.cards_wrapper}>
                {cards.map(item => 
                    <div className="center_card">
                <CardStatisticTest />
                </div>)}
        </div>

        </div>
           
      </div>
    );
};

type SelectItemProps = {
    title: string;
    text: string;   
    icon: React.ReactNode
    activeTitle?: string;
    callback: (item:string) => void;

}
const SelectItem = ({icon,text,callback,title,activeTitle}:SelectItemProps) => {
    const isActive = title == activeTitle;

    const handleClick = () => {
        if(activeTitle != title) {
            callback(title);
        }
    }
    return (
        <div onClick={handleClick} style={{backgroundColor: isActive ? AppColor.white : 'white'}} className={styles.select_item}>
            {icon}
            <div className={styles.flex_column}>
                <Typography fontWeight='500' variant='body5'>{title}</Typography>
                <Typography variant='body5'>{text}</Typography>
            </div>
        </div>
    )
}

type MobileFilterProps = {
    items: SelectItemProps[];
}
const MobileFilter = ({items}:MobileFilterProps) => {
    const [currentIndex,setCurrentIndex] = useState(0);
    const currentItem = items[currentIndex]
    const containerId = useId();
    const [showDropdown,setShowDropdown] = useState(false);
    const handleClick = () => {
        
    }
    return (
        <div style={{position: 'relative'}}>
            <div onClick={() => {setShowDropdown(prev => !prev)}} style={{backgroundColor: AppColor.white}} className={styles.select_item}>
                {currentItem.icon}
                <div className={styles.flex_column}>
                    <Typography fontWeight='500' variant='body5'>{currentItem.title}</Typography>
                    <Typography variant='body5'>{currentItem.text}</Typography>
                </div>
                <div style={{marginLeft: 'auto'}}>
                    {showDropdown
                    ? <AppColor.chevronTop fill={AppColor.text}/>
                    : <AppColor.chevronBottom fill={AppColor.text}/>}    
                </div>
            </div>
            <div style={{display: showDropdown ? 'block' : 'none'}} className={styles.absolute_item_mobile}>
                {items.map((item,index) => {
                    if(index == currentIndex) return (<></>)
                    return (
                       <div key={`${containerId}-${index}-${currentIndex}`} onClick={() => {setCurrentIndex(index)}}>
                            <SelectItem
                                title={item.title}
                                text={item.text}
                                callback={(item) => {}}
                                icon={item.icon}
                                activeTitle={''}
                            />
                       </div>
                    )
                }
                    
                )}
            </div>
        </div>
    )
}

export default SearchMasterResults;