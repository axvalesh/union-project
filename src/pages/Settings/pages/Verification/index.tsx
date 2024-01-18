import Header from '@common/components/Header/Header/index'
import styles from './style.module.scss'
import NavigationBar from '@common/components/NavigationBar/index'
import PageDetails from '@common/components/ui/PageDetails/index'
import NavigationItem from '@common/components/navigation_history/NavigationItem/index'
import AppColor from '@common/styles/variables-static'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import Typography from '@common/components/ui/Typography/Typography'
import FirstStep from './components/FirstStep'
import AskedQuestion from '@common/components/AskedQuestions/index'
import Footer from '@common/components/Footer/Footer'
import SecondStep from './components/SecondStep'

const Verification = () => {

    const stepsSolved = 2;

    const map = {
        1: <FirstStep />,
        2: <SecondStep />,
    }

    return (
        <div>
            <Header />
            <NavigationBar
                activePageIndex={2}
                currentCategoryTitle="Settings"
            />
            <div className={styles.wrapper}>
                <PageDetails
                    historyNode={
                        <NavigationItem
                            image={<AppColor.home />}
                            textList={['Settings']}
                        />
                    }
                    pageTitle="password & security"
                    endNode={
                        // @ts-ignore
                        stepsSolved != 3 
                        ? <div className={styles.unverified_wrapper}>
                            <AppColor.closeRed/> <Typography textTransform='uppercase' variant='body4' fontWeight='500'>unverified</Typography>
                        </div>
                        : <></>
                    }
                />

                <DynamicPadding />

                {map[stepsSolved]}

                <AskedQuestion />
            </div>
            <Footer />
        </div>
    )
}


export default Verification
