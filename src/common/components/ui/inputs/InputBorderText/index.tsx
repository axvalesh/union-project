
import styles from './style.module.scss';

type InputBorderTextProps = {
    borderText: string;
    placeholderText: string;
    labelIcon: any;
}
const InputBorderText = ({borderText,placeholderText,labelIcon}:InputBorderTextProps) => {

    return (
    <div className={styles.border_input}>
        <label htmlFor="example">{borderText} <span className={styles.red_text}>*</span> </label>
        <input type="text" id="example" name="example" placeholder={placeholderText}/>
        <div className={styles.label_icon}>
            {labelIcon}
        </div>
    </div>
    );
};

export default InputBorderText;