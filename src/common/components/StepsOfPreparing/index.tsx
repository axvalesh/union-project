
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import Typography from '../ui/Typography/Typography';
import SizeBox from '../ui/SizeBox';
import DynamicPadding from '../ui/DynamicPadding';

type StepsOfPreparingProps ={
   elements: {
    text: string;
    solve: string; 
   }[];
}
const StepsOfPreparing = ({elements}:StepsOfPreparingProps) => {

    return (
      <div className={styles.steps_grid}>
           {elements.map((item,index) =>
                <StepItem drawLine={elements.length-1 != index} solve={item.solve} text={item.text}/>
            )}
      </div>
    );
};

type StepItemProps = {
    text: string;
    solve: string;
    drawLine: boolean
}
export const StepItem = ({solve,text,drawLine}:StepItemProps) => {
    return (
        <div className={styles.step_item}>
            <div className={styles.step_verical_wrapper}>
                <div className={styles.box_true}><AppColor.singTrue width={'14px'} height={'10px'} stroke={AppColor.orange} /></div>
                {drawLine && <div className={styles.vertical_line}></div>}
            </div>
            <div>
                <SizeBox height='5px'/>
                <Typography textLineHeight='1' variant='body4'>{text}</Typography>
                <SizeBox height='20px'/>
                <div style={{marginLeft: '5px'}} className="gap_10">
                    <AppColor.edit fill={AppColor.orange} />
                    <Typography variant='body5' fontWeight='500' color={AppColor.orange}>{solve}</Typography>
                </div>
                <DynamicPadding desktop='30px' mobile='20px'/>
            </div>
        </div>
    )
}


export default StepsOfPreparing;