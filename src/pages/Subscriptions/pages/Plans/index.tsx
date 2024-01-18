
import Header from '@common/components/Header/Header/index';
import styles from './style.module.scss';
import NavigationBar from '@common/components/NavigationBar/index';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import AppColor from '@common/styles/variables-static';
import PageDetails from '@common/components/ui/PageDetails/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import ComparisonTable from '@common/components/ComparisonTable/index';
import AskedQuestion from '@common/components/AskedQuestions/index';
import Footer from '@common/components/Footer/Footer';
import { useState } from 'react';
import SaleCard from './components/SaleCard';
import DropdownText from '@common/components/ui/Dropdown/DropdownText/index';

const SubscriptionsPlans = () => {

    const [activePlan,setActivePlan] = useState('Start');
    return (
      <div>
          <Header /> 
          <NavigationBar activePageIndex={1} currentCategoryTitle='Messenger' />

          <div className={styles.wrapper}>
            <PageDetails
                historyNode={<NavigationItem image={<AppColor.home/>} textList={['Users', 'Freelancers', 'Programmatis']} />}
                pageTitle='plans'
                pageTitleIcon={<AppColor.openEye />}
                
            />
            <DynamicPadding />
            <ComparisonTable 
            switchButton={true}
                card1={
                    <SaleCard
                        filter='Start'
                        description='All the basics for start to work with your freelancer'
                        price={0}
                        isActive={activePlan == 'Start'}
                        callback={(item) => {setActivePlan(item)}}
                    />
                }
                card2={ <SaleCard
                    filter='Pro'
                    description='In case you need a little bit more from your freelancer'
                    price={39}
                    isActive={activePlan == 'Pro'}
                    callback={(item) => {setActivePlan(item)}}
                />}
                card3={<SaleCard
                    filter='Ultimate'
                    description='For teams and organizations to build business'
                    price={59}
                    isActive={activePlan == 'Ultimate'}
                    callback={(item) => {setActivePlan(item)}}
                />}

                rows={[
                    {
                        card1Text: 'General',
                        card2Text: 'Higher priority',
                        card3Text: 'Highest priority',
                        title: 'Service Queue',
                        titleInfo: 'Dolor urna augue augue leo. Elit lacus mauris non in euismod amet in tristique netus.',
                    },
                    {
                        card1Text: 'General',
                        card2Text: 'Higher priority',
                        card3Text: 'Highest priority',
                        title: 'Support',
                        titleInfo: '',
                    },
                    {
                        title: 'Guarantee',
                        titleInfo: '',
                        card1Text: <DropdownText 
                                        callback={() => {}}
                                        dropTitles={Array.from({ length: 34 }, (_, index) => `${index + 7} days`)}
                                          title='7 days'
                                    />,
                        card2Text: <DropdownText 
                                    callback={() => {}}
                                    dropTitles={['Unlimited', 'General', 'Higher priority']}
                                    title='Unlimited'
                                />,
                        card3Text: <DropdownText 
                        callback={() => {}}
                        dropTitles={['Unlimited', 'General', 'Higher priority']}
                        title='Unlimited'
                    />,
                    },
                    {
                        title: 'Special Groups',
                        titleInfo: '',
                        card1Text: true,
                        card2Text: true,
                        card3Text: true
                    },
                    {
                        title: 'Missions',
                        titleInfo: '',
                        card1Text: '',
                        card2Text: true,
                        card3Text: true
                    },
                    {
                        title: 'Leagues',
                        titleInfo: '',
                        card1Text: '',
                        card2Text: '',
                        card3Text: true
                    },
                    {
                        title: 'Badges',
                        titleInfo: '',
                        card1Text: '',
                        card2Text: '',
                        card3Text: true
                    },
                    {
                        title: 'Promo',
                        titleInfo: '',
                        card1Text: '',
                        card2Text: '',
                        card3Text: true
                    },
                    {
                        title: 'Consultation',
                        titleInfo: '',
                        card1Text: '',
                        card2Text: '',
                        card3Text: true
                    }
                ]}
            />
            <AskedQuestion />
          </div>
          <Footer/>
      </div>
    );
};

export default SubscriptionsPlans;