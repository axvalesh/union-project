
import { useState } from 'react';
import DetailsTable from '../..';
import styles from './style.module.scss';
import AppColor from '@common/styles/variables-static';
import Typography from '@common/components/ui/Typography/Typography';
import UserAvatar from '../../../UserAvatar';
import PercentBar from '@common/components/ui/PercentBar/PercentBar';
import DynamicPadding from '../../../DynamicPadding';
import { useScreenSize } from '@common/helpers/useScreenSize';

type DetailsTableMyTeamsProps = {
    information: DetailsTableMyTeamsPropsItem[];
}

export type DetailsTableMyTeamsPropsItem = {
    date: string;
    teamName: string;
    position: string;
    termination: boolean;
    freelance: boolean;
    contactTitle: string;
    contactDescription: string;
    page: number;
    status: string;
    teamIcon: any;
    teamMembers: number;
}

const DetailsTableMyTeams = ({information}:DetailsTableMyTeamsProps) => {

    const [currentPage,setCurrentPage] = useState(1);
    const currentItem = information[currentPage-1];

    const {width,height} = useScreenSize();
    
    console.log(currentPage);
    return (
      <DetailsTable
        callbackNav={(item) => { setCurrentPage(item)}}
        filters={['All', 'Progress', 'Completed', 'Available', 'Unavailable']}
        page={currentPage}
        details={
            currentItem != null ? [
                {
                    title: 'Team',
                    child: <TeamView teamIcon={currentItem.teamIcon} teamMembers={currentItem.teamMembers} teamName={currentItem.teamName} />
                },
                {
                    title: 'Date',
                    child: <Typography variant='body4'>{currentItem.date}</Typography>
                },
                {
                    title: 'Position',
                    child: <Typography variant='body4'>{currentItem.position}</Typography>
                },
                {
                    title: 'Termination',
                    child: <TrueOrFalse isTrue={currentItem.termination} /> 
                },
                {
                    title: 'Freelance',
                    child: <TrueOrFalse isTrue={currentItem.freelance} /> 
                },
                {
                    title: 'Contract',
                    child: <ContractItem icon={<AppColor.contract />} description={'till 26 Oct 2023'} title='Signed (2/2)' />
                },
                {
                    title: 'Status',
                    child: <Typography textLineHeight='100%' variant='body4' color={AppColor.green}>{currentItem.status}</Typography>
                },
            ] : [
                {
                    title: 'Team',
                    child: <>
                    <DynamicPadding desktop='30px' mobile='10px' /></>
                },
                {
                    title: 'Date',
                    child: <></>
                },
                {
                    title: 'Position',
                    child: <></>
                },
                {
                    title: 'Termination',
                    child: <></>
                },
                {
                    title: 'Freelance',
                    child: <></>
                },
                {
                    title: 'Contract',
                    child: <></>
                },
                {
                    title: 'Status',
                    child: <></>
                },
               
            ]
        }
      />
    );
};

type TeamViewProps = {
    teamIcon: any;
    teamName: string;
    teamMembers: number;
}
const TeamView = ({teamIcon,teamMembers,teamName}:TeamViewProps) => {
    return (
        <div className={styles.flex_center}>
            {teamIcon}
            <div>
                <Typography variant='body4' fontWeight='500'>{teamName}</Typography>
                <Typography variant='body4' fontWeight='400' color={AppColor.transparentBlack}>{teamMembers} Members</Typography>
            </div>
        </div>
    )
}

type ContractItemProps = {
    icon: any;
    description: string;
    title: string;
}

const ContractItem = ({icon,description,title}:ContractItemProps) => {
    return (
        <div className={styles.flex_center}>
            {icon}
            <div>
                <Typography variant='body4' fontWeight='500'>{title}</Typography>
                <Typography variant='body4' fontWeight='400' color={AppColor.transparentBlack}>{description} Members</Typography>
            </div>
        </div>
    )
}

const TrueOrFalse = ({ isTrue }: { isTrue: boolean }) => {
    return (
        <div className={styles.center_item}>
            { isTrue
            ? <AppColor.singTrue width={14} height={10} stroke={AppColor.orange}/>
            : <div className={styles.false_item}></div>}
        </div>
    );
}
export default DetailsTableMyTeams;