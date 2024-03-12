
import AppColor from '@common/styles/variables-static';
import styles from './style.module.scss';

const HoverDotsBox = () => {

    return (
      <div className={`${styles.wrapper_dots} cursor`}>
           <AppColor.threePoints />
      </div>
    );
};

export default HoverDotsBox;