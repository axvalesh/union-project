
import Header from '@common/components/Header/Header/index';
import styles from './style.module.scss';
import NavigationBar from '@common/components/NavigationBar/index';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import AppColor from '@common/styles/variables-static';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import Typography from '@common/components/ui/Typography/Typography';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';
import { useState } from 'react';
import DetailsTable from '@common/components/ui/DetailsTable/index';
import DetailsTableMissions from '@common/components/ui/DetailsTable/variants/DetailsTableMissions/index';
import AskedQuestion from '@common/components/AskedQuestions/index';
import Footer from '@common/components/Footer/Footer';

const missionContent = [
    {
        date: 'Feb 26, 2021 16:32',
        userName: 'Artem M.',
        deadline: ' 22 days left',
        reward: '25',
        status: 'Progress',
        missionText: 'Entrance challenge',
        page: 1,
        missionCompleted: '1 of 10 completed ',
        limitsCurrent: 4,
        limitsMax: 9
    },
    {
        date: 'Feb 26, 2021 16:32',
        userName: 'Artem M.',
        deadline: ' 22 days left',
        reward: '25',
        status: 'Progress',
        missionText: 'Entrance challenge',
        page: 2,
        missionCompleted: '1 of 10 completed ',
        limitsCurrent: 4,
        limitsMax: 9
    },
    {
        date: 'Feb 26, 2021 16:32',
        userName: 'Artem M.',
        deadline: ' 22 days left',
        reward: '25',
        status: 'Progress',
        missionText: 'Entrance challenge',
        page: 3,
        missionCompleted: '1 of 10 completed ',
        limitsCurrent: 4,
        limitsMax: 9
    }
]
const Missions = () => {

    return (
        <div>
            <Header />
            <NavigationBar
                activePageIndex={2}
                currentCategoryTitle="Dashboard"
            />

            <div className={styles.wrapper}>
                <DynamicPadding />
                <div className={styles.top_section}>
                    <div className={styles.top_flex}>
                        <NavigationItem
                            image={<AppColor.home />}
                            textList={['Dashboard']}
                        />
                        <Typography
                            variant="titleBig"
                            textTransform="uppercase"
                            fontWeight="600">
                            <div className={styles.flex_center}>
                                missions{' '}
                            </div>
                        </Typography>
                    </div>
                    <MyButtonTransparentOrange
                        onClick={() => {}}
                        fontWeight="500">
                        CUSTOMER{' '}
                        <AppColor.chevronBottom
                            fill={AppColor.orange}
                            width={14}
                            height={10}
                        />
                    </MyButtonTransparentOrange>
                </div>

                <DynamicPadding />
                <div className={styles.search_wrapper}>
                    <input type="text" placeholder="Search" />
                    <div className={styles.flex_items_wrapper}>
                        <div className={styles.search_item_flex}>
                            <AppColor.calendar />
                            <Typography
                                variant="body4"
                                color={AppColor.transparentBlack}>
                                10/29/22 - 11/29/22
                            </Typography>
                        </div>

                        <div className={styles.search_item_flex}>
                            <AppColor.filter />
                            <Typography
                                variant="body4"
                                color={AppColor.transparentBlack}>
                                Filters
                            </Typography>
                        </div>
                        <div className={styles.search_item_flex}>
                            <Typography
                                variant="body4"
                                color={AppColor.transparentBlack}>
                                12
                            </Typography>
                            <AppColor.chevronBottom
                                fill={AppColor.text}
                            />
                        </div>
                    </div>
                </div>

                <DynamicPadding />

                <div>
                    <DetailsTableMissions information={missionContent} />
                </div>
          
                <AskedQuestion />
            </div>
            <Footer />
        </div>
    )
};

export default Missions;