import React, { useEffect, useRef, useState } from 'react';
import styles from './style.module.scss';
import AppColor from '@common/styles/variables-static';
import { useScreenSize } from '@common/helpers/useScreenSize';

type SliderByRefProps = {
  nodes: React.ReactNode[];
  endToFrontIndex?: number;
};

const SliderByRef = ({ nodes, }: SliderByRefProps) => {
  const { width, height } = useScreenSize();
  const gap = width < 769 ? 5 : 10;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalTransform, setTotalTransform] = useState(0);
  const currentItemRef = useRef<HTMLDivElement | null>(null);
  const previousItemRef = useRef<HTMLDivElement | null>(null);
  const totalRef = useRef<HTMLDivElement | null>(null);
  const [nodesShow,setNodesShow] = useState<React.ReactNode[]>(nodes);

  function handleMoveOn() {
    
    if (currentItemRef.current && currentItemRef.current.offsetWidth) {
      if(currentIndex < nodes.length) {
        const currentItemWidth = currentItemRef.current.offsetWidth;
        setTotalTransform((prev) => prev + currentItemWidth + gap);
        setCurrentIndex((prev) => prev + 1);
      } else {
        setNodesShow(prev => [...prev,...nodes]);
        const currentItemWidth = currentItemRef.current.offsetWidth;
        setTotalTransform((prev) => prev + currentItemWidth + gap);
        setCurrentIndex((prev) => prev + 1);
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
        const previousWidth = previousItemRef.current.offsetWidth;
        setNodesShow(prev => [...nodes,...prev]);
        setTotalTransform((prev) => prev - previousWidth - gap);
        setCurrentIndex((prev) => prev - 1);
      }
    }
  }

  return (
    <div className={styles.relative}>
        <div className={styles.wrapper}>
          <div ref={totalRef} className={styles.flex_wrapper} style={{ transform: `translateX(-${totalTransform}px)`, gap: gap }}>
            {nodesShow.map((node, index) => (
              <div
                key={index}
                ref={index === currentIndex ? currentItemRef : index === currentIndex-1 ? previousItemRef : null}
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
