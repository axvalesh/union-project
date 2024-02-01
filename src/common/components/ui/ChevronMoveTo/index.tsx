
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import Typography from '../Typography/Typography';

type ChevronMoveToProps = {
    variant: 'right' | 'left';
    cancel?: boolean;
    title: string;
    preview?: boolean
    text: string;
    onClick: () => void;
    disabled?: boolean;
}
const ChevronMoveTo = ({preview,variant,onClick,text,title,disabled,cancel=false}:ChevronMoveToProps) => {

    switch(variant) {
        case 'right': 
            return <ChevronMoveToRight preview={preview} cancel={cancel} disabled={disabled} onClick={onClick} text={text} title={title} variant='right'/>
        case 'left':
            return <ChevronMoveToLeft preview={preview} cancel={cancel} disabled={disabled} onClick={onClick} text={text} title={title} variant='right'/>
        }
};

const ChevronMoveToRight = ({variant,onClick,text,title,disabled,cancel,preview}:ChevronMoveToProps) => {
    return (
        <div style={{opacity: disabled ? 0.5 : 1}} className={styles.wrapper}>
            <div className={styles.text + ' ' + styles.right_text}> 
                <Typography variant='body4' fontWeight='500' textTransform='uppercase'>{title}</Typography>
                <Typography variant='body5'>{text}</Typography>
            </div>
            <div style={disabled ? {backgroundColor: 'white'} : {}} onClick={!disabled ? onClick : () => {}} className={styles.chevron}>
                {cancel
                ? <AppColor.close fill={AppColor.text} width={'17px'} height={'17px'}/>
                : preview 
                ? <AppColor.preview width={'24px'} />
                : <AppColor.longChevronRight width={'24px'} />}
            </div>
        </div>
    )
}

const ChevronMoveToLeft = ({variant,onClick,text,title,disabled,cancel}:ChevronMoveToProps) => {
    return (
        <div style={{opacity: disabled ? 0.5 : 1}} className={styles.wrapper}>
            <div style={disabled ? {backgroundColor: 'white',order:1} : {order:1}} onClick={!disabled ? onClick : () => {}} className={styles.chevron}>
                {cancel
                ? <AppColor.close fill={AppColor.text} width={'17px'} height={'17px'}/>
                : <AppColor.longChevronLeft width={'24px'} />}
            </div>
            <div className={styles.text + ' ' + styles.left_text}> 
                <Typography variant='body4' fontWeight='500' textTransform='uppercase'>{title}</Typography>
                <Typography variant='body5'>{text}</Typography>
            </div>
        </div>
    )
}

export default ChevronMoveTo;