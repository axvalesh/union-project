import AppColor from '@common/styles/variables-static'
import styles from './style.module.scss'
import { useState } from 'react'

type InputCommonProps = {
    placeholder: string;
    callback: (item:string) => void;
    padding?: string;
    rightPadding?: number;
}
const InputCommon = ({ placeholder,callback,padding,rightPadding }: InputCommonProps) => {
    const [text,setText] = useState('');

    function handleChange(item:string) {
        callback(item);
        setText(item)
    } 
    return (
        <div className={styles.wrapper}>
            <input
                value={text}
                onChange={(item) => {handleChange(item.target.value)}}
                className={styles.input}
                type="text"
                style={{padding:padding,paddingRight: `${rightPadding+15}px`}}
                placeholder={placeholder}
            />
            <div onClick={() => {setText('')}} style={{opacity: text != '' ? '1' : '0',right: `${rightPadding}px`}} className={styles.close_icon}><AppColor.close width={'12px'} height={'12px'} /></div>
        </div>
    )
}

export default InputCommon
