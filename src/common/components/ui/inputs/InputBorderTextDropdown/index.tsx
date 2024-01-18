

import { useState } from 'react';
import Typography from '../../Typography/Typography';
import styles from './style.module.scss';
import AppColor from '@common/styles/variables-static';

type InputBorderTextDropdownProps = {
    borderText: string;
    initText: string;
    labelIcon: any;
    isRequired?: boolean;
    dropdownVariants: string[];
    callback?: (item:string) => void;
}
const InputBorderTextDropdown = ({borderText,initText='',dropdownVariants,labelIcon,isRequired,callback}:InputBorderTextDropdownProps) => {
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
            <label htmlFor="example">
                {borderText}{' '}
                {isRequired && (
                    <span className={styles.red_text}>*</span>
                )}{' '}
            </label>
            <div className={styles.flex}>
                <Typography variant="body4">{currenText}</Typography>
                {
                showDropdown
                ? <AppColor.chevronTop
                    fill={AppColor.transparentBlack}
                    width={'12px'} height={'6px'}
                />
                : <AppColor.chevronBottom
                    fill={AppColor.transparentBlack}
                    width={'12px'} height={'6px'}
                />}
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


export default InputBorderTextDropdown;