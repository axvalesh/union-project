import AppColor from "@common/styles/variables-static";
import styles from './style.module.scss';
import {useState} from 'react';
import Typography from "../../Typography/Typography";

type DropdownNodeProps = {
    title:string;
    countNotifications: number;
    filters: string[];
    dropnodes: React.ReactNode;

}
const DropdownNode = ({title,countNotifications,dropnodes,filters}:DropdownNodeProps) => {
    const [isActive,setIsActive] = useState(false);
    const [categoryActiveIndex,setCategoryActiveIndex] = useState(0);
    function changeState(event: any) {
        setIsActive((prev) => !prev);
    }
    return (
      <div className={styles.wrapper}>
           <div onClick={(event) => {changeState(event)}} className={styles.title_block}>
                <div className={styles.title_shell}>
                    <Typography variant="body3" color={isActive ? '#515151' : AppColor.colorWithOpacity('#515151', 0.5)}>
                        {title}
                    </Typography>
                    <span className={styles.count_notifications}> <Typography textLineHeight="100%" variant="body3" fontWeight="500" color="white"> {countNotifications}</Typography></span>
                </div>

                <div className={styles.filter_all_wrapper}>
                {filters.map((filter,index) =>
                    <FilterItem
                        text={filter}
                        activeIndex={categoryActiveIndex}
                        itemIndex={index}
                        onClick={() => { setCategoryActiveIndex(index)}}
                    />
                )}
                </div>

                <div className={styles.close_chevron}>
                {isActive
                ? <AppColor.chevronTop fill={AppColor.text}/>
                : <AppColor.chevronBottom fill={AppColor.text} fillOpacity={0.5}/>
                }
                </div>
           </div>
           <div className={`${isActive ? styles.description_block_active :styles.description_block}`}>
                <div className={styles.horizontal_line}></div>
                <div className={styles.nodes_hover_wrapper}>
                    {dropnodes}
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