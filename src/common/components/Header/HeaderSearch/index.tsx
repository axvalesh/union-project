
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import PercentBar from '@common/components/ui/PercentBar/PercentBar';
import Typography from '@common/components/ui/Typography/Typography';
import Logo from '@common/components/Logo/Logo';

type HeaderSearchProps = {
        allItemsProgress: string[];
        currentItemProgress: string;
}
const HeaderSearch = ({allItemsProgress,currentItemProgress}:HeaderSearchProps) => {
    const itemIndex = allItemsProgress.findIndex(item => item === currentItemProgress);
    const percent = currentItemProgress == allItemsProgress[allItemsProgress.length-1] ? 100 : 100/(allItemsProgress.length -1)/2*(itemIndex+1+(itemIndex))
    return (
        <div className={styles.wrapper}>
               <div className={styles.title_content_wrapper}>
                    <Logo text='Search master' color='white'/>
                    <div className={styles.content}>
                      
                            <PercentBar
                                currentPercent={percent}
                                height='15px'
                                backgroundColor={'white'}
                            />
                          <div className={`${styles.close_box} ${styles.mobile}`}>
                                <AppColor.close fill='white' width={'16px'} height={'16px'}/>
                            </div>
                        <div className={styles.titles_wrapper + " " + styles.desktop}>
                            {allItemsProgress.map((item,index) =>
                                <Typography variant='body4'
                                color={percent == 100 ? AppColor.orange : index == itemIndex ? AppColor.orange : index == itemIndex+1 ? 'white' : index < itemIndex ? AppColor.orange : AppColor.transparentWhite}
                                >{item}</Typography>    
                            )}
                        </div>
                    </div>   
                    <div className={`${styles.close_box} ${styles.desktop}`}>
                        <AppColor.close fill='white' width={'16px'} height={'16px'}/>
                    </div>

                    <div className={`${styles.mobile} gap_5` }>
                        <Typography textLineHeight='1' variant='body5' color='white' fontWeight='500'>Category </Typography>
                        <AppColor.chevronBottom fill='white' height={'6px'} width={'12px'}/>
                    </div>
               </div>
      </div>
    );
};


export default HeaderSearch;