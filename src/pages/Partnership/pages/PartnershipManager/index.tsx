
import Header from '@common/components/Header/Header/index';
import styles from './style.module.scss';
import NavigationBarDropdowns from '@common/components/NavigationBarDropdowns/index';
import AppColor from '@common/styles/variables-static';
import { developmentDropdown } from '@common/models/constants';
import PageDetails from '@common/components/ui/PageDetails/index';
import NavigationItem from '@common/components/navigation_history/NavigationItem/index';
import MyButtonTransparentOrange from '@common/components/ui/MyButton/variants/MyButtonTransparentOrange';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import SliderByRef from '@common/components/ui/SliderByRef/index';
import SliderItem, { sliderNodeList } from './components/SliderItem';
import Typography from '@common/components/ui/Typography/Typography';
import HorizontalLine from '@common/components/ui/Lines/HorizontalLine/index';
import { useState } from 'react';
import SideBarCategory from './components/SideBarCategory';
import AskedQuestion from '@common/components/AskedQuestions/index';
import Footer from '@common/components/Footer/Footer';
import DoubleRangeSlider from '@common/components/ui/DoubleRangeSlider/index';

const PartnershipManager = () => {
    const [tags,setTags] = useState<string[]>(['3D']);
    return (
      <div>
           <Header />

           <NavigationBarDropdowns
              title='partnership'
              navItems={developmentDropdown}
              titleIcon={<AppColor.partnership />}
           />
           
           <div className={styles.wrapper}>
              <PageDetails
                    historyNode=
                    {
                        <NavigationItem
                            image={<AppColor.home />}
                            textList={['Partnership']} 
                        />
                    } 
                    endNode= {
                      <div className={styles.details_end_node}>
                        <MyButtonTransparentOrange fontWeight='500' textTransform='uppercase' onClick={() => {}}>All programs <AppColor.chevronBottom fill={AppColor.orange} /></MyButtonTransparentOrange>
                      </div>
                    }
                    pageTitle='Brand Identity Design '
                />

                <DynamicPadding />
                {sliderNodeList}
                <DynamicPadding />
                <div className={styles.main_part}>
                    <div className={styles.left_part}>
                      <div>
                          <div className={styles.justify_flex}>
                              <Typography variant='body4' color={AppColor.transparentBlack}>My filter templates</Typography>
                              <AppColor.template />
                          </div>
                          <DynamicPadding desktop='30px' mobile='15px' />
                          <HorizontalLine />
                          <DynamicPadding desktop='30px' mobile='15px' />
                          <div className={styles.justify_flex}>
                            <Typography variant='body3' fontWeight='500'>You chose</Typography>
                            <Typography variant='body5' color={AppColor.transparentBlack}>Reset All</Typography>
                          </div>
                          <DynamicPadding desktop='30px' mobile='15px' />
                          {tags.map(tag => <MyButtonTransparentOrange padding='5px 13px' onClick={() => {}}>{tag} <AppColor.close fill={AppColor.orange} /></MyButtonTransparentOrange>)}
                          <DynamicPadding desktop='30px' mobile='15px' />
                          <HorizontalLine />
                          <DynamicPadding desktop='30px' mobile='15px' />
                          <SideBarCategory

                            title='Logo Style'
                            dropItems={[
                              {
                                count: 500,
                                icon: <AppColor.minimalist width={'20px'} height={'20px'} />,
                                text: 'Minimalist'
                              },
                              {
                                count: 500,
                                icon: <AppColor.mascot width={'20px'} height={'20px'} />,
                                text: 'Mascot'
                              },
                              {
                                count: 500,
                                icon: <AppColor.freestyle width={'20px'} height={'20px'} />,
                                text: 'Freestyle'
                              },
                              {
                                count: 500,
                                icon: <AppColor.threeD width={'20px'} height={'20px'} />,
                                text: '3D'
                              },
                              {
                                count: 500,
                                icon: <AppColor.minimalist width={'20px'} height={'20px'} />,
                                text: 'Minimalist'
                              },
                              {
                                count: 500,
                                icon: <AppColor.mascot width={'20px'} height={'20px'} />,
                                text: 'Mascot'
                              },
                            ]}
                          />
                          <DynamicPadding desktop='30px' mobile='15px' />
                          <HorizontalLine />
                          <DynamicPadding desktop='30px' mobile='15px' />
                          <SideBarCategory

                            title='File Format'
                            dropItems={[
                              {
                                count: 500,
                                icon: <AppColor.pngBox width={'20px'} height={'20px'} />,
                                text: 'PNG'
                              },
                              {
                                count: 500,
                                icon: <AppColor.jpgBox width={'20px'} height={'20px'} />,
                                text: 'JPG'
                              },
                              {
                                count: 500,
                                icon: <AppColor.gifBox width={'20px'} height={'20px'} />,
                                text: 'GIF'
                              },
                              {
                                count: 500,
                                icon: <AppColor.pdfBox width={'20px'} height={'20px'} />,
                                text: 'PDF'
                              },
                            ]}
                          />
                          <DynamicPadding desktop='30px' mobile='15px' />
                          <HorizontalLine />
                          <DynamicPadding desktop='30px' mobile='15px' />
                          <SideBarCategory

                            title='Includes'
                            dropItems={[
                              {
                                count: 500,
                                icon: <AppColor.code width={'20px'} height={'20px'} />,
                                text: 'Source File'
                              },
                              {
                                count: 500,
                                icon: <AppColor.vectorFiles width={'20px'} height={'20px'} />,
                                text: 'Vector FIle'
                              },
                              {
                                count: 500,
                                icon: <AppColor.chessBoard width={'20px'} height={'20px'} />,
                                text: 'Logo Transparency'
                              },
                              {
                                count: 500,
                                icon: <AppColor.printer width={'20px'} height={'20px'} />,
                                text: 'Printable FIle'
                              },
                             
                            ]}
                          />
                          <DynamicPadding desktop='30px' mobile='15px' />
                          <HorizontalLine />
                          <DynamicPadding desktop='30px' mobile='15px' />
                          <DoubleRangeSlider 
                          min={0}
                          max={100}
                          onChange={() => {}}
                          />
                      </div>
                    </div>
                    <div className={styles.right_part}>

                    </div>
                </div>
                <AskedQuestion />
           </div>
           <Footer />
      </div>
    );
};

export default PartnershipManager;