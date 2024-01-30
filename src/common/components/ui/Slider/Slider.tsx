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
    swiper?: boolean;
}
const Slider = ({children,elementsCount,maxWidth,gap,itemWidth,paddingTop,paddingBottom,swiper}:SliderProps) => {
    const [startX, setStartX] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    const [currentIndex, setCurrentIndex] = useState(0);
    const elementsToShow = Math.round(maxWidth / itemWidth);

    const [showChildren,setShowChildren] = useState<React.ReactNode[]>([children]);
    function moveOn() {
        if (currentIndex < elementsCount - elementsToShow) {
            setCurrentIndex((prev) => prev + 1);
        } else {
            showChildren.push(children);
            setCurrentIndex((prev) => prev + 1);
        }
    }

    function moveBack() {
        if (currentIndex < elementsCount - elementsToShow) {
            showChildren.unshift(children);
            setCurrentIndex((prev) => prev - 1);
        } else {
            setCurrentIndex((prev) => prev - 1);
        }
    }

    function handleDragStart(e: React.MouseEvent | React.TouchEvent) {
        setStartX(getClientX(e));
        setIsDragging(true);
    }

    function handleDragMove(e: React.MouseEvent | React.TouchEvent) {
        if (!isDragging) return;

        const currentX = getClientX(e);
        const deltaX = startX - currentX;

        if (deltaX > 0) {
            // Swiping left
            moveOn();
        } else if (deltaX < 0) {
            // Swiping right
            moveBack();
        }

        setIsDragging(false);
    }

    function handleDragEnd() {
        setIsDragging(false);
    }

    function getClientX(e: React.MouseEvent | React.TouchEvent) {
        return 'touches' in e ? e.touches[0].clientX : e.clientX;
    }

    const style = swiper ? styles.remove_on_mobile : styles.empty
    const styleDots = swiper ? styles.remove_on_desktop : styles.empty


    const dots = Array.from({ length: elementsCount}, (_, index) => index);

    return (
        <div className={styles.shell}>
            <div
                onMouseDown={handleDragStart}
                onTouchStart={handleDragStart}
                onMouseMove={handleDragMove}
                onTouchMove={handleDragMove}
                onMouseUp={handleDragEnd}
                onTouchEnd={handleDragEnd}
                style={{ paddingTop, paddingBottom }}
                className={styles.sliderOverflow}
            >
                <div
                    style={{ gap, transform: `translateX(-${currentIndex * (itemWidth) + currentIndex * gap}px)` }}
                    className={styles.slider}
                >
                    {...showChildren}
                </div>
            </div>
            <span className={styles.left + ' ' + style}>
                <span onClick={moveBack} className={styles.chevron}>
                    <AppColor.chevronLeft fill="white" width={17} height={30} />
                </span>
            </span>
            <span className={styles.right + ' ' + style}>
                <span onClick={moveOn} className={styles.chevron}>
                    <AppColor.chevronRight fill="white" width={17} height={30} />
                </span>
            </span>
            <div className={`${styles.dots} ${styleDots}`}>
                {dots.map((dotIndex) => (
                    <span
                        key={dotIndex}
                        className={dotIndex === currentIndex ? styles.activeDot : styles.dot}
                        onClick={() => setCurrentIndex(dotIndex)}
                    ></span>
                ))}
            </div>
        </div>
    );
};
export default Slider;