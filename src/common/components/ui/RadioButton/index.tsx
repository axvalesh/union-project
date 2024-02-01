
import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import Typography from '../Typography/Typography';
import AppColor from '@common/styles/variables-static';

type RadioButtonProps = {
    text?: string;
    activeSelection?: boolean;
}
const RadioButton = ({text,activeSelection}:RadioButtonProps) => {
    const [isSelected,setIsSelected] = useState(false);

    useEffect(() => {
        setIsSelected(activeSelection);
    }, [activeSelection])
    return (
      <div onClick={() => {setIsSelected(prev => !prev)}} style={{cursor: 'pointer'}} className='gap_10'>
            <div className={`${styles.select_box} ${isSelected ? styles.select_box_active : styles.select_box_disabled}`}></div>
            {text &&
            <Typography color={isSelected ? AppColor.orange : AppColor.text} fontWeight={isSelected ? '500' : '400'} variant='body4'>{text}</Typography>
            }
      </div>
    );
};

export default RadioButton;