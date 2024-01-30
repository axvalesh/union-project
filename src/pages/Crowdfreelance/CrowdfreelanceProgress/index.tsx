
import Header from '@common/components/Header/Header/index';
import NavigationBarDropdowns from '@common/components/NavigationBarDropdowns/index';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';
import PageDetails from '@common/components/ui/PageDetails/index';
import Typography from '@common/components/ui/Typography/Typography';
import UserTopPageInfo from '@common/components/ui/UserTopPageInfo/index';
import { crowdfreelancerNav } from '@common/models/constants';
import { fakeUserConstant } from '@common/models/user';
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index';
import DetailCrowdfreelanceProgress from '@common/components/ui/DetailsTable/variants/DetailsCrowdfreelancerProgress/index';

const CrowdfreelanceProgress = () => {
    const arrayHistory = ['Crowdfreelance', 'Tech', 'Web Service'] 
    const title = 'MONITREE - Vines that grow along the moni...';
    return (
        <div>
        <Header />

        <NavigationBarDropdowns
                title="Crowdfreelance"
                navItems={crowdfreelancerNav}
                titleIcon={<AppColor.caseWhite />}
            />

        <div className={'wrapper_page'}>
            <PageDetails
                historyNode={
                    <NavigationItem
                        image={<AppColor.home />}
                        textList={arrayHistory}
                    />
                }
                pageTitle={title}
            />

            <DynamicPadding desktop='30px' mobile='20px'/>
            <UserTopPageInfo user={fakeUserConstant}
            />
            <DynamicPadding />

            <ResponsiveLayoutTwo
                gap='80px'
                item1MaxWidth='730px'
                item2MaxWidth='390px'
                item1={
                    <div>
                        <DetailCrowdfreelanceProgress
                            informationDropdown={[]}
                            informationTable={[]}
                        />
                    </div>
                }
                item2={
                    <div>
                        
                    </div>
                }
            />
        </div>
           
      </div>
    );
};

export default CrowdfreelanceProgress;