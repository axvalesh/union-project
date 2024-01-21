import { useEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import AppColor from '@common/styles/variables-static';
import { useScreenSize } from '@common/helpers/useScreenSize';

type SliderByRefProps = {
  nodes: React.ReactNode[];
  endToFrontIndex: number;
};

const SliderByRef = ({ nodes,endToFrontIndex }: SliderByRefProps) => {
  const { width, height } = useScreenSize();
  const gap = width < 769 ? 5 : 10;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalTransform, setTotalTransform] = useState(0);
  const currentItemRef = useRef<HTMLDivElement | null>(null);
  const previousItemRef = useRef<HTMLDivElement | null>(null);
  const totalRef = useRef<HTMLDivElement | null>(null);
  const stayAtRef = useRef<HTMLDivElement | null>(null);

  function handleMoveOn() {
    
    if (currentItemRef.current && currentItemRef.current.offsetWidth) {
      if(currentIndex < endToFrontIndex) {
        const currentItemWidth = currentItemRef.current.offsetWidth;
        setTotalTransform((prev) => prev + currentItemWidth + gap);
        setCurrentIndex((prev) => prev + 1);
      } else {
        setTotalTransform(0);
        setCurrentIndex(0)
      }
    }
  }
  function handleMoveUndo() {
    
    if (previousItemRef.current && previousItemRef.current.offsetWidth) {
      if(currentIndex > 0) {
        const previousWidth = previousItemRef.current.offsetWidth;
        setTotalTransform((prev) => prev - previousWidth - gap);
        setCurrentIndex((prev) => prev - 1);
      } else {
        const totalWidth = stayAtRef.current.offsetWidth;
        setTotalTransform(totalWidth);
        setCurrentIndex(endToFrontIndex)
      }
    }
  }

  return (
    <div className={styles.relative}>
        <div className={styles.wrapper}>
          <div ref={totalRef} className={styles.flex_wrapper} style={{ transform: `translateX(-${totalTransform}px)`, gap: gap }}>
            {nodes.map((node, index) => (
              <div
                key={index}
                ref={index === currentIndex ? currentItemRef : index-1 === currentIndex ? previousItemRef : index == endToFrontIndex ? stayAtRef : null}
              >
                {node}
              </div>
            ))}
          </div>
        </div>
        <div onClick={handleMoveUndo} className={styles.left}>
            <AppColor.chevronLeft fill="white" width={'30px'} height={'15px'} />
          </div>
          <div onClick={handleMoveOn} className={styles.right}>
            <AppColor.chevronRight fill="white" width={'30px'} height={'15px'} />
          </div>
    </div>
  );
};

export default SliderByRef;
