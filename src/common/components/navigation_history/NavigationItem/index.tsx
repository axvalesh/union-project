

import AppColor from '@common/styles/variables-static';
import SizeBox from '../../ui/SizeBox';
import styles from './style.module.scss';

type NavigationItemProps = {
    image: React.ReactNode;
    textList: React.ReactNode[];
}
const NavigationItem = ({image,textList}:NavigationItemProps) => {

    return (
      <div style={{display: 'flex'}} className={styles.wrapper}>
          {image}
          <SizeBox width='15px' />
          <AppColor.chevronRight fill={AppColor.transparentBlack}  />
          <SizeBox width='15px' />
          {textList.map((item,index) => <div className={styles.wrapper}>
            {item}
            {index == textList.length-1
            ? <></>
            : <div className={styles.chevron}><AppColor.chevronRight fill={AppColor.transparentBlack} width={10} height={12} /></div>
            }

          </div> )}
      </div>
    );
};

export default NavigationItem;