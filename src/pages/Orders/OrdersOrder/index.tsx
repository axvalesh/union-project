
import Header from '@common/components/Header/Header/index';
import NavigationBarDropdowns from '@common/components/NavigationBarDropdowns/index';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import PageDetails from '@common/components/ui/PageDetails/index';
import { developmentDropdown } from '@common/models/constants';
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import UserTopPageInfo from '@common/components/ui/UserTopPageInfo/index';
import Typography from '@common/components/ui/Typography/Typography';
import { fakeUserConstant } from '@common/models/user';
import FilterList from '@common/components/FilterList/index';
import LastSponsors from '@common/components/LastSponsors/index';
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index';
import TagsDisplay from '@common/components/TagsDisplay/index';
import { FreelancerCard } from '@pages/Partnership/pages/Program/index';
import ChevronMoveTo from '@common/components/ui/ChevronMoveTo/index';
import Dropdown from '@common/components/ui/Dropdown/index';
import SizeBox from '@common/components/ui/SizeBox/index';

const OrdersOrder = () => {
    const arrayHistory = ['Order', 'Development ', 'Web Development', 'WordPress'] 
    const title = 'Logo by sample in vector in maximum quality';
    return (
        <div>
        <Header />

        <NavigationBarDropdowns
                title="Order"
                navItems={developmentDropdown}
                titleIcon={<AppColor.goal />}
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
                                <AppColor.eye fill={AppColor.text} />
                                <Typography variant='body4'>20 views</Typography>
                            </div>
                            <div className="gap_5">
                                <AppColor.heartEmpty />
                                <Typography variant='body4'>20 wishlists</Typography>
                            </div>
                        
                            
                        </div>
                }
            />

            <DynamicPadding />

            <FilterList filters={['Description', 'Specification', 'Customer', 'FAQ (2)']} activeStartItem='Customer' />

            <DynamicPadding />


            <ResponsiveLayoutTwo
                gap='80px'
                item1MaxWidth='730px'
                item2MaxWidth='390px'
                item1={
                    <div style={{width: '100%'}}>
                         {/* <LastSponsors/> */}
                         <DynamicPadding />

                         <Typography variant='body3' fontWeight='500'>Description</Typography>
                         <DynamicPadding desktop='30px' mobile='20px'/>
                         <Typography variant='body4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, tristique enim, neque, mollis at. Quam scelerisque pulvinar pellentesque phasellus. Nisl id sit tincidunt ut. Egestas ullamcorper magna mi integer elementum dictum aenean in. Ultrices convallis in sit venenatis, ut nunc pellentesque. Eu lacus sapien et eu tortor cursus dolor.
Nunc nunc, consequat porttitor sed tortor. Tempus mi sit blandit nibh fusce morbi nullam. Nunc sagittis tortor, dictum lorem quis faucibus elit. Pretium fames leo ut eget augue velit eros, pellentesque. Non quis imperdiet dui praesent at massa. Bibendum commodo eros bibendum sit cras sit venenatis, vulputate a. Et aliquet eu et tristique nibh ultrices vel amet amet. Sit facilisi pretium ut placerat sem. Sit nunc integer velit facilisi adipiscing lectus arcu. Pellentesque sapien, arcu, nulla quis magnis praesent.</Typography>
                        <DynamicPadding desktop='30px' mobile='20px'/>

                        <Typography variant='body4' color={AppColor.transparentBlack} fontWeight='500'>Tags</Typography>

                        <TagsDisplay tags={['Logos', 'Logo Design', 'Logo']}/>

                        <DynamicPadding />
                        <Typography variant='body3' fontWeight='500'>Specification</Typography>
                        <DynamicPadding desktop='30px' mobile='20px'/>
                        <div className='gap_10'>
                            <AppColor.layers />
                            <div className={styles.flex_column}>
                                <div className="gap_5">
                                    <Typography variant='body4' fontWeight='500'>Minimal logo for website</Typography>
                                    <AppColor.earchSecondVariant />
                                </div>
                                <Typography variant='body5' color={AppColor.transparentBlack}>A. Markevych • 16 Oct 2023 13:15</Typography>
                            </div>
                        </div>

                        <DynamicPadding />
                        <FreelancerCard
                            disableFirstTwo={true}
                            type='Logo design'
                            links={['aCCOUNT', 'Stats', 'Reviews']}
                            user={fakeUserConstant} />

                    <DynamicPadding />
                    <div className={'gap_5'}>
                        <Typography variant='body3' fontWeight='500'>FAQ</Typography>
                        <div className={styles.box_black}>
                            <Typography variant='body3' color='white' fontWeight='500'>2</Typography>
                        </div>
                    </div>
                    <DynamicPadding desktop='30px' mobile='20px'/>

                    <Dropdown 
                        title="What if your requirements does not meet any of my package?                        "
                        description="In risus nec etiam nunc, leo velit. Turpis et diam cursus adipiscing dolor posuere. Velit elit metus tempus volutpat turpis iaculis tempor nam. Sapien felis at ipsum aliquet commodo. "
                    showLine={false}
                   />
                   <SizeBox height='15px'/>
                    <Dropdown 
                        title="What software do you use?                        "
                        description="In risus nec etiam nunc, leo velit. Turpis et diam cursus adipiscing dolor posuere. Velit elit metus tempus volutpat turpis iaculis tempor nam. Sapien felis at ipsum aliquet commodo. "
                        showLine={false}
                    />

                    <DynamicPadding />
                   <div className={'flex_space_between'}>
                        <ChevronMoveTo variant='left' onClick={() => {}} text='Step back' title='catalog' />
                        <ChevronMoveTo variant='right' onClick={() => {}} text='Next step' title='Selection' />
                   </div>
                    </div>
                }
                item2={
                    <div style={{width: '100%'}}>

                    </div>
                }
            />

        </div>
           
      </div>
    );
};

export default OrdersOrder;