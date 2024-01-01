import AppColor from "@common/styles/variables-static";
import styles from './style.module.scss';
import {useState} from 'react';
import Typography from "../../Typography/Typography";

type DropdownNodeProps = {
    title:string;
    description:string;
    showLine?: boolean;
}
const DropdownNode = ({title,description,showLine=true}:DropdownNodeProps) => {
    const [isActive,setIsActive] = useState(false);

    const changeState = () => {
        setIsActive(prev => !prev);
    }
    return (
      <div className={styles.wrapper}>
           <div onClick={changeState} className={styles.title_block}>
                <div className={styles.title_shell}>
                    <Typography variant="body1" color={isActive ? '#515151' : AppColor.colorWithOpacity('#515151', 0.5)}>
                        {title}
                    </Typography>
                </div>
                {isActive
                ? <AppColor.chevronTop/>
                : <AppColor.chevronBottom color='#010101' fillOpacity={0.5}/>
                }
           </div>
           <div className={`${isActive ? styles.description_block_active :styles.description_block}`}>
                <Typography variant="body4">
                    {description}
                </Typography>
           </div>
           {showLine 
           ? <div className={styles.line}></div>
           : <></>
           }
      </div>
    );
};

export default DropdownNode;