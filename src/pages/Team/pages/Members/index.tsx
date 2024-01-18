import Header from '@common/components/Header/Header/index'
import styles from './style.module.scss'
import NavigationBar from '@common/components/NavigationBar/index'
import PageDetails from '@common/components/ui/PageDetails/index'
import NavigationItem from '@common/components/navigation_history/NavigationItem/index'
import AppColor from '@common/styles/variables-static'
import Typography from '@common/components/ui/Typography/Typography'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index'
import DetailsTableActivity from '@common/components/ui/DetailsTable/variants/DetailsTableActivity/index'
import AskedQuestion from '@common/components/AskedQuestions/index'
import Footer from '@common/components/Footer/Footer'
import DetailsTableMembers, { DetailsTableMembersPropsItem } from '@common/components/ui/DetailsTable/variants/DetailsTableMembers/index'


const teamsContent:DetailsTableMembersPropsItem[] = [
    {
        memberIcon: <AppColor.freelancer />,
        memberName: 'Artem M.',
        memberDescription: 'Senior UI Designer',
        date: 'Feb 26, 2021 16:32 ',
        contactDescription: 'till 26 Oct 2023',
        contactTitle: 'Signed (2/2)',
        freelance: true,
        termination: false,
        squad: 'Design, Marketing',
        page: 0,
        status: 'Invited'
    },
    {
        memberIcon: <AppColor.freelancer />,
        memberName: 'Artem M.',
        memberDescription: 'Senior UI Designer',
        date: 'Feb 26, 2021 16:32 ',
        contactDescription: 'till 26 Oct 2023',
        contactTitle: 'Signed (2/2)',
        freelance: true,
        termination: false,
        squad: 'Design, Marketing',
        page: 0,
        status: 'Invited'
    },
]
const TeamMembers = () => {
    return (
        <div>
            <Header />
            <NavigationBar
                activePageIndex={0}
                currentCategoryTitle="Team"
            />
            <div className={styles.wrapper}>
                <PageDetails
                    pageTitle="my Teams"
                    historyNode={
                        <NavigationItem
                            image={<AppColor.home />}
                            textList={['Teams']}
                        />
                    }
                    endNode={
                        <div className={styles.flex_center}>
                            <div className={styles.orange_plus}>
                                <AppColor.plus width={20} height={20} stroke='white' />
                            </div>
                            <Typography
                                variant="body3"
                                fontWeight="500">
                                Create Team
                            </Typography>
                        </div>
                    }
                />

                <DynamicPadding />
                <SearchFilterBar />
                <DynamicPadding />

                <DetailsTableMembers information={teamsContent}  />

                <AskedQuestion />
            </div>
            <Footer />
        </div>
    )
}

export default TeamMembers
