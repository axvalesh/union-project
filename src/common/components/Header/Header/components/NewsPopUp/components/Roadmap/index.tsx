
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import MyCheckbox from '@common/components/ui/inputs/Checkbox/index';
import Typography from '@common/components/ui/Typography/Typography';
import UserAvatar from '@common/components/ui/UserAvatar/index';
import { fakeUserConstant } from '@common/models/user';
import SizeBox from '@common/components/ui/SizeBox/index';


type RoadmapProps = {
    completed?: boolean;
    title: string;
    text: string;
    steps?: string;
}
const Roadmap = ({completed,text,title,steps}:RoadmapProps) => {

    return (
      <div className={styles.roadmap_wrapper}>
           <div>
                {completed
                ? <AppColor.taskCheck />
                : <MyCheckbox borderRadius='50%' width='15px' height='15px'/>}
           </div>
           <div className={styles.flex_column}>
                  <Typography textLineHeight='1' variant='body4' fontWeight='500'>
                    {title} {steps && <span style={{color: AppColor.orange}}>{steps}</span>}
                </Typography>  
              
                <Typography style={{textOverflow: 'ellipsis'}} textLineHeight='1' variant='body4'>
                    {text}
                </Typography>
           </div>
       
                {completed
                ? <div className={styles.flex_column} style={{marginLeft: 'auto',alignItems: 'end'}}>
                   
                        <UserAvatar url={fakeUserConstant.image} name={fakeUserConstant.name} width='22px' height='22px' 
                            preventMobileNone={true} active={true}/>
                    <div className='gap_5'>
                        <AppColor.pigCoins />
                        <Typography variant='body4'>25</Typography>
                    </div>
                </div>
                : <div className={styles.flex_center} style={{marginLeft: 'auto'}}>
                <Typography className={'underline_appearance orange'} textLineHeight='1' variant='body5' color={AppColor.orange}>Go to profile</Typography>
                </div>}
       
      </div>
    );
};

export default Roadmap;