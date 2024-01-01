import { useRef,useEffect,useState } from 'react'
import styles from './style.module.scss'
import leftChevron from '@assets/svg/chevron-left.svg';
import rightChevron from '@assets/svg/chevron-right.svg';
import AppColor from '@common/styles/variables-static';

interface SliderProps {
    children: React.ReactNode;
    elementsCount: number;
    maxWidth: number;
    gap: number;
    itemWidth: number;
    paddingTop?: string;
    paddingBottom?: string;
}
const Slider = ({children,elementsCount,maxWidth,gap,itemWidth,paddingTop,paddingBottom}:SliderProps) => {
    const [currentIndex,setCurrentIndex] = useState(0);
    const elementsToShow = Math.round(maxWidth/(itemWidth))
    console.log(currentIndex + 'is index')
    console.log(elementsCount + 'is elements count')
    console.log(elementsToShow + 'is elements to show')
    function moveOn() {
        if(currentIndex < elementsCount-elementsToShow) {
            setCurrentIndex(prev => prev + 1)
        } else {
            setCurrentIndex(0)
        }
    }
    function moveBack() {
        if(currentIndex < 1) {
            setCurrentIndex(elementsCount-elementsToShow)
        } else {
            setCurrentIndex(prev => prev - 1)
        }
    }
    
    
    return (
      <div className={styles.shell}>
        <div style={{width: (maxWidth+20),paddingTop: paddingTop,paddingBottom:paddingBottom}} className={styles.sliderOverflow}>

            <div style={{gap: gap,transform: `translateX(-${(currentIndex)*(itemWidth)+(currentIndex)*gap}px)`}} className={styles.slider} >
                {children}
           </div>
        </div>
        <span className={styles.left}>
           <span onClick={moveBack} className={styles.chevron}>
            <AppColor.chevronLeft fill='white' width={17} height={30} />
           </span>
        </span>
        <span className={styles.right}>
           <span onClick={moveOn} className={styles.chevron}>
            <AppColor.chevronRight fill='white' width={17} height={30} />
           </span>
           </span>
      </div>
    );
};

export default Slider;