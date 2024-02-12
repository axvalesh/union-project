
import Header from '@common/components/Header/Header/index';
import styles from './style.module.scss';
import NavigationBarDropdowns from '@common/components/NavigationBarDropdowns/index';
import AppColor from '@common/styles/variables-static';
import { developmentDropdown } from '@common/models/constants';
import PageDetails from '@common/components/ui/PageDetails/index';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';
import UserTopPageInfo from '@common/components/ui/UserTopPageInfo/index';
import { fakeUserConstant } from '@common/models/user';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import Typography from '@common/components/ui/Typography/Typography';
import MyButtonTransparentBlack from '@common/components/ui/MyButton/variants/MyButtonTransparentBlack';
import NavBarLineBlack from '@common/components/ui/NavBarLineBlack/index';
import { useEffect, useState } from 'react';
import { useScreenSize } from '@common/helpers/useScreenSize';
import CardStatisticsParthnershipConstant from '@common/components/cards/CardStatiscticsPartnership/variants/CardStatisticsParthnershipConstant/CardStatisticTest';
import InputCommon from '@common/components/ui/inputs/InputCommon/index';
import NavigationBarSelection from '@common/components/NavigationBarSelection/index';
import CardManager from '@common/components/cards/CardStatiscticsPartnership/variants/CardManager/index';
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';

const SelectionFreelancer = () => {
    const { width, height } = useScreenSize()
    const arrayHistory = ['Partnership', 'Development', 'Web Development', 'WordPress'] 
    const title = 'Artem Markevych WordPress Partnership';
    const [activeSelection,setActiveSelection] = useState('New');
    const [itemsToshow, setItemsToShow] = useState([])

    useEffect(() => {
        const arrayLengthStart = width <= 768 ? 4 : 9

        setItemsToShow(
            Array.from(
                { length: arrayLengthStart },
                (a, index) => index
            )
        )
    }, [width])
    return (
        <div>
        <Header />

        <NavigationBarSelection
           allItemsProgress={['Program', 'Selection', 'Progress', 'Completed']}
           currentItemProgress='Selection'
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
                            <AppColor.refreshA/>
                }
            />

            <DynamicPadding />

                <div className={styles.main_part}>
                    <div className={styles.left_part}>
                        <InputCommon
                            placeholder='Search'
                            callback={() => {}}
                        />  
                        <DynamicPadding />

                        <div className={styles.selection_wrapper}>
                            <SelectionItem
                                icon={<AppColor.newIcon width={'34px'} />}
                                text='New'
                                count='4'
                                color={AppColor.text}
                                onClick={(item) => {setActiveSelection(item)}}
                                activeItem={activeSelection}
                            />
                             <SelectionItem
                                icon={<AppColor.shortlisted width={'34px'} />}
                                text='Shortlisted'
                                count='4'
                                color={AppColor.orange}
                                onClick={(item) => {setActiveSelection(item)}}
                                activeItem={activeSelection}
                            />
                             <SelectionItem
                                icon={<AppColor.close width={'34px'} height={'32px'} fill={AppColor.red} />}
                                text='Cancelled'
                                count='0'
                                color={AppColor.red}
                                onClick={(item) => {setActiveSelection(item)}}
                                activeItem={activeSelection}
                            />

                            {width > 768 && 
                            <div>
                                <DynamicPadding desktop='10px' mobile='0px'/>
                                <HorizontalLine />
                                <DynamicPadding desktop='10px' mobile='0px'/>
                            </div>
                            }
                             <SelectionItem
                                icon={<AppColor.hired width={'34px'} />}
                                text='Hired'
                                count='4'
                                color={AppColor.green}
                                onClick={(item) => {setActiveSelection(item)}}
                                activeItem={activeSelection}
                            />
                        </div>
                    </div>
                    <div className={styles.right_part}>
                        <div className={styles.justify_flex}>
                            <Typography variant="body4">
                            4 {activeSelection.toLowerCase() } managers
                            </Typography>
                            <div className={styles.flex_center}>
                                <div className={styles.gap_5}>
                                    <AppColor.filter />
                                    <Typography
                                        variant="body4"
                                        fontWeight="500"
                                        color={
                                            AppColor.transparentBlack
                                        }
                                        textTransform="uppercase">
                                        Filters
                                    </Typography>
                                </div>
                                <div className={styles.gap_5}>
                                    <AppColor.recent />
                                    <Typography
                                        variant="body4"
                                        fontWeight="500"
                                        color={
                                            AppColor.transparentBlack
                                        }
                                        textTransform="uppercase">
                                        Most recent
                                    </Typography>
                                </div>
                               <div className={styles.gap_5}> <Typography
                                        variant="body4"
                                        fontWeight="500"
                                        color={
                                            AppColor.transparentBlack
                                        }
                                        textTransform="uppercase">
                                        3
                                    </Typography> <AppColor.chevronBottom fill={AppColor.text}/></div>
                            </div>
                        </div>
                        <DynamicPadding />

                        <div className={styles.cards_wrapper}>
                            {itemsToshow.map((item,index) => (
                               <div className={styles.center_card}>
                                    <CardManager
                                    showCardManagerActions={true}
                                    position={
                                        width < 769 ? 'center' :
                                        index % 3 === 0 ? 'left' : index % 3 === 1 ? 'center' : 'right'
                                    }
                                        tags={['Logo', 'Logo Design', 'Logo Maker', 'Logo Create']}
                                        programs={<Typography variant='body5' fontWeight='500'>3</Typography>}
                                        sales={<Typography variant='body5' fontWeight='500'>450</Typography>}
                                        leads={<Typography variant='body5' fontWeight='500'>918</Typography>}
                                        earned={<Typography variant='body5' fontWeight='500'>$45K</Typography>}
                                        title=''
                                        user={fakeUserConstant}
                                    />
                               </div>
                            ))}
                        </div>
                        <DynamicPadding
                            desktop="40px"
                            mobile="20px"
                        />
                        <div className={styles.justify_center}>
                            <MyButtonTransparentBlack
                                onClick={() => {
                                    setItemsToShow((prev) => [
                                        ...prev,
                                        1,
                                        2,
                                        3,
                                    ])
                                }}>
                                Show more +3
                            </MyButtonTransparentBlack>
                        </div>
                        <DynamicPadding
                            desktop="40px"
                            mobile="20px"
                        />
                        <div className={styles.justify_center}>
                            <NavBarLineBlack
                                callback={() => {}}
                                maxCountPage={100}
                            />
                        </div>
                        <DynamicPadding />
                    </div>
                </div>

        </div>
      </div>
    );
};


type SelectionItemProps = {
    icon: any;
    text: string;
    count: string;
    color: string;
    onClick: (item:string) => void;
    activeItem: string;
}
export const SelectionItem = ({icon,text,color,count,onClick,activeItem   }:SelectionItemProps) => {
    return (
        <div style={{backgroundColor: activeItem == text ? AppColor.white : 'white',opacity: parseInt(count) != 0 ? 1 : 0.35}} onClick={() => {onClick(text)}} className={styles.selection_item}>
            {icon}
            <div style={{display: 'flex',alignItems: 'center'}}>
                <Typography variant='body4' color={color} fontWeight='500'>{text}</Typography>
                <Typography variant='body4'>({count})</Typography>
            </div>
        </div>
    )
}

export default SelectionFreelancer;