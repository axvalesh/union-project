
import NavigationBarDropdowns from '@common/components/NavigationBarDropdowns/index';
import styles from './style.module.scss';
import { developmentDropdown } from '@common/models/constants';
import Header from '@common/components/Header/Header/index';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import PageDetails from '@common/components/ui/PageDetails/index';
import AppColor from '@common/styles/variables-static';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import UserTopPageInfo from '@common/components/ui/UserTopPageInfo/index';
import { fakeUserConstant, userModel } from '@common/models/user';
import Typography from '@common/components/ui/Typography/Typography';
import FilterList from '@common/components/FilterList/index';
import TagsDisplay from '@common/components/TagsDisplay/index';
import SizeBox from '@common/components/ui/SizeBox/index';
import { useState } from 'react';
import TextDotted from '@common/components/ui/TextDotted/index';
import fakeUserImage from '@assets/images/user-fake.png';
import CardTypeDisplay from '@common/components/cards/CardTypeDisplay/CardTypeDisplay';

const Program = () => {

    const title = 'Artem Markevych WordPress Partnership'
    const arrayHistory = ['Partnership', 'Development', 'Web Development', 'WordPress']
    return (
        <div>
        <Header />

        <NavigationBarDropdowns
            title="partnership"
            navItems={developmentDropdown}
            titleIcon={<AppColor.partnership />}
        />

        <div className={styles.wrapper}>
            <PageDetails
                historyNode={
                    <NavigationItem
                        image={<AppColor.home />}
                        textList={arrayHistory}
                    />
                }
                endNode={
                    <div className={styles.details_end_node}>
                        <MyButtonTransparentOrange
                            fontWeight="500"
                            textTransform="uppercase"
                            onClick={() => {}}>
                            my programs
                            <AppColor.chevronBottom
                                fill={AppColor.orange}
                            />
                        </MyButtonTransparentOrange>
                    </div>
                }
                pageTitle={title}
            />

            <DynamicPadding desktop='30px' mobile='20px'/>
            <UserTopPageInfo user={fakeUserConstant}
                nodeAfter={
                    <div className={styles.node_after_passed_top}>
                       <div>
                            <AppColor.clicks/>
                            <Typography variant='body4'>20 clicks</Typography>
                       </div>
                        <div>
                            <AppColor.leads/>
                            <Typography variant='body4'>20 leads</Typography>
                        </div>
                        <div>
                            <AppColor.sales/>
                            <Typography variant='body4'>20 sales</Typography>
                        </div>
                       <div>
                            <AppColor.refreshA/>
                       </div>
                    </div>
                }
            />

            <DynamicPadding />

            <FilterList
                filters={['Description', 'Rates', 'Tools', 'Freelancer', 'Reviews (25)', 'FAQ (2)']}
            />
             <DynamicPadding />

             <div className={styles.main_part}>
                <div className={styles.left_part}>
                    <Typography variant='body3'>Description</Typography>

                    <DynamicPadding desktop='35px' mobile='15px'/>
                    <Typography variant='body4'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, tristique enim, neque, mollis at. Quam scelerisque pulvinar pellentesque phasellus. Nisl id sit tincidunt ut. Egestas ullamcorper magna mi integer elementum dictum aenean in. Ultrices convallis in sit venenatis, ut nunc pellentesque. Eu lacus sapien et eu tortor cursus dolor.
Nunc nunc, consequat porttitor sed tortor. Tempus mi sit blandit nibh fusce morbi nullam. Nunc sagittis tortor, dictum lorem quis faucibus elit. Pretium fames leo ut eget augue velit eros, pellentesque. Non quis imperdiet dui praesent at massa. Bibendum commodo eros bibendum sit cras sit venenatis, vulputate a. Et aliquet eu et tristique nibh ultrices vel amet amet. Sit facilisi pretium ut placerat sem. Sit nunc integer velit facilisi adipiscing lectus arcu. Pellentesque sapien, arcu, nulla quis magnis praesent.
                    </Typography>

                    <DynamicPadding desktop='20px' mobile='20px'/>
                    <Typography variant='body4' fontWeight='500' color={AppColor.transparentBlack}>Tags</Typography>
                    <SizeBox height='10px'/>
                    <TagsDisplay
                        tags={['Logos', 'Logo Design', 'Logo']}
                    />
                    <DynamicPadding />
                    <ConditionSection />
                    <DynamicPadding />
                    <Typography variant='body3' fontWeight='500'>Tools</Typography>

                    <DynamicPadding desktop='40px' mobile='30px'/>
                    <div className={styles.tools_wrapper_section}>
                        <ToolsItem
                            icon={<AppColor.deeplink/>}
                            title='Deeplink'
                            text='Sale Links'
                        />
                          <ToolsItem
                            icon={<AppColor.banners/>}
                            title='Banners'
                            text='Advertising Images'
                        />
                    </div>

                    <DynamicPadding />
                    <Typography variant='body3' fontWeight='500'>Freelancer</Typography>

                    <DynamicPadding desktop='40px' mobile='30px'/>
                    <FreelancerCard user={fakeUserConstant} />

                </div>
                <div className={styles.right_part}>

                </div>
             </div>
        </div>
           
      </div>
    );
};

