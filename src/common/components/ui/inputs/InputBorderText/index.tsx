
import { useState } from 'react';
import styles from './style.module.scss';

type InputBorderTextProps = {
    borderText: string;
    placeholderText: string;
    labelIcon: any;
    isRequired?: boolean;
    callback?: (item:string) => void;
    inputText?: string;
}
const InputBorderText = ({borderText,placeholderText,labelIcon,isRequired,callback,inputText=''}:InputBorderTextProps) => {
    const [text,setText] = useState(inputText);
    function handleInput(event:React.ChangeEvent<HTMLInputElement>) {
        if(callback != null) {
            callback(event.target.value)
        }
        setText(event.target.value)
    }
    return (
    <div className={styles.border_input}>
        <label htmlFor="example">{borderText} {isRequired && <span className={styles.red_text}>*</span>} </label>
        <input value={text} onChange={(event) => handleInput(event)} type="text" id="example" name="example" placeholder={placeholderText}/>
        <div className={styles.label_icon}>
            {labelIcon}
        </div>
    </div>
    );
};

export default InputBorderText;