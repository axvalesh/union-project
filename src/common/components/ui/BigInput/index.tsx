
import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import Typography from '../Typography/Typography';
import AppColor from '@common/styles/variables-static';
import MyButtonOrange from '../MyButton/variants/MyButtonOrange';

type BigInputProps = {

}
const BigInput = () => {
    const [text, setText] = useState('');
    const [selectedText,setSelectedText] = useState('');
    const [showMarkdown,setShowMarkdown] = useState(false)

    useEffect(() => {
        if(selectedText.length > 0) {
            setShowMarkdown(true);
            console.log('show')
        } else {
            setShowMarkdown(false)
        }
    },[selectedText])

    const handleSelect = (event: React.SyntheticEvent<HTMLTextAreaElement>) => {
        const selectedText = event.currentTarget.value.substring(
            event.currentTarget.selectionStart,
            event.currentTarget.selectionEnd
        );
        setSelectedText(selectedText);
    };
    
    return (
      <div className={styles.wrapper_input_field}>
            <textarea onSelect={handleSelect} maxLength={3000}  value={text} onChange={(event) => setText(event.currentTarget.value)} />
            <div style={{display: showMarkdown ? 'flex' : 'none'}} className={styles.absolute_select}>
                <div className={styles.activity_item}>
                    <Typography textLineHeight='1' variant='body4' fontWeight='400' color='white'>Normal text</Typography>
                    <AppColor.chevronBottom fill='white' width={'15px'} height={'7px'}/>
                </div>
                <div className={styles.activity_item}>
                    <AppColor.textAlingleft />
                    <AppColor.chevronBottom fill='white' width={'15px'} height={'7px'}/>
                </div>
                <div className={styles.activity_item}>
                    <div className={styles.color_box}></div>
                    <AppColor.chevronBottom fill='white' width={'15px'} height={'7px'}/>
                </div>
                <div className={styles.activity_item}>
                    <AppColor.bold />
           
                </div>
                <div className={styles.activity_item}>
                    <AppColor.cursive />
        
                </div>
                <div className={styles.activity_item}>
                    <AppColor.underline />
        
                </div>
                <div className={styles.activity_item}>
                    <AppColor.idontknow />
          
                </div>
                <div className='gap_5'>
                    <AppColor.ul />
           
                </div>
                <div className={styles.activity_item}>
                    <AppColor.ol />
           
                </div>
                <div className={styles.activity_item}>
                    <AppColor.pin />
         
                </div>
                <div className={styles.activity_item}>
                    <AppColor.image />
         
                </div>
                <div className={styles.activity_item}>
                    <AppColor.code fill='white' />
     
                </div>
            </div>
           <div className={styles.bottom_part_wrapper}>
    
                <Typography variant='body4' color={AppColor.transparentBlack}>{text.length} / 3000</Typography>
                <MyButtonOrange textTransform='uppercase' onClick={() => {}}> <AppColor.moveOn /> Publish review</MyButtonOrange>
           </div>
      </div>
    );
};

export default BigInput;