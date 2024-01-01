import styles from './style.module.scss'
import NavigationBar from '@common/components/NavigationBar/index'
import NavigationItem from '@common/components/navigation_history/NavigationItem/index'
import AppColor from '@common/styles/variables-static'
import DynamicPadding from '@common/components/ui/DynamicPadding/index'
import Typography from '@common/components/ui/Typography/Typography'
import Header from '@common/components/Header/Header/index'

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
                              <AppColor.caseIcon />
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
                <section className={styles.second_section}>
                    <div className={styles.box}>
                        <div>
                           <div>
                           <Typography variant='body3' fontWeight='500' textLineHeight='100%'>
                                Roadmap
                            </Typography>
                            <span>
                                1
                            </span>
                           </div>
                           
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default DashboardHome
