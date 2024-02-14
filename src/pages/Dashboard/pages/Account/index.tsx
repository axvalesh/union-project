
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import styles from './style.module.scss';
import AppColor from '@common/styles/variables-static';
import Typography from '@common/components/ui/Typography/Typography';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';
import Header from '@common/components/Header/Header/index';
import NavigationBar from '@common/components/NavigationBar/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import { useScreenSize } from '@common/helpers/useScreenSize';
import { useState } from 'react';
import UserAvatar from '@common/components/ui/UserAvatar/index';
import PercentBar from '@common/components/ui/PercentBar/PercentBar';
import DropdownNode from '@common/components/ui/Dropdown/DropdownNodes/index';
import DropdownNodeFilter from '@common/components/ui/Dropdown/DropdownNodesFilter/index';
import AskedQuestion from '@common/components/AskedQuestions/index';
import Footer from '@common/components/Footer/Footer';
import DropdownNodeActivity from '@common/components/ui/Dropdown/DropdownNodes/variants/DropdownNodeActivity/index';
import { fakeUserConstant } from '@common/models/user';

const skillsContent:SkillsItemProps[] = [
    {
        icon: <AppColor.development />,
        title: 'Website Development1',
        skills: ['Wordpress', 'Wix']
    },
    {
        icon: <AppColor.development />,
        title: 'Website Development2',
        skills: ['Wordpress', 'Wix']
    },
    {
        icon: <AppColor.development />,
        title: 'Website Development3',
        skills: ['Wordpress', 'Wix']
    },
    {
        icon: <AppColor.development />,
        title: 'Website Development4',
        skills: ['Wordpress', 'Wix']
    },
    {
        icon: <AppColor.development />,
        title: 'Website Development5',
        skills: ['Wordpress', 'Wix']
    },
]
const activityItems = [
    {
      filter: 'Service',
      image: <AppColor.freelancer />,
      percent: 39,
      present: '16 Oct - Present',
      price: '100',
      tag: ['Logo Design', 'A. Markevych'],
      title: 'Logo by sample in vector in maximum quality ',
      iconNode: (
        <div>
          <AppColor.cart height={22} fill={AppColor.text} />
          <AppColor.flag height={22} />
        </div>
      ),
    },
    {
        filter: 'Service',
        image: <AppColor.freelancer />,
        percent: 39,
        present: '16 Oct - Present',
        price: '100',
        tag: ['Logo Design', 'A. Markevych'],
        title: 'Logo by sample in vector in maximum quality ',
        iconNode: (
          <div>
            <AppColor.cart height={22} fill={AppColor.text} />
            <AppColor.flag height={22} />
          </div>
        ),
      },
      {
        filter: 'Service',
        image: <AppColor.freelancer />,
        percent: 39,
        present: '16 Oct - Present',
        price: '100',
        tag: ['Logo Design', 'A. Markevych'],
        title: 'Logo by sample in vector in maximum quality ',
        iconNode: (
          <div>
            <AppColor.cart height={22} fill={AppColor.text} />
            <AppColor.flag height={22} />
          </div>
        ),
      },
      {
        filter: 'Service',
        image: <AppColor.freelancer />,
        percent: 39,
        present: '16 Oct - Present',
        price: '100',
        tag: ['Logo Design', 'A. Markevych'],
        title: 'Logo by sample in vector in maximum quality ',
        iconNode: (
          <div>
            <AppColor.cart height={22} fill={AppColor.text} />
            <AppColor.flag height={22} />
          </div>
        ),
      },
  ];

