
import Typography from '@common/components/ui/Typography/Typography';
import styles from './style.module.scss';
import PercentBar from '@common/components/ui/PercentBar/PercentBar';
import DynamicPadding from '@common/components/ui/DynamicPadding/index';
import SizeBox from '@common/components/ui/SizeBox/index';
import ChooseVariant from './components/ChooseVariant';

const SecondStep = () => {

    return (
        <div>
        <div className={styles.wrapper}>
             <div className={styles.left}>
                  <div>
                      <Typography variant='body4'>Step 2/3 - User ID document</Typography>
                      <PercentBar
                          currentPercent={66}
                          height='13px'
                      />
                  </div>
                  <SizeBox height='30px'/>
                  <Typography variant='body3' fontWeight='500'>Kind of document</Typography>
                  <DynamicPadding desktop='30px' mobile='20px' />
                  <ChooseVariant
                    items={['id cards', 'passport', 'Driving licence']}
                    callback={() => {}}
                  />
            </div>
            <div className={styles.right}>
                    <div className={styles.right_wrapper}>
                        <Typography variant='body4' fontWeight='500'>Requirements:</Typography>
                        <DynamicPadding desktop='15px' mobile='15px'/>
                        <div style={{marginLeft: '15px'}}>
                            <Typography variant='body4' fontWeight='400'>• Please include a picture of yourself holding the document and a piece of paper next to your face. Write 'Uniano' and today's date on the paper. Please make sure that the information on the document is clear, readable and identical to the data you have indicated in the request form, including: Full name, Date of birth.</Typography>
                            <Typography variant='body4' fontWeight='400'>• The identification document should expire in at least 6 months or more at the time of application submission.</Typography>
                            <Typography variant='body4' fontWeight='400'>• Please note that a driver's license can only be attached by US residents. </Typography>
                            <Typography variant='body4' fontWeight='400'>• All information from your ID must be readable. </Typography>
                            <Typography variant='body4' fontWeight='400'>• The size of one image must be less than 10 MB. </Typography>
                        </div>
                    </div>
               </div>
        </div>
      </div>
    );
};

export default SecondStep;