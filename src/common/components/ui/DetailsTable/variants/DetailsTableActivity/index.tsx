
import { useState } from 'react';
import DetailsTable from '../..';
import styles from './style.module.scss';
import AppColor from '@common/styles/variables-static';
import Typography from '@common/components/ui/Typography/Typography';
import UserAvatar from '../../../UserAvatar';
import DynamicPadding from '../../../DynamicPadding';
import { useScreenSize } from '@common/helpers/useScreenSize';

export type DetailsTableActivityProps = {
    information: DetailsTableActivityPropsItem[];
}

export type DetailsTableActivityPropsItem = {
    date: string;
    userName: string;
    category: string;
    rewardAmount: string;
    rewardEx: string;
    rewardPointsPlus: string;
    actionText: string;
    actionImage: any;
    page: number;
}


const DetailsTableActivity = ({information}:DetailsTableActivityProps) => {

    const [currentPage,setCurrentPage] = useState(1);
    const currentItem = information[currentPage-1];
    const [showUsers,setShowUsers] = useState(false);

    const {width,height} = useScreenSize();
    
    console.log(currentPage);
    return (
        <DetailsTable
            maxWidth="346px"
            showUsers={showUsers}
            callbackNav={(item) => {
                setCurrentPage(item)
            }}
            filters={[
                'All',
                'Progress',
                'Completed',
                'Available',
                'Unavailable',
            ]}
            page={currentPage}
            details={
                currentItem != null
                    ? [
                          {
                              title: 'Action',
                              child: (
                                  <MissionItem
                                      image={currentItem.actionImage}
                                      text={currentItem.actionText}
                                  />
                              ),
                          },
                          {
                              title: 'Date',
                              child: (
                                  <Typography variant="body4">
                                      {currentItem.date}
                                  </Typography>
                              ),
                          },
                          {
                              title: 'User',
                              child: (
                                  <UserAvatar
                                      flag={<AppColor.UkraineFlag />}
                                      preventMobileNone={true}
                                      variant="row"
                                      active={true}
                                      name={currentItem.userName}
                                  />
                              ),
                          },
                          {
                              title: 'Category',
                              child: (
                                  <div
                                      className={
                                          styles.category_text
                                      }>
                                      <Typography
                                          textTransform="uppercase"
                                          variant="inputText"
                                          color="white">
                                          {currentItem.category}
                                      </Typography>
                                  </div>
                              ),
                          },
                          {
                              title: 'Reward',
                              child: (
                                  <div className={styles.reward_flex}>
                                      <Typography variant='body4' fontWeight='500'>
                                          +{currentItem.rewardEx} XP
                                      </Typography>
                                      <Typography variant='body4' fontWeight='500' color={AppColor.green}>
                                          +{' '}
                                          {
                                              currentItem.rewardPointsPlus
                                          }{' '}
                                          Points
                                      </Typography>
                                          <AppColor.pigCoins />
                                          <Typography variant='body4' fontWeight='400'>{currentItem.rewardAmount}</Typography>
                                      
                                  </div>
                              ),
                          },
                      ]
                    : [
                          {
                              title: 'Action',
                              child: (
                                  <>
                                      <DynamicPadding
                                          desktop="30px"
                                          mobile="10px"
                                      />
                                  </>
                              ),
                          },
                          {
                              title: 'Date',
                              child: <></>,
                          },
                          {
                              title: 'User',
                              child: <></>,
                          },
                          {
                              title: 'Category',
                              child: <></>,
                          },
                          {
                              title: 'Reward',
                              child: <></>,
                          },
                      ]
            }
        />
    )
};

const MissionItem = ({text,image}: {text?:string,image:any}) => {

    return (

            <div className={styles.mission_wrapper}>
                
               <div> {image}</div>
               
                <div className={styles.mission_wrapper}>
                   <div>
                        <Typography variant='body4' fontWeight='500'>
                            {text}
                        </Typography>
                        <DynamicPadding mobile='10px' desktop='10px' />
                   </div>
                   
                </div>
               
            </div>
        
    )
}

export default DetailsTableActivity;