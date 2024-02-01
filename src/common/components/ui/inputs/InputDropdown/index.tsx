

import { useState } from 'react';
import Typography from '../../Typography/Typography';
import styles from './style.module.scss';
import AppColor from '@common/styles/variables-static';

type InputDropdownProps = {
    initText: string;
    labelIcon: any;
    isRequired?: boolean;
    dropdownVariants: string[];
    callback?: (item:string) => void;
    marginLeft?: boolean;
    iconHeight?: string;
}
const InputDropdown = ({iconHeight,marginLeft,initText='',dropdownVariants,labelIcon,isRequired,callback}:InputDropdownProps) => {
    const [currenText,setCurrentText] = useState(initText)
    const [showDropdown,setShowDropdown] = useState(false);

    function handleChange(item:string) {
        if(callback != null) {
            callback(item)
        }
        setCurrentText(item);
    }
    return (
        <div onClick={() => {setShowDropdown(prev => !prev)}} className={styles.border_input}>
            <div className={styles.flex}>
                <Typography variant="body4">{currenText}</Typography>
                <div style={{marginLeft: marginLeft ? 'auto' : '0px'}}>
                    {
                    showDropdown
                    ? <AppColor.chevronTop
                        fill={AppColor.transparentBlack}
                        height={iconHeight ?? '6px'}
                    />
                    : <AppColor.chevronBottom
                        fill={AppColor.transparentBlack}
                        height={iconHeight ?? '6px'}
                    />}
                </div>
            </div>
            <div className={styles.variants_wrapper} style={{display: showDropdown ? 'grid' : 'none'}}>
                {dropdownVariants.map(item =>
                   <div
                   onClick={() => {handleChange(item)}}
                   className={styles.variant_item}> <Typography variant='body4'>{item}</Typography>    </div>
                )}
            </div>
            <div className={styles.label_icon}>{labelIcon}</div>
        </div>
    )
};


export default InputDropdown;