import styles from './style.module.scss'
import NavigationBar from '@common/components/NavigationBar/index'
import NavigationItem from '@common/components/navigation_history/NavigationItem/index'
import AppColor from '@common/styles/variables-static'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import Typography from '@common/components/ui/Typography/Typography'
import Header from '@common/components/Header/Header/index'
import DropdownNode from '@common/components/ui/Dropdown/DropdownNodes/index'
import Slider from '@common/components/ui/Slider/Slider'
import CardTime from '@common/components/cards/CardTime/CardTime'
import { user } from 'common/models/user'
import CardStatistics from '@common/components/cards/CardStatistics/index'
import CardStatisticTest from '@common/components/cards/CardStatistics/variants/CardStatisticTest'
import AskedQuestion from '@common/components/AskedQuestions/index'
import Footer from '@common/components/Footer/Footer'
import MyButtonOrange from '@common/components/ui/MyButton/variants/MyButtonOrange'

const fakeUser:user = {
    country: 'Ukraine',
    image: '',
    name: 'Artem M.',
    roles: 'Customer',
    statistic: {
      comments_count: 55,
      sponsorship_count: 55,
      rating: 98,
      responses_count: 900
    }
  }
  
const DashboardHome = () => {
    return (
        <div>
            <Header />
            <NavigationBar
                currentCategoryTitle="Dashboard"
                activePageIndex={0}
            />
            <div className={styles.wrapper}>
                <DynamicPadding desktop="50px" mobile="30px" />
                <div className={styles.first_section}>
                    <div className={styles.section_details}>
                        <NavigationItem
                            image={<AppColor.home />}
                            textList={['Dashboard']}
                        />
                        <DynamicPadding
                            desktop='20px'
                            mobile='15px'
                        />
                        <Typography
                            variant="titleBig"
                            textTransform="uppercase">
                            Home
                        </Typography>
                        <DynamicPadding 
                          desktop='0px'
                          mobile='30px'
                        />
                    </div>
                    <div className={styles.income_wrapper}>
  
                     <div className={styles.icome_flex_box}>
                        <div className={styles.green_circle}>
                            <AppColor.wallet />
                        </div>
                          <div>
                            <Typography color={AppColor.transparentBlack} variant='body9'>
                            Avaliable Balance
                            </Typography>
                            <Typography variant='body4'>
                            $35 032.93
                            </Typography>
                        </div>
                     </div>
            
                      <div className={styles.vertical_grey}></div>
              
                       <div className={styles.icome_flex_box}>
                          <div className={styles.orange_circle}>
                              <AppColor.caseWhite />
                          </div>
                          <div>
                            <Typography color={AppColor.transparentBlack} variant='body9'>
                            Sponsorhip Balance
                            </Typography>
                            <Typography variant='body4'>
                            $15 031.00
                            </Typography>
                          </div>  
                       </div>
                    
                      <div className={styles.vertical_grey}></div>

           
                       <div className={styles.flex_center_money_green}>
                          <AppColor.moneyGreen />
                          <Typography textLineHeight='80%' fontWeight='500' variant='body5' color={AppColor.green} textTransform='uppercase'>
                            Top up
                          </Typography>
                       </div>
             
               
                       <div className={styles.vertical_grey}></div>
                        <div className={styles.flex_center_money_red}>
                            
                            <AppColor.moneyRed />
                            <Typography textLineHeight='80%' fontWeight='500' variant='body5' color={AppColor.red} textTransform='uppercase'>
                            Withdraw
                            </Typography>
                        </div>
                  
          
                    </div>
                </div>
                <DynamicPadding
                    desktop='70px'
                    mobile='30px'
                />
                <section className={styles.second_section}>
                   <div className={styles.dropdown_first}>
                        <DropdownNode
                            countNotifications={0}
                            dropnodes={null}
                            filters={[]}
                            noneIcon={<AppColor.news />}
                            noneText='Find suitable missions and guides for you'
                            noneTitle='No Roadmap Yet'
                            noneButton={<MyButtonOrange onClick={() => {}}>Missions</MyButtonOrange>}
                            title='Roadmap'
                        />
                        <DropdownNode
                            countNotifications={0}
                            dropnodes={null}
                            noneIcon={<AppColor.news />}
                            noneText='Create something useful for the world'
                            noneTitle='No Activity Yet'
                            noneButton={<MyButtonOrange onClick={() => {}}>Create</MyButtonOrange>}
                            filters={[]}
                            title='Activity'
                        />
                   </div>
                   <div className={styles.dropdown_second}>
                        <DropdownNode
                            countNotifications={0}
                            dropnodes={null}
                            noneIcon={<AppColor.sound />}
                            noneText='Begin the actions on the site to view notifications'
                            noneTitle='No Notifications Yet'
                            noneButton={<></>}
                            filters={[]}
                            title='Notifications'
                        />
                        <DropdownNode
                            countNotifications={0}
                            dropnodes={null}
                            noneIcon={<AppColor.sound />}
                            noneText='Message someone on Messenger'
                            noneTitle='No Messages Yet'
                            noneButton={<MyButtonOrange onClick={() => {}}>Messenger</MyButtonOrange>}
                            filters={[]}
                            title='Messages'
                        />
                   </div>
                </section>
                <DynamicPadding
                    desktop='50px'
                    mobile='30px'
                />
                
            </div>
            <section className={styles.third_section}>
                    <div className={styles.wrapper}>
                        <Typography variant='subtitle' fontWeight='500' textTransform='uppercase'>
                        related 
                        </Typography>

                        <Slider paddingBottom='10px' paddingTop='20px' elementsCount={6} itemWidth={250} maxWidth={1120} gap={40}>
                           <CardStatisticTest />
                           <CardStatisticTest />
                           <CardStatisticTest />
                           <CardStatisticTest />
                           <CardStatisticTest />
                           <CardStatisticTest />
                        </Slider>
                    </div>

                </section>

                <section className={styles.wrapper}><AskedQuestion /></section>

                <Footer />
        </div>
    )
}

export default DashboardHome
