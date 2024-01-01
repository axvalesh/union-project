
import Typography from '@common/components/ui/Typography/Typography';
import { nav_var_categorys } from './content';
import styles from './style.module.scss';
import AppColor from '@common/styles/variables-static';

type PagesNavProps = {
    hovered: boolean;
}
const PagesNav = ({hovered}:PagesNavProps) => {

    return (
    <div className={`${styles.hover_wrapper} ${hovered ? styles.active : styles.disabled}`}>
        {nav_var_categorys.map(item =>
            <div className={styles.hover_content}>
                <div className={styles.category_image}>
                    {<item.image width={'30px'} height={'30px'}/>}
                </div>
                <div className={styles.categoty_text}>
                    <Typography variant='body4' fontWeight='500'>
                        {item.title}
                    </Typography>
                    <div>
                    <Typography color={AppColor.transparentBlack} variant='body1'>
                        {item.text}
                    </Typography>
                    </div>
                </div>
            </div>    
        )}
    </div>
    );
};

export default PagesNav;