
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';
import Typography from '@common/components/ui/Typography/Typography';
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import React, { useEffect, useState } from 'react';
import { fakeUserConstant } from '@common/models/user';
import MainCare from './components/MainCare';
import CommunityCare from './components/CommunityCare';
import ManagerCare from './components/ManagerCare';
import ManagerChat from './components/ManagerChat';
import UserAvatar from '@common/components/ui/UserAvatar/index';
import PopUpBottom from '@common/components/ModalPopUps/PopUpBottom/index';
import { ThreeLinesPopUpCustom } from '@common/components/ui/ThreeLinesPopUp/index';
import GeneralHelpCreate from './components/GeneralHelp';
import GeneralHelp from './components/GeneralHelpItem/GeneralHelp';
import GeneralChat from './components/GeneralChat';
import SizeBox from '@common/components/ui/SizeBox/index';
import GeneralDetails from './components/GeneralDetails';
import GeneralUser from './components/GeneralUser';
import ContactUsSteps from '@common/components/ui/ContactUsSteps/index';
import CareSolutions from './components/Solutions';
import SolutionDetails from './components/SolutionDetails';


type CareComponentProps = {
    showHelper: boolean;
    callback: (showHelper: boolean) => void;
}

function eachNewLetterToUpper(str: string):string {
    return (str.split(' ') ?? []).map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
}

export const CareComponent = ({showHelper,callback}:CareComponentProps) => { 
    const [activeSwitch, setActiveSwitch] = useState('main');


    function moveBack() {
        const tmpArray = activeSwitch.split('.');
        if(tmpArray.length > 1) {
            setActiveSwitch(tmpArray.slice(0, tmpArray.length - 1).join('.'));
        } else {
            setActiveSwitch('main');
        }
    }

    const lastTextItem = activeSwitch.split(' ')[activeSwitch.split(' ').length - 1]
    const lastItem = activeSwitch.split('.')[activeSwitch.split('.').length - 1].split(' ');
    
    
    return (
        <div style={{opacity: showHelper ? '1' : '0'}} className={styles.helper}>
            <div className={styles.helper_padding}>
                <div style={{whiteSpace: 'nowrap'}} className='flex_space_between'>
                    <div className='gap_15'>
                        {
                            activeSwitch != 'main' && <div onClick={moveBack} className='cursor'>
                                <AppColor.longChevronLeft fill={AppColor.text} />
                            </div>
                        }

                        {
                            lastTextItem == 'showuser'
                            ?  <UserAvatar url={fakeUserConstant.image} active={true} name={fakeUserConstant.name} role='Customer' />
                        
                            : lastTextItem == 'showhelp' ?
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
                            :
                            <Typography variant='body3' fontWeight='500'>
                            {
                                activeSwitch == 'main' ?
                                'Care Service' : eachNewLetterToUpper(activeSwitch.split('.')[activeSwitch.split('.').length - 1])
                            }
                            </Typography>
                        }
                    </div>
                    <div className={styles.flex_row_end}>
                        {lastTextItem == 'showuser'
                        ? <PopUpBottom
                            popUpNode={
                                <ThreeLinesPopUpCustom
                                    items={[
                                        {
                                            icon: <AppColor.search />,
                                            title: 'Search'
                                        },
                                        {
                                            icon: <AppColor.volume />,
                                            title: 'Mute notifications'
                                        }
                                    ]}
                                />}
                                    topPaddingFromNode='20px'
                                    showNode={<AppColor.chevronBottom fill={AppColor.text} />}
                                    showBackgroundHover={false}
                                    showNodeHover={<AppColor.chevronBottom fill={AppColor.orange} />}
                                />
                    : lastTextItem == 'showhelp' ? 
                    <PopUpBottom
                            popUpNode={
                                <ThreeLinesPopUpCustom
                                    items={[
                                        {
                                            icon: <AppColor.details />,
                                            title: 'View details',
                                            onClick: () => {setActiveSwitch('main.general help.helpchat showhelp.details')}
                                        },
                                        {
                                            icon: <AppColor.search />,
                                            title: 'Search'
                                        },
                                        {
                                            icon: <AppColor.mute />,
                                            title: 'Mute notifications'
                                        },
                                        {
                                            icon: <AppColor.closeAsSolved />,
                                            title: 'Close as solved'
                                        },
                                        {
                                            icon: <AppColor.edit fill={AppColor.text} />,
                                            title: 'Edit'
                                        },
                                        {
                                            icon: <AppColor.close fill={AppColor.red} />,
                                            title: 'Delete'
                                        }
                                    ]}
                                />}
                                    topPaddingFromNode='20px'
                                    showNode={<AppColor.chevronBottom fill={AppColor.text} />}
                                    showBackgroundHover={false}
                                    showNodeHover={<AppColor.chevronBottom fill={AppColor.orange} />}
                                />
                                :
                    <AppColor.volume />}
                        <AppColor.minimize className='cursor' style={{paddingTop: '10px',boxSizing: 'content-box'}} onClick={() => {setActiveSwitch('main')}} />
                        <AppColor.close className='cursor' onClick={() => {callback(false)}} width={'17px'} height={'17px'} fill={AppColor.text} />
                    </div>
                </div>
            </div>
            <HorizontalLine />
            <div style={
                {
                    padding: lastItem.includes('nopadding') ? '0' : '20px 30px',
                }
            } className={`${styles.bottom_part}`}>
                <SwitchCare 
                    activeSwitch={activeSwitch}
                    setActiveSwitch={(item) => {setActiveSwitch(item)}}
                />
            </div>
        </div>
    )
}
type SwitchCareProps = {
    activeSwitch: string;
    setActiveSwitch: (activeSwitch: string) => void;
}
export type CareServiceChildProps = {
    setActiveSwitch: (activeSwitch: string) => void;
}
const SwitchCare = ({activeSwitch,setActiveSwitch}:SwitchCareProps) => {

    const activeSwitchLower = activeSwitch.toLowerCase();

    const returnMap = {
        'main': <MainCare setActiveSwitch={(item) => {setActiveSwitch(item)}} />,
        'main.community': <CommunityCare />,
        'main.managers': <ManagerCare setActiveSwitch={(item) => {setActiveSwitch(item)}} />,
        'main.general help.create': <GeneralHelpCreate setActiveSwitch={(item) => {setActiveSwitch(item)}} />,
        'main.general help': <GeneralHelp setActiveSwitch={(item) => {setActiveSwitch(item)}} />,
        'main.contact us': <ContactUsSteps />,
        'main.general help.helpchat showhelp': <GeneralChat />,
        'main.general help.helpchat showhelp.details': <GeneralDetails setActiveSwitch={(item) => {setActiveSwitch(item)}} />,
        'main.general help.helpchat showhelp.details.user': <GeneralUser />,
        'main.managerchat showuser': <ManagerChat />,
        'main.solutions nopadding': <CareSolutions setActiveSwitch={(item) => {setActiveSwitch(item)}} />,
        'main.solutions nopadding.details': <SolutionDetails />
    }

    return returnMap[activeSwitchLower] ?? null;

};


export default SwitchCare;