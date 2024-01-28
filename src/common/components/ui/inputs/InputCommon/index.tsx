import AppColor from '@common/styles/variables-static'
import styles from './style.module.scss'
import { useState } from 'react'

type InputCommonProps = {
    placeholder: string;
    callback: (item:string) => void;
    padding?: string;
    rightPadding?: number;
    textAlingCenter?: boolean;
    backgroundColor?: string;
    textColor?: string;
    type?: React.HTMLInputTypeAttribute;
    width?: string;
}
const InputCommon = ({width, placeholder,callback,padding,rightPadding,textAlingCenter=false,backgroundColor,textColor,type }: InputCommonProps) => {
    const [text,setText] = useState('');

    function handleChange(item:string) {
        callback(item);
        setText(item)
    } 
    return (
        <div className={styles.wrapper} style={{width: width}}>
            <input
                value={text}
                onChange={(item) => {handleChange(item.target.value)}}
                className={styles.input}
                type={type ?? 'text'}
                style={{color: textColor ?? AppColor.text,padding:padding,paddingRight: `${rightPadding+15}px`,textAlign: textAlingCenter ? 'center' : 'start',backgroundColor: backgroundColor ?? 'white'}}
                placeholder={placeholder}
            />
            <div onClick={() => {setText('')}} style={{opacity: text != '' ? '1' : '0',right: `${rightPadding}px`}} className={styles.close_icon}><AppColor.close fill={AppColor.text} width={'12px'} height={'12px'} /></div>
        </div>
    )
}

export default InputCommon