type ToolsItemProps = {
    icon: any;
    title: string;
    text: string;
}
type FreelancerCardProps = {
    user: userModel;
}
const FreelancerCard = ({user}: FreelancerCardProps) => {
    return (
       <div style={{position: 'relative'}}>
         <span className={styles.shell_absolute}>
                    <CardTypeDisplay
                        textColor={AppColor.white}
                        text="Business"
                        backgroundColor={AppColor.text}
                    />
                </span>
    
                <div className={styles.shell_absolute_right}>
                    <div className={styles.absolute_black}>
                        <AppColor.checkedFile width={'13px'}/>
                    </div>
                    <div className={styles.absolute_black}>
                        <AppColor.subscriptionsWhite width={'13px'}/>
                    </div>
                    <div className={styles.absolute_black}>
                        <AppColor.completed width={'13px'}/>
                    </div>
                </div>
            <div className={styles.freelance_card_wrapper}>
                <div className={styles.freelance_card_content}>
                  <div style={{position: 'relative',height: 'fit-content'}}>
                        <div className={styles.active_status}></div>
                        <img src={user.image} alt="" />
                  </div>
                    <div>
                        <div style={{display:'flex',alignItems:'center',gap:'10px',flexWrap: 'wrap'}}>
                            <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
                                <AppColor.UkraineFlag />
                                <Typography variant='body4'>{user.name}</Typography>
                            </div>
                            <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
                                <AppColor.starFilled fill={AppColor.green} />
                                <Typography variant='body4'>95%</Typography>
                            </div>
                            <div style={{display:'flex',alignItems:'center',gap:'5px'}}>
                                <AppColor.fiveOfFive />
                                <Typography variant='body4'>{user.lvl} lvl</Typography>
                                <Typography variant='body4' color={AppColor.red}>Lead</Typography>
                            </div>
                        </div>
                        <DynamicPadding desktop='20px' mobile='15px'/>
                        <div className={styles.freelancer_links}>
                            <Typography textTransform='uppercase' color={AppColor.transparentBlack} variant='body5' fontWeight='500'>ACCOUNT</Typography>
                            <Typography textTransform='uppercase' color={AppColor.transparentBlack} variant='body5' fontWeight='500'>Stats</Typography>
                            <Typography textTransform='uppercase' color={AppColor.transparentBlack} variant='body5' fontWeight='500'>services</Typography>
                            <Typography textTransform='uppercase' color={AppColor.transparentBlack} variant='body5' fontWeight='500'>portfolio</Typography>
                            <Typography textTransform='uppercase' color={AppColor.transparentBlack} variant='body5' fontWeight='500'>Reviews</Typography>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
}
const ToolsItem = ({icon,text,title}:ToolsItemProps) => {
    return (
        <div className={styles.tools_wrapper}>
            {icon}
            <SizeBox height='15px'/>
            <Typography textLineHeight='1' variant='body3' fontWeight='500'>{title}</Typography>
            <SizeBox height='15px'/>
            <Typography textLineHeight='1' variant='body5' fontWeight='500' textTransform='uppercase'>{text}</Typography>
        </div>
    )
}
const ConditionSection = () => {

    const [activeItem,setActiveItem] = useState<"Services" | "Orders" | "Subscriptions">("Services");
    return (
        <div>
            <div>
                <Typography variant='body3' fontWeight='500'>Conditions</Typography>
                <div className={styles.condition_buttons}>
                    <div style={activeItem == "Services" ? {border: `1px solid ${AppColor.orange}`} : {}} className={styles.condition_swith_buttton} onClick={() => {setActiveItem('Services')}}> 
                        <Typography color={activeItem == 'Services' ? AppColor.orange : AppColor.text} variant='body4'>Services</Typography>
                    </div>
                    <div style={activeItem == "Orders" ? {border: `1px solid ${AppColor.orange}`} : {}} className={styles.condition_swith_buttton} onClick={() => {setActiveItem('Orders')}}> 
                        <Typography color={activeItem == 'Orders' ? AppColor.orange : AppColor.text} variant='body4'>Orders</Typography>
                    </div>
                    <div style={activeItem == "Subscriptions" ? {border: `1px solid ${AppColor.orange}`} : {}} className={styles.condition_swith_buttton} onClick={() => {setActiveItem('Subscriptions')}}> 
                        <Typography color={activeItem == 'Subscriptions' ? AppColor.orange : AppColor.text} variant='body4'>Subscriptions</Typography>
                    </div>
                </div>
            </div>
            <SizeBox height='20px'/>

            <div>
                {
                    activeItem == 'Services' &&
                    <div className={styles.condition_values_wrapper}>
                        <TextDotted text='Services Referral Rate' textEnd={'15%'}/>
                        <TextDotted text='Services Manager Rate' textEnd={'15%'}/>
                        <TextDotted text='Access to chat with customers' endNode={<AppColor.singTrue  width={'11px'} stroke={AppColor.green} height={'9px'}/>}/>
                        <TextDotted text=' Access to “Selection” stage' endNode={<AppColor.singTrue  width={'11px'} stroke={AppColor.green} height={'9px'}/>}/>
                        <TextDotted text='Access to “Negotiation” stage' endNode={<AppColor.singTrue  width={'11px'} stroke={AppColor.green} height={'9px'}/>}/>
                        <TextDotted text='Access to “Progress” stage' endNode={<AppColor.singTrue  width={'11px'} stroke={AppColor.green} height={'9px'}/>}/>
                        <TextDotted text=' Access to “Completed” stage' endNode={<AppColor.singTrue  width={'11px'} stroke={AppColor.green} height={'9px'}/>}/>
                    </div>
                }
                {
                    activeItem == 'Orders' &&
                    <div className={styles.condition_values_wrapper}>
                        <TextDotted text='Orders Referral Rate' textEnd={'15%'}/>
                        <TextDotted text='Orders Manager Rate' textEnd={'15%'}/>
                        <TextDotted text='Access to chat with customers' endNode={<AppColor.singTrue  width={'11px'} stroke={AppColor.green} height={'9px'}/>}/>
                        <TextDotted text=' Access to “Selection” stage' endNode={<AppColor.singTrue  width={'11px'} stroke={AppColor.green} height={'9px'}/>}/>
                        <TextDotted text='Access to “Negotiation” stage' endNode={<AppColor.singTrue  width={'11px'} stroke={AppColor.green} height={'9px'}/>}/>
                        <TextDotted text='Access to “Progress” stage' endNode={<AppColor.singTrue  width={'11px'} stroke={AppColor.green} height={'9px'}/>}/>
                        <TextDotted text=' Access to “Completed” stage' endNode={<AppColor.singTrue  width={'11px'} stroke={AppColor.green} height={'9px'}/>}/>
                    </div>
                }
                {
                    activeItem == 'Subscriptions' &&
                    <div className={styles.condition_values_wrapper}>
                        <TextDotted text='Subscriptions Referral Rate' textEnd={'15%'}/>
                       
                    </div>
                }
            </div>
        </div>
    )
}



export default Program;