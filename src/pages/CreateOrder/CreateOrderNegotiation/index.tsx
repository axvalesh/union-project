
import HeaderSearch from '@common/components/Header/HeaderSearch/index';
import styles from './style.module.scss';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import ResponsiveLayoutTwo from '@common/components/ResponsiveLayoutTwo/index';
import StepsOfPreparing from '@common/components/StepsOfPreparing/index';
import Typography from '@common/components/ui/Typography/Typography';
import ChevronMoveTo from '@common/components/ui/ChevronMoveTo/index';
import { fakeUserConstant } from '@common/models/user';
import AppColor from '@common/styles/variables-static';
import AskedQuestion from '@common/components/AskedQuestions/index';
import Footer from '@common/components/Footer/Footer';
import { Link } from 'react-router-dom';

const CreateOrderNegotiation = () => {

    return (
      <div>
           <HeaderSearch 
                allItemsProgress={['Details', 'Negotiation', 'Posting']}
                currentItemProgress='Negotiation'
            />

            <DynamicPadding />

           <div className='wrapper_page'>
                <ResponsiveLayoutTwo
                    orderItem1Desktop={0}
                    orderItem1Mobile={1}
                    orderItem2Desktop={1}
                    orderItem2Mobile={0}
                    gap='80px'
                    item1MaxWidth='730px'
                    item2MaxWidth='390px'
                    item1={
                       <div >
                            <div>
                            <div className={styles.title_wrapper}>
                    <Typography textTransform='uppercase' variant='titleBig'>Details</Typography>
                   <div className='mobile'>
                        <div className={styles.template_icon}>
                            <AppColor.template />
                         </div>
                   </div>
                </div>
                <DynamicPadding/>
                                <StepsOfPreparing
                                    elements={[
                                        {
                                            text: 'Fixed payment',
                                            solve: 'Change payment way',
                                        },
                                        {
                                            text: '$200, 6 days delivery',
                                            solve: 'Change details',
                                        },
                                        {
                                            text: 'Logo Design specification form',
                                            solve: 'Change specification',
                                        },
                                        {
                                            text: 'NDA.pdf, NCA.pdf',
                                            solve: 'Change documents to sign',
                                        },
                                    ]}
                                />
    
                                <DynamicPadding />
    
                                <div className={styles.text_box}>
                                    <Typography variant='body4'>You can move to the results and find out which solution is relevant for you.</Typography>
                                </div>
    
                                <DynamicPadding />
    
                                <div className={'flex_space_between'}>
                                       
                                       <Link to={'/create-order/details'}>
                                       <ChevronMoveTo variant='left' onClick={() => {}} text='Step back' title='cancel' />
                                       </Link>
                                        
                                        <Link to={'/create-order/posting'}>
                                        <ChevronMoveTo variant='right' onClick={() => {}} text='Next step' title='Negotiation' />
                                        </Link>
                                </div>
                            </div>
                       </div>
                    }
                    item2={
                       <div >
                            <div>
    
                                <div className={styles.top_image_wrapper}>
                                    <div className='gap_15'>
                                        <img src={fakeUserConstant.image} height={'40px'} width={'40px'} alt="" />
                                        <AppColor.longChevronRight />
                                        <div>
                                            <img src={fakeUserConstant.image} height={'40px'} width={'40px'} alt="" />
                                            <img style={{marginLeft: '-10px'}} src={fakeUserConstant.image} height={'40px'} width={'40px'} alt="" />
                                        </div>
                                        <div className='desktop'>
                                            <div className={styles.template_icon}>
                                            <AppColor.template />
                                            </div>
                                        </div>
                                    </div>
                                </div>
    
                                <DynamicPadding />
    
                                <div className={styles.right_text_box}>
                                    <Typography variant='body3' fontWeight='500'>Title examples</Typography>
                                    <DynamicPadding desktop='30px' mobile='20px'/>
                                    <ul className={styles.ul_wrapper}>
                                        <li>
                                            <Typography variant='body4'>Build responsive WordPress site with booking/payment functionality</Typography>
                                        </li>
                                        <li>
                                            <Typography variant='body4'>Graphic designer needed to design ad creative for multiple campaigns</Typography>
                                        </li>
                                        <li>
                                            <Typography variant='body4'>Facebook ad specialist needed for product launch</Typography>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                       </div>
                    }
                />
                           <AskedQuestion />
           </div>
           <Footer />
      </div>
    );
};

export default CreateOrderNegotiation;