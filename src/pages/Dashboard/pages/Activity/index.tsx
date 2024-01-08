import Header from '@common/components/Header/Header/index'
import styles from './style.module.scss'
import NavigationBar from '@common/components/NavigationBar/index'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import NavigationItem from '@common/components/navigation_history/NavigationItem/index'
import AppColor from '@common/styles/variables-static'
import Typography from '@common/components/ui/Typography/Typography'
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange'
import DetailsTableMissions from '@common/components/ui/DetailsTable/variants/DetailsTableMissions/index'
import AskedQuestion from '@common/components/AskedQuestions/index'
import Footer from '@common/components/Footer/Footer'
import DetailsTableActivity, { DetailsTableActivityPropsItem } from '@common/components/ui/DetailsTable/variants/DetailsTableActivity/index'


const missionContent:DetailsTableActivityPropsItem[] = [
    {
        date: 'Feb 26, 2021 16:32',
        userName: 'Artem M.',
        actionImage: <AppColor.freelancer width={'38px'} height={'38px'} />,
        actionText: 'Convert an Indicator Signal and an EA Signal into a Metatrader 5 Expert...',
        category: 'Logo design',
        rewardAmount: '25',
        rewardEx: '30',
        rewardPointsPlus: '10',
        page: 1,
    },
]
const Activity = () => {
    return (
        <div>
            <Header />
            <NavigationBar
                currentCategoryTitle="Dashboard"
                activePageIndex={5}
            />
            <div className={styles.wrapper}>
                <DynamicPadding desktop="50px" mobile="30px" />
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
                            Activity
                        </Typography>
                    </div>
                    <MyButtonTransparentOrange
                        onClick={() => {}}
                        fontWeight="500">
                        Customer{' '}
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
                    <DetailsTableActivity information={missionContent} />
                </div>
          
                <AskedQuestion />
            </div>
            <Footer />
        </div>
    )
}

export default Activity