const tagsText:string[] = [
    'Logos','Logo Design','Logo','Logo Maker','Modern Logo '
]
const statistic:StatisticTextProps[] = [
    {
        title: 'Total Projects',
        text: '352'
    },
    {
        title: 'Total Projects',
        text: '352'
    },
    {
        title: 'Total Projects',
        text: '352'
    },
    {
        title: 'Total Projects',
        text: '352'
    },
    {
        title: 'Total Projects',
        text: '352'
    },
    {
        title: 'Total Projects',
        text: '352'
    },
    {
        title: 'Total Projects',
        text: '352'
    },
    {
        title: 'Total Projects',
        text: '352'
    },
    {
        title: 'Total Projects',
        text: '352'
    },
    {
        title: 'Total Projects',
        text: '352'
    },
]
const Account = () => {

    const {width,height} = useScreenSize();
    console.log(width);
    return (
      <div>
            <Header />
            <NavigationBar
                currentCategoryTitle="Dashboard"
                activePageIndex={1}
            />
          <div className={styles.wrapper}>
            <DynamicPadding 
                desktop='50px'
                mobile='30px'
            />
               <div className={styles.top_section}>
                    <div className={styles.top_flex}>
                        <NavigationItem image={<AppColor.home />} textList={['Dashboard']} />
                        <Typography variant='titleBig' textTransform='uppercase' fontWeight='600'>
                            <div className={styles.flex_center}>Account <AppColor.openEye /></div>
                        </Typography>
                    </div>
                    <MyButtonTransparentOrange onClick={() => {}} fontWeight='500'>
                        PROJECTS <AppColor.chevronBottom fill={AppColor.orange} width={14} height={10} />
                    </MyButtonTransparentOrange>
                </div>
                <DynamicPadding />
                <div className={styles.after_top_section}>
                    {
                    width > 769
                    ? skillsContent.map(item =>
                        <SkillsItem 
                            icon={item.icon}
                            skills={item.skills}
                            title={item.title}
                        />
                    )
                    : <DropdownSkills />}
                </div>
                <DynamicPadding />

                <div className={styles.main_section}>
                    <div className={styles.main_left}>
                        <UserAvatar url={fakeUserConstant.image} active={true} name='Adrew B.' variant='column' flag={<AppColor.UkraineFlag />}/>
                       <div className={styles.profile_level_wrapper}>
                            <div className={styles.profile_top_level}>
                                <AppColor.twoOFFive />
                                <Typography variant='body4' color={AppColor.transparentBlack}>
                                3 lvl 
                                </Typography>
                                <div className={styles.margin_left}>
                                    <Typography variant='body4' color={AppColor.green}>
                                    Junior 
                                    </Typography>
                                </div>
                            </div>
                            <PercentBar currentPercent={22} backgroundColor={AppColor.white} color={AppColor.orange}/>
                            <div className={styles.profile_bottom_level}>
                                <Typography variant='subtitle' textLineHeight='80%'>
                                  <div className={styles.text_flex}>  31 <Typography textLineHeight='80%' variant='body4' color={AppColor.transparentBlack}>of 150 XP</Typography></div>
                                </Typography>
                                <Typography color={AppColor.orange} variant='body4'>
                                22%
                                </Typography>
                            </div>
                       </div>
                       <DynamicPadding mobile='20px' desktop='30px' />
                       <div className={styles.horizontal_line}></div>
                       <DynamicPadding mobile='20px' desktop='30px' />
                       <div className={styles.user_details_wrapper}>
                           <DetailInfo details='Dnipro, Ukraine ' title='From'/> 
                           <DetailInfo details='23:51' title='Local time'/> 
                           <DetailInfo details='Aug 2021' title='Member since'/> 
                           <DetailInfo details='Avg 2 hours' title='Response time'/> 
                           <DetailInfo details='1 hour ago' title='Last visit'/> 
                       </div>
                       <DynamicPadding mobile='20px' desktop='30px' />
                       <div className={styles.horizontal_line}></div>
                       <DynamicPadding mobile='20px' desktop='30px' />
                       <div>
                            <Typography variant='body2' fontWeight='500'>
                                Skills
                            </Typography>
                            <div className={styles.tags_wrapper}>
                                {tagsText.map(item => <TagDisplay text={item} />)}
                            </div>
                       </div>
                       <DynamicPadding mobile='20px' desktop='30px' />
                       <div className={styles.horizontal_line}></div>
                       <DynamicPadding mobile='20px' desktop='30px' />
                       <div>
                        <Typography variant='body2' fontWeight='500'>
                        <div className={styles.text_flex_gap}> Languages <AppColor.noteText /> </div>
                                </Typography>
                                <DynamicPadding mobile='30px' desktop='30px' />
                                <div className={styles.user_details_wrapper}>
                                    <DetailInfo details='Fluent' title='English'/> 
                                    <DetailInfo details='Native/Bilingual' title='Russian'/> 
                                </div>
                       </div>
                       <DynamicPadding mobile='20px' desktop='30px' />
                       <div className={styles.horizontal_line}></div>
                       <DynamicPadding mobile='20px' desktop='30px' />

                       <div>
                                <Typography variant='body2' fontWeight='500'>
                                    <div className={styles.text_flex_gap}> Education <AppColor.noteText /> </div>
                                </Typography>
                                <DynamicPadding mobile='30px' desktop='30px' />
                                <div>
                                    <Typography variant='body4' fontWeight='500'>
                                    Ukranian National Technical University
                                    </Typography>
                                    <DynamicPadding mobile='10px' desktop='10px' />
                                    <Typography variant='body4' fontWeight='400' color={AppColor.transparentBlack}>
                                    M.A. Degree. Ecommerce
                                    </Typography>
                                    <Typography variant='body4' fontWeight='400' color={AppColor.transparentBlack}>
                                    Graduated 2017
                                    </Typography>
                                </div>
                       </div>

                       <DynamicPadding mobile='20px' desktop='30px' />
                       <div className={styles.horizontal_line}></div>
                       <DynamicPadding mobile='20px' desktop='30px' />

                       <div>
                                <Typography variant='body2' fontWeight='500'>
                                    <div className={styles.text_flex_gap}> Certifications <AppColor.noteText /> </div>
                                </Typography>
                                <div>
                                    <Typography variant='body4' fontWeight='500'>
                                    UX mind School Certificate
                                    </Typography>
                                    <DynamicPadding mobile='10px' desktop='10px' />
                                    <Typography variant='body4' fontWeight='400' color={AppColor.transparentBlack}>
                                    Graduated 2017
                                    </Typography>
                                </div>
                       </div>

                       <DynamicPadding mobile='20px' desktop='30px' />
                       <div className={styles.horizontal_line}></div>
                       <DynamicPadding mobile='20px' desktop='30px' />
                        
                        <div>
                                 <Typography variant='body2' fontWeight='500'>
                                    <div className={styles.text_flex_gap}> Last sponsors <div className={styles.info_box}><AppColor.info /></div> </div>
                                </Typography>

                                <div className={styles.users_wrapper}>
                                    <UserAvatar variant='money' active={true} name='Artem M.' flag={<AppColor.UkraineFlag/>} money='4 305' />
                                    <UserAvatar variant='money' active={true} name='Artem M.' flag={<AppColor.UkraineFlag/>} money='4 305' />
                                    <UserAvatar variant='money' active={true} name='Artem M.' flag={<AppColor.UkraineFlag/>} money='4 305' />
                                    <UserAvatar variant='money' active={true} name='Artem M.' flag={<AppColor.UkraineFlag/>} money='4 305' />
                                    <UserAvatar variant='money' active={true} name='Artem M.' flag={<AppColor.UkraineFlag/>} money='4 305' />
                                    <UserAvatar variant='money' active={true} name='Artem M.' flag={<AppColor.UkraineFlag/>} money='4 305' />
                                </div>
                        </div>

                    </div>
                    <div className={styles.main_right}>
                        <DynamicPadding desktop='0px' mobile='20px'/>
                        <ContentShell 
                            title={
                                <Typography variant='body2' fontWeight='500'>
                                    <div className={styles.text_flex_gap}> Description <div className={styles.info_box}><AppColor.noteText /></div> </div>
                                </Typography>
                            }
                        />
                        <ContentShell 
                            title={
                                <Typography variant='body2' fontWeight='500'>
                                     Statistics 
                                </Typography>
                            }
                            node={
                                <div className={styles.statistic_text_wrapper}>
                                    {statistic.map(item =>
                                        <StatisticText text={item.text} title={item.title} />
                                    )}
                                </div>
                            }
                        />
                        <DropdownNodeFilter
                            countNotifications={5}
                            filters={[]}
                            title='Reviews'
                            textAfterCount={<Typography textLineHeight='80%' variant='body4' color={AppColor.green}>95% positive reviews </Typography>}
                        />
                         <DropdownNodeActivity filters={['All', 'Service', 'Sponsorship']} countNotification={activityItems.length} activityItems={activityItems} />;
                    </div>
                </div>

                <DynamicPadding />
                <AskedQuestion />
          </div>
        <Footer />
      </div>
    );
};


