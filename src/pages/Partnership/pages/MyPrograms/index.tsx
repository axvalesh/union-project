
import Header from '@common/components/Header/Header/index';
import styles from './style.module.scss';
import NavigationBarDropdowns from '@common/components/NavigationBarDropdowns/index';
import PageDetails from '@common/components/ui/PageDetails/index';
import AppColor from '@common/styles/variables-static';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import { developmentDropdown } from '@common/models/constants';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';
import SearchFilterBar from '@common/components/ui/SearchFilterBar/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import FilterList from '@common/components/FilterList/index';
import DetailsTableMyPrograms from '@common/components/ui/DetailsTable/variants/DetailsTableMyPrograms/index';
import AskedQuestion from '@common/components/AskedQuestions/index';
import Footer from '@common/components/Footer/Footer';

const PartnershipMyPrograms = () => {

    return (
        <div>
        <Header />

        <NavigationBarDropdowns
            title="partnership"
            navItems={developmentDropdown}
            titleIcon={<AppColor.partnership />}
        />

        <div className={styles.wrapper}>
            <PageDetails
                historyNode={
                    <NavigationItem
                        image={<AppColor.home />}
                        textList={['Partnership']}
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
                pageTitle="My programs  "
            />

            <DynamicPadding />
            <SearchFilterBar />

            <DynamicPadding />

            <FilterList
                category={['Projects']}
                filters={['All', 'Pending', 'Progress', 'Completed', 'Cancelled']}
            />

            <DynamicPadding desktop='30px' mobile='20px'/>
            <DetailsTableMyPrograms
                information={[
                    {
                        memberName: 'Artem Markevych Logo Design Partnership ',
                        category: 'Logo design',
                        CR: '10%',
                        CR48Hours: '8%',
                        date: 'Feb 26, 2021 16:32 ',
                        EPC: '5$',
                        page: 0,
                        rate: '5% - 10% '
                    }
                ]}
            />

            <AskedQuestion />
        </div>
           <Footer />
      </div>
    );
};

export default PartnershipMyPrograms;