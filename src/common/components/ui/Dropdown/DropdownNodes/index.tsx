import AppColor from "@common/styles/variables-static";
import styles from './style.module.scss';
import {useEffect, useState} from 'react';
import Typography from "../../Typography/Typography";

type DropdownNodeProps = {
    title:string;
    countNotifications: number;
    filters: string[];
    dropnodes?: React.ReactNode;
    noneIcon?: any;
    noneTitle?: string;
    noneText?: string;
    noneButton?: any;
    textAfterCount?: any;
    callback?: (item:string) => void;

}
const DropdownNode = ({title,countNotifications,dropnodes,filters,noneText,noneTitle,noneButton,noneIcon,textAfterCount,callback}:DropdownNodeProps) => {
    const [isActive,setIsActive] = useState(false);
    useEffect(() => {
        if(countNotifications == 0) {
            setIsActive(true);
        }
    },[])
    const [categoryActiveIndex,setCategoryActiveIndex] = useState(0);
    function changeState(event: any) {
        if(countNotifications > 0) {
            setIsActive((prev) => !prev);
        }
    }
    return (
      <div className={styles.wrapper}>
           <div onClick={(event) => {changeState(event)}} className={styles.title_block}>
                <div className="gap_10">
                    <div className={styles.title_shell}>
                        <Typography variant="body3" color={isActive ? '#515151' : AppColor.colorWithOpacity('#515151', 0.5)}>
                            {title}
                        </Typography>
                        {countNotifications > 0 ? <span className={styles.count_notifications}> <Typography textLineHeight="100%" variant="body3" fontWeight="500" color="white"> {countNotifications}</Typography></span> : <></>}
                        {textAfterCount}
                    </div>
                    <div className="mobile">
                    {countNotifications > 0
                    ? <div className={styles.close_chevron}>
                    {isActive
                    ? <AppColor.chevronTop fill={AppColor.text}/>
                    : <AppColor.chevronBottom fill={AppColor.text} fillOpacity={0.5}/>
                    }
                </div>
                : <></>
                }
                    </div>
                </div>

                <div className={styles.filter_all_wrapper}>
                {filters.map((filter,index) =>
                    <FilterItem
                        text={filter}
                        activeIndex={categoryActiveIndex}
                        itemIndex={index}
                        onClick={() => { setCategoryActiveIndex(index); callback(filter);}}
                    />
                )}
                </div>

                <div className="desktop">
                {countNotifications > 0
                ? <div className={styles.close_chevron}>
                {isActive
                ? <AppColor.chevronTop fill={AppColor.text}/>
                : <AppColor.chevronBottom fill={AppColor.text} fillOpacity={0.5}/>
                }
                </div>
                : <></>
                }
                </div>
           </div>
           <div className={`${isActive ? styles.description_block_active :styles.description_block}`}>
                <div className={styles.horizontal_line}></div>
                <div className={styles.nodes_hover_wrapper}>
                    {dropnodes != null
                    ? dropnodes
                    : 
                    <div className={styles.none_wrapper}>
                        {noneIcon}
                        <Typography variant="body2" fontWeight="500">{noneTitle}</Typography>
                        <Typography variant="body1" fontWeight="400" color={AppColor.transparentBlack}>{noneText}</Typography>
                        {noneButton}
                    </div>
                    }
                </div>
           </div>
      </div>
    );
};

type FilterItemProps = {
    text: string;
    activeIndex: number;
    itemIndex: number;
    onClick: any;
}
const FilterItem = ({activeIndex,itemIndex,text,onClick}:FilterItemProps) => {
    const active = activeIndex == itemIndex;
    return ( 
        <div onClick={onClick} className={styles.filter_wrapper} style={{border: `1px solid ${active ? AppColor.orange : 'transparent'}`}}>
            <Typography variant="body4" fontWeight={active ? '500' : '400'} color={active ? AppColor.orange : AppColor.text}> {text} </Typography>
        </div>
    )
}

export default DropdownNode;