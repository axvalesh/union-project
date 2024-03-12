
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';
import Typography from '@common/components/ui/Typography/Typography';

const TemplateItem = () => {

    return (
      <div className={`${styles.template_wrapper} cursor`}>
           <AppColor.template height={'35px'} width={'35px'} />
           <div className={styles.flex_column}>
                <Typography variant='body4' fontWeight='500'>Design portfolio</Typography>
                <Typography variant='body5'><span className={styles.hover_text} >Saved </span><span className={styles.hover_text} >• 16 Oct 2023 13:15</span></Typography>
           </div>
           <div style={{marginLeft: 'auto',alignSelf: 'center'}} className='gap_5'>
                <AppColor.edit fill={AppColor.text} height={'15px'}/>
                <AppColor.close width={'15px'} height={'15px'} fill={AppColor.red}/>
           </div>
      </div>
    );
};

export default TemplateItem;