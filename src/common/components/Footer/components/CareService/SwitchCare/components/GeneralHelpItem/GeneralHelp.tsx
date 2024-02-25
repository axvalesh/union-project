
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import Typography from '@common/components/ui/Typography/Typography';
import SizeBox from '@common/components/ui/SizeBox/index';
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange';
import { CareServiceChildProps } from '../..';

const GeneralHelp = ({setActiveSwitch}:CareServiceChildProps) => {

    return (
      <div className={styles.general_help}>
           <div style={{flexGrow: '1'}}>
           <QuestionItem callback={(item) => {setActiveSwitch(item)}}/>
           </div>
           <MyButtonOrange onClick={() => {
            setActiveSwitch('main.general help.create');
           }} padding='15px' fontWeight='500' textTransform='uppercase' width='100%'>
           Create New Question
           </MyButtonOrange>
      </div>
    );
};

const QuestionItem = ({callback}) => {
    return (
       <div onClick={() => {callback('main.general help.helpchat showhelp')}} className={`${styles.question_item} cursor`}>
            <div>
                <div className='gap_10'>
                    <AppColor.questionOrange />
    
                    <div>
                        <Typography variant='body5' fontWeight='500'>
                        How to create a job ?
                        </Typography>
                        <SizeBox height='10px' />
                        <div className='gap_5'>
                        <Typography variant='body5' color={AppColor.orange}>Opened</Typography>
                        <Typography variant='body5' color={AppColor.transparentBlack}>1 min ago</Typography>
                        </div>
                    </div>
                </div>
    
                <SizeBox height='10px' />
                <Typography variant='body4'>Odio purus ac ac sem vitae pulvinar viverra lacus, lectus. </Typography>
            </div>

            <div className={styles.orange}>
                <Typography variant='body5' color={'white'}>3</Typography>
            </div>
       </div>
    )
}

export default GeneralHelp;