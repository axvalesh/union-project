
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


const Upgrades = () => {

    const {width,height} = useScreenSize();
    console.log(width);
    return (
      <div>
            <Header />
            <NavigationBar
                currentCategoryTitle="Dashboard"
                activePageIndex={4}
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
                           upgrades 
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
                    <div className={styles.main_section_left}>
                        <div className={styles.left_first}>
                            <div className={styles.flex}>
                                <div className={styles.black_circle}><AppColor.zeroOfFive /></div>
                                <div>
                                    <Typography variant='body5' color={AppColor.transparentBlack}>
                                    Level & Skill
                                    </Typography>
                                    <Typography variant='body4' fontWeight='500'>
                                    5 lvl <Typography color={AppColor.whiteGreen }> Beginner</Typography>
                                    </Typography>
                                </div>
                            </div>
                            <div className={styles.flex}>
                                <div className={styles.orange_circle}><AppColor.star /></div>
                               <div>
                                    <Typography variant='body5' color={AppColor.transparentBlack}>
                                    Level Points
                                    </Typography>
                                    <Typography variant='body4' fontWeight='500'>
                                    0 
                                    </Typography>
                               </div>
                            </div>
                        </div>

                        <DynamicPadding desktop='70px' mobile='30px' />
                        
                    </div>
                    <div className={styles.main_section_right}></div>
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
export default Upgrades;