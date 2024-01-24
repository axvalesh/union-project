
import Header from '@common/components/Header/Header/index';
import styles from './style.module.scss';
import NavigationBarSelection from '@common/components/NavigationBarSelection/index';
import PageDetails from '@common/components/ui/PageDetails/index';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import AppColor from '@common/styles/variables-static';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import UserTopPageInfo from '@common/components/ui/UserTopPageInfo/index';
import { fakeUserConstant } from '@common/models/user';
import Typography from '@common/components/ui/Typography/Typography';
import FilterList from '@common/components/FilterList/index';
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index';
import SizeBox from '@common/components/ui/SizeBox/index';
import PercentBar from '@common/components/ui/PercentBar/PercentBar';
import DaysLeftTimer from '@common/components/ui/DaysLeftTimer/DaysLeftTimer';

const Service = () => {
    const arrayHistory = ['Partnership', 'Development', 'Web Development', 'WordPress'] 
    const title = 'Logo by sample in vector in maximum quality';
    return (
        <div>
        <Header />

        <NavigationBarSelection
           allItemsProgress={['Program', 'Selection', 'Progress', 'Completed']}
           currentItemProgress='Program'
        />

        <div className={'wrapper_page'}>
            <PageDetails
                historyNode={
                    <NavigationItem
                        image={<AppColor.home />}
                        textList={arrayHistory}
                    />
                }
                pageTitle={title}
            />

            <DynamicPadding desktop='30px' mobile='20px'/>
            <UserTopPageInfo user={fakeUserConstant}
                nodeAfter={
                        <div className='gap_10'>
                            <div className="gap_5">
                                <AppColor.queue fill={AppColor.text} />
                                <Typography variant='body4'>20 queues</Typography>
                            </div>
                            <div className="gap_5">
                                <AppColor.heartEmpty />
                                <Typography variant='body4'>20 wishlists</Typography>
                            </div>
                            <div className="gap_5">
                                <AppColor.returnIcon />
                                <Typography variant='body4'>90% return</Typography>
                            </div>
                            
                        </div>
                }
            />
            <DynamicPadding />
            <FilterList
                filters={['Description', 'Freelancer', 'Reviews (25)', 'FAQ (2)']}
                activeStartItem='Freelancer'
            />

            <DynamicPadding />

            <ResponsiveLayoutTwo
                gap='60px'  
                item1MaxWidth='750px'
                item2MaxWidth='380xpx'
                item1={<div style={{width: '100%'}}>
                <div className={styles.time_box}>
                    <div className={styles.absolute_fire}>
                        <AppColor.fire/>
                    </div>
                    <div className='gap_10'>
                        <Typography variant='body4'>-20% sale for all packages till 13 Oct</Typography>
                        <div className={styles.dot_wrapper}>
                            <AppColor.threePoints/>
                        </div>
                    </div>
                </div>
            </div>}
                item2={
                <div style={{width: '100%'}}>
                    <div className={styles.time_box}>
                        <div className={styles.absolute_fire}>
                            <AppColor.fire/>
                        </div>
                        <div className='gap_10'>
                            <Typography variant='body4'>-20% sale for all packages till 13 Oct</Typography>
                            <div className={styles.dot_wrapper}>
                                <AppColor.threePoints/>
                            </div>
                        </div>

                        <SizeBox height='15px'/>
                        <div className='flex_space_between'>
                            <div style={{display: 'flex',alignItems: 'baseline'}}>
                                <Typography variant='body3' fontWeight='500'>131</Typography>
                                <Typography variant='body5' color={AppColor.transparentBlack}>of 4000</Typography>
                            </div>
                            <Typography variant='body3' color={AppColor.orange} fontWeight='500'>22%</Typography>
                        </div>
                        <SizeBox height='10px'/>
                        <PercentBar
                            currentPercent={35}
                            height='15px'
                        />
                        <DynamicPadding desktop='20px' mobile='15px'/>
                        <div className='justify_center'>
                            <DaysLeftTimer fontWeightTextTime='500' dotsHeight='5px' dotsWidth='5px' width='65px' height='65px' borderRadius='20px' time={(new Date())}/>
                        </div>
                        
                    </div>
                    <DynamicPadding />
                    
                </div>}
            />
        </div>
           
      </div>
    );
};

export default Service;