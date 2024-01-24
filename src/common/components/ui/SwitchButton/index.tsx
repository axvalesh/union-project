
import { useState } from 'react';
import styles from './style.module.scss';

type SwitchButtonProps = {
    callback?: (bool:boolean) => void;
    startValue?: boolean; 
    width?: string;
    height?: string;
}
const SwitchButton = ({callback,startValue=false,height,width}:SwitchButtonProps) => {

    const [isActive,setIsActive] = useState(startValue);

    function handleSwitch(item:boolean) {
        if(callback != null) {
            callback(item);
        }
        setIsActive(item);
    }
    return (
      <div>
           <label style={{width: width,height:height}} className={styles.switch}>
                <input checked={isActive} onChange={(value) => {handleSwitch(value.target.checked)}} type="checkbox" />
                <span className={`${styles.slider} ${styles.round}`}></span>
            </label>
      </div>
    );
};

export default SwitchButton;