type StatisticTextProps = {
    title: string;
    text: string;
}
const  StatisticText = ({text,title}:StatisticTextProps) => {
    return ( 
        <div className={styles.statistic_text}>
            <Typography variant='body5' color={AppColor.transparentBlack}>
                {title}
            </Typography>
            <Typography variant='body1' fontWeight='500'>
                {text}
            </Typography>
        </div>
    )
}
type ContentShellProps = {
    node?: React.ReactNode;
    title: React.ReactNode;
}
const ContentShell = ({node,title}:ContentShellProps) => {
    return (
        <div className={styles.content_shell_wrapper}>
            <div className={styles.content_shell_top}>
                {title}
            </div>
            <div className={styles.horizontal_line}></div>
            <div className={styles.content_shell_bottom}>
                {node != null ?
                node : <Typography variant='body4' color={AppColor.transparentBlack}>No info</Typography>}
            </div>
        </div>
    )
}
const TagDisplay = ({ text }: { text: string }) => {
    return (
        <span className={styles.tag}>
            <Typography textLineHeight={'100%'} variant="body5" fontWeight='500' color={AppColor.white}>
                {text}
            </Typography>
        </span>
    );
};
type DetailInfoProps = {
    title:string;
    details: string;
}
const DetailInfo = ({details,title}:DetailInfoProps) => {
    return (
        <div className={styles.details_info}>
            <Typography variant='body4' color={AppColor.transparentBlack} textLineHeight='60%'>{title}</Typography>
            <Typography variant='body4'  textLineHeight='60%' fontWeight='500'>{details}</Typography>
        </div>
    )
}
const DropdownSkills = () => {
    const [activeIndex,setActiveIndex] = useState(0);
    const [showDropdown,setShowDropdown] = useState(false);
    const currentItem = skillsContent[activeIndex];
    return (
        <div className={styles.dropdown_skills_wrapper}>
            <span onClick={() => { setShowDropdown(prev => !prev)}}><SkillsItem icon={currentItem.icon} skills={currentItem.skills} title={currentItem.title} showDropdown={true} /></span>
            <div className={`${styles.dropdown_wrapper} ${showDropdown ? styles.active_d : styles.disabled_d}`}>
                {skillsContent.map((item,index) =>
                    {
                        if(index != activeIndex) {
                            return <span onClick={() => { setActiveIndex(index) }}>
                                <SkillsItem
                                icon={item.icon}
                                skills={item.skills}
                                title={item.title}
                            />
                            </span>
                        } else {
                            return <></>
                        }
                    }
                )}
            </div>
        </div>
    )
}
type SkillsItemProps = {
    title: string;
    icon: any;
    skills: string[]
    showDropdown?: boolean;
}
const SkillsItem = ({icon,skills,title,showDropdown=false}:SkillsItemProps) => {
    return (
        <div className={styles.skills_wrapper}>
            {icon}
            <div>
                <Typography variant='body5' fontWeight='500'>{title}</Typography>
                <Typography variant='body5'>
                    {skills.map((item,index) => {
                        if(index != skills.length -1) {
                            return `${item},`
                        } else {
                            return `${item}, other`
                        }
                    }
                    )}
                </Typography>
            </div>
            {showDropdown
            ? <div className={styles.skills_chevron}><AppColor.chevronBottom fill={AppColor.text} /></div>
            : <></>}
        </div>
    )
}
export default Account;