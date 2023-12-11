

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
          <AppColor.chevronRight />
          {textList.map((item,index) => <div className={styles.wrapper}>
            <SizeBox width='15px' />
            {item}
            {index == textList.length-1
            ? <></>
            : <AppColor.chevronRight />
            }

          </div> )}
      </div>
    );
};

export default NavigationItem;