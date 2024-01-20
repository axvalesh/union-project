
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import Typography from '@common/components/ui/Typography/Typography';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import PageDetails from '@common/components/ui/PageDetails/index';
import NavigationBar from '@common/components/NavigationBar/index';
import Header from '@common/components/Header/Header/index';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import VerificationCard from './components/VerificationCard';

const VerificationFinal = () => {

    return (
        <div>
            <Typography variant='body4'>KYC is a one-time process required by international regulators and is implemented for the safety of your assets. </Typography>
            <DynamicPadding desktop='30px' mobile='20px' />
            <div className={styles.cards_wrapper}>
                <VerificationCard
                    icon={<AppColor.personalInfo />}
                    buttonText='personal information'
                    onClick={() => {}}
                    text='Verified on 23 Feb 2022 13:35'
                    title='Personal Information'
                    isSolved={false}
                    color={AppColor.green}
                    coloredWord='Change'
                />
                <VerificationCard
                    icon={<AppColor.passportYellow />}
                    buttonText='Change personal information'
                    onClick={() => {}}
                    text='Was sent on 23 Feb 2022 13:35. Average check time 3 days'
                    title='Proof Identity'
                    isSolved={false}
                    color={AppColor.orange}
                    coloredWord='Waiting.'
                />
                <VerificationCard
                    icon={<AppColor.location fill={AppColor.text} width={'28px'} height={'38px'} />}
                    buttonText='Change personal information'
                    onClick={() => {}}
                    text='on 23 Feb 2022 13:35.'
                    title='Proof Address'
                    isSolved={false}
                    color={AppColor.red}
                    coloredWord='Rejected'
                />
            </div>
        </div>
    );
};

export default VerificationFinal;