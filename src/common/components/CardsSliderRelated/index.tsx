
import { useScreenSize } from '@common/helpers/useScreenSize';
import FilterList, { FilterListBig } from '../FilterList';
import CardStatisticTest from '../cards/CardStatistics/variants/CardStatisticTest';
import Slider from '../ui/Slider/Slider';
import styles from './style.module.scss';
import DynamicPadding from '../ui/DynamicPadding';

const CardsSliderRelated = () => {
    const {width,height} = useScreenSize();

    return (
    <div>
      <DynamicPadding />
        <div className={styles.wrapper}>
             <div className={styles.content}>
                 <div>
                    <FilterListBig
                      filters={['Related', 'Partnership', 'Projects', 'History']}
                    />
                 </div>
                   <Slider swiper={true} paddingBottom='10px' paddingTop='20px' elementsCount={6} itemWidth={250} maxWidth={width > 768 ? 1120 : 250} gap={40}>
                      <CardStatisticTest />
                      <CardStatisticTest />
                      <CardStatisticTest />
                      <CardStatisticTest />
                      <CardStatisticTest />
                      <CardStatisticTest />
                      <CardStatisticTest />
                      <CardStatisticTest />
                      <CardStatisticTest />
                      <CardStatisticTest />
                  </Slider>
             </div>
        </div>
    </div>
    );
};

export default CardsSliderRelated;