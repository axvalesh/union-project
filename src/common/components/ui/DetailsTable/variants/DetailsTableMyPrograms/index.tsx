
import { useScreenSize } from '@common/helpers/useScreenSize';
import DetailsTable from '../..';
import UserAvatar from '../../../UserAvatar';
import styles from './style.module.scss';
import { useState } from 'react';
import Typography from '@common/components/ui/Typography/Typography';
import DynamicPadding from '../../../DynamicPadding';
import AppColor from '@common/styles/variables-static';
type DetailsTableMyProgramsProps = {
    information: DetailsTableMyProgramsItem[];
}

export type DetailsTableMyProgramsItem = {
    date: string;
    memberName: string;
    category: string;
    rate: string;
    EPC: string;
    CR: string;
    CR48Hours: string;
    page: number;
    
}
const DetailsTableMyPrograms = ({information}:DetailsTableMyProgramsProps) => {
    const [currentPage,setCurrentPage] = useState(1);
    const currentItem = information[currentPage-1];

    const {width,height} = useScreenSize();
    
    console.log(currentPage);
    return (
      <DetailsTable
        callbackNav={(item) => { setCurrentPage(item)}}
        filters={['All', 'Progress', 'Completed', 'Available', 'Unavailable']}
        page={currentPage}
        dropdownNode={ <div></div> }
        details={
            currentItem != null ? [
                {
                    title: 'Member',
                    child: <UserAvatar
                        // nodeAfterText={ <div className={styles.gap_5}><AppColor.playButton/><AppColor.refreshColored/></div> }
                        width='30px' height='30px' variant='row'  active={true} name={currentItem.memberName} />
                },
                {
                    title: 'Date',
                    child: <Typography variant='body4'>{currentItem.date}</Typography>
                },
                {
                    title: 'Category',
                    child: <div className={styles.category_wrapper}><Typography color='white' textTransform='uppercase' variant='body4'>{currentItem.category}</Typography></div>
                },
                {
                    title: 'Rate',
                    child: <Typography variant='body4'>{currentItem.rate}</Typography>
                },
                {
                    title: 'EPC',
                    child: <Typography variant='body4'>{currentItem.EPC}</Typography>
                },
                {
                    title: 'CR',
                    child: <Typography variant='body4'>{currentItem.CR}</Typography>
                },
                {
                    title: 'CR for 48 hours',
                    child: <Typography variant='body4'>{currentItem.CR48Hours}</Typography>
                },
                
            ] : [
                {
                    title: 'Member',
                    child: <>
                    <DynamicPadding desktop='30px' mobile='10px' /></>
                },
                {
                    title: 'Date',
                    child: <></>
                },
                {
                    title: 'Category',
                    child: <></>
                },
                {
                    title: 'Rate',
                    child: <></>
                },
                {
                    title: 'EPC',
                    child: <></>
                },
                {
                    title: 'CR',
                    child: <></>
                },
                {
                    title: 'CR for 48 hours',
                    child: <></>
                },
               
            ]
        }
      />
    );
};

export default DetailsTableMyPrograms;