import { useRef,useEffect,useState } from 'react'
import styles from './style.module.scss'
import leftChevron from '@assets/svg/chevron-left.svg';
import rightChevron from '@assets/svg/chevron-right.svg';

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
    const sliderRef = useRef<HTMLDivElement>(null);
    const [childrenWidth, setChildrenWidth] = useState<number | null>(null);
    const [currentIndex,setCurrentIndex] = useState(0);
    useEffect(() => {
        if (sliderRef.current) {
        const width = itemWidth*elementsCount + ((elementsCount - 1) * gap);
        setChildrenWidth(width);
        }
    }, [children]);
    
    function moveOn() {
        if(currentIndex < elementsCount-1) {
            setCurrentIndex(prev => prev + 1)
        } else {
            setCurrentIndex(0)
        }
    }
    function moveBack() {
        if(currentIndex < 1) {
            setCurrentIndex(elementsCount-1)
        } else {
            setCurrentIndex(prev => prev - 1)
        }
    }
    
    
    return (
      <div className={styles.shell} ref={sliderRef}>
        <div style={{width: maxWidth,paddingTop: paddingTop,paddingBottom:paddingBottom}} className={styles.sliderOverflow}>

            <div style={{gap: gap,transform: `translateX(-${currentIndex * ((childrenWidth ?? 0) / elementsCount)}px)`}} className={styles.slider} >
                {children}
           </div>
        </div>
        <span className={styles.left}>
           <span onClick={moveBack} className={styles.chevron}>
            <img width={17} height={30} src={leftChevron} alt="" />
           </span>
        </span>
        <span className={styles.right}>
           <span onClick={moveOn} className={styles.chevron}>
            <img width={17} height={30} src={rightChevron} alt="" />
           </span>
           </span>
      </div>
    );
};

export default Slider